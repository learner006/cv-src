const say = require("../../say");
const qs = require('querystring');

const v_qs = 'error=bad_verification_code&error_description=The+code+passed+is+incorrect+or+expired.&error_uri=https%3A%2F%2Fdeveloper.github.com%2Fapps%2Fmanaging-oauth-apps%2Ftroubleshooting-oauth-app-access-token-request-errors%2F%23bad-verification-code';

//qs.parse(v_qs);

say(qs.parse(v_qs));