const http = require("http");
const path = require("path");
const fs = require("fs");
const urlmod = require("url");
const m_request = require("request");
const m_qs = require("querystring");

const say = require("./say");

const G_OAUTH_CLIENT_ID = '094b8223ae57d27a9e19';
const G_OAUTH_CLIENT_SECRET = 'de46b92b642fc6a4d9955efcf9eed0ce3934ca40';
const G_OAUTH_REDIRECT_URI = 'http://localhost:5000/redir';


function getOAuthURLStage1() {
  return 'https://github.com/login/oauth/authorize?'
    + `client_id=${G_OAUTH_CLIENT_ID}&`
    + `redirect_uri=${G_OAUTH_REDIRECT_URI}`;
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


const server = http.createServer((req, res) => {

  say(`${req.method} ${req.url}`);

  if (req.url == '/login') {
    let url = getOAuthURLStage1();

    // 302 to prevent caching. Just in case! ;-)
    res.writeHead(302, { 'Location': url });
    res.end();

    return;
  }
  // an url should look like
  // /redir?code=4bbee220dd68bf8f9dd9
  else if (req.url.indexOf('/redir?') == 0) {
    const query = urlmod.parse(req.url, true).query;

    const gh_code = query['code'];
    const gh_state = query['state'];

    if (gh_code) {
      m_request.post(
        getRequestOptionsStage3(gh_code),
        (p_error, p_response, p_body) => {
          const query = m_qs.parse(p_body);

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

    let filePath = path.join(__dirname, 'public', filename);

    fs.readFile(filePath, (err, content) => {
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
