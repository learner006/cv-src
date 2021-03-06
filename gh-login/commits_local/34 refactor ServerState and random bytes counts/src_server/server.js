const m_Http = require("http");
const m_Path = require("path");
const m_Fs = require("fs");
const m_Request = require("request");
const m_Qs = require("querystring");
const m_Uuidv1 = require('uuid/v1');

const say = require("./say");
const StringStorage = require("./session");
const getRandomStr = require("./random-string");


const G_OAUTH_CLIENT_ID = '094b8223ae57d27a9e19';
const G_OAUTH_CLIENT_SECRET = 'de46b92b642fc6a4d9955efcf9eed0ce3934ca40';
const G_OAUTH_REDIRECT_URI = 'http://localhost:5000/redir';

class ServerState {
  constructor() {
    this.ghCSRF = new StringStorage();

    this.randomBytesCount = {
      ghCSRF: 10,
      tempCookie: 10,
      sessionCookie: 15
    };
  }
}

const g_ServerState = new ServerState();


function getOAuthURLStage1(p_state) {

  return 'https://github.com/login/oauth/authorize?'
    + `client_id=${G_OAUTH_CLIENT_ID}&`
    + `redirect_uri=${G_OAUTH_REDIRECT_URI}&`
    + `state=${p_state}`;
}

function getRandomStrStage1() {
  return g_ServerState.ghCSRF.putRandomStr(g_ServerState.randomBytesCount.ghCSRF);
}

function getRequestOptionsStage3(p_stage1_code) {
  return {
    url: 'https://github.com/login/oauth/access_token',
    form: {
        client_id: G_OAUTH_CLIENT_ID,
        client_secret: G_OAUTH_CLIENT_SECRET,
        code: p_stage1_code,
        redirect_uri: G_OAUTH_REDIRECT_URI
    }
  };
}


const server = m_Http.createServer((req, res) => {

  say(`${req.method} ${req.url}`);

  if (req.url == '/login') {
    let randomStr = getRandomStrStage1();
    let url = getOAuthURLStage1(randomStr);

    // 302 to prevent caching. Just in case! ;-)
    res.writeHead(302, { 'Location': url });
    res.end();

    return;
  }
  // an url should look like
  // /redir?code=4bbee220dd68bf8f9dd9
  else if (req.url.indexOf('/redir?') == 0) {
    const query = m_Qs.parse(req.url);

    const gh_code = query['code'];
    const gh_state = query['state'];

    // let's be quiet! :-)
    if (!g_ServerState.ghCSRF.exists(gh_state)) {
      res.end();
      return;
    }

    say(`xxx---${gh_state}`);

    if (gh_code) {
      m_Request.post(
        getRequestOptionsStage3(gh_code),
        (p_error, p_response, p_body) => {
          const query = m_Qs.parse(p_body);

          const error = query['error'];
          const error_desc = query['error_description'];
      
          const access_token = query['access_token'];
          const scope = query['scope'];
          const token_type = query['token_type'];

          say(error);
          say(error_desc);
          say(access_token);
          say(scope);
          say(token_type);
        }
      );
    }
    res.setHeader('Content-Type', 'text/html');
    let tt = Date().toLocaleString();
    say(`Cooooookie: ${tt}`);
    //res.setHeader('Cookie', [`time=${tt}`, 'language=javascript']);

    // 302 to prevent caching. Just in case! ;-)
    res.writeHead(302, 
      {
       'Set-Cookie': `mycookie=xxxxxxxxx; Max-Age=2`, 
       'Location': 'http://localhost:5000/'
      }
    );
    res.end();


    return;
  }

  let validPath = ['/','/style.css','/bundle.js'];
  let contentTypeArr = ['text/html', 'text/css','text/javascript'];

  let resourceIndex = validPath.indexOf(req.url);

  if (resourceIndex == -1)
    res.end();
  else {
    let filename = 'index.html';
    if (req.url !== '/')
      filename = req.url.slice(1);

    res.setHeader('Content-Type', contentTypeArr[resourceIndex]);

    let filePath = m_Path.join(__dirname, 'public', filename);

    m_Fs.readFile(filePath, (err, content) => {
      if (err)
        res.end();
      else {
        res.end(content,'utf8');
      }
    });
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => say(`Server running on port ${PORT}`));
