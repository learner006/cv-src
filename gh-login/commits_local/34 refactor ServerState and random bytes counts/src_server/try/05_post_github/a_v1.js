const request = require('request');
const urlmod = require("url");
const m_qs = require('querystring');

const say = require("../../say");


const G_OAUTH_CLIENT_ID = '094b8223ae57d27a9e19';
const G_OAUTH_CLIENT_SECRET = 'de46b92b642fc6a4d9955efcf9eed0ce3934ca40';
const G_OAUTH_REDIRECT_URI = 'http://localhost:5000/redir';
//const G_CODE_STAGE1 = '37a7545e07872462aa70';
const G_CODE_STAGE1 = 'ccb49ef98e04f4925325c';



let options = {
    url: 'https://github.com/login/oauth/access_token',
    form: {
        client_id: G_OAUTH_CLIENT_ID,
        client_secret: G_OAUTH_CLIENT_SECRET,
        code: G_CODE_STAGE1,
        redirect_uri: G_OAUTH_REDIRECT_URI
    }
};

request.post(options, (p_error, p_response, p_body) => {

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


});