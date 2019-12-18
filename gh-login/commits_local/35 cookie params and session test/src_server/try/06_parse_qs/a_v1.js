const say = require("../../say");
const m_qs = require('querystring');

const v_qs = 'error=bad_verification_code&error_description=The+code+passed+is+incorrect+or+expired.&error_uri=https%3A%2F%2Fdeveloper.github.com%2Fapps%2Fmanaging-oauth-apps%2Ftroubleshooting-oauth-app-access-token-request-errors%2F%23bad-verification-code';

//say(qs.parse(v_qs));

const query = m_qs.parse(v_qs);

const error = query['error'];
const error_desc = query['error_description'];

say(error);
say(error_desc);
