///////////////////////////////////////////////////////////////////////////
// Purpose: It maintains a server's state and provides utility functions
///////////////////////////////////////////////////////////////////////////

const StringStorage = require("./session");
const say = require("./say");

module.exports = class ServerState {
  constructor() {
    this.ghCSRFStorage = new StringStorage();
    this.tempCookieStorage = new StringStorage();
    this.sessionCookieStorage = new StringStorage();

    const seconds = 7 * 24 * 60 * 60;
    this.cookieParams = {
      tempCookie : {name: "sessiont", 'Max-Age': '1000', 'secure-dt-gap' : 10 * 1000},
      sessionCookie: {name: "session", 'Max-Age': `${seconds}`, 'secure-dt-gap' : 7 * 24 * 60 * 60 * 1000}
    }

    this.randomBytesCount = {
      ghCSRF: 10,
      tempCookie: 10,
      sessionCookie: 15
    };
  }

  getRandomStrStage1() {
    return this.ghCSRFStorage.putRandomStr(this.randomBytesCount.ghCSRF);
  }

  createTempCookie(p_access_token, p_ip = '127.0.0.1') {
    const val = this.tempCookieStorage.putRandomStr(
      this.randomBytesCount.tempCookie,
      {date: Date.now(), ip: p_ip, access_token: p_access_token}
     );

   say('>>>>>>>>>>>>>>createTempCookie');
   say(p_access_token);
   say(this.tempCookieStorage.get(val))

    const p = this.cookieParams['tempCookie'];

    return `${p.name}=${val}; Max-Age=${p['Max-Age']}`;
  }

  forceExpireSessionCookie() {
    const p = this.cookieParams['sessionCookie'];

    return `${p.name}=; Max-Age=10000`;
  }

  getAccessToken(p_cookies) {
    let list = {};
    const rc = p_cookies;

    rc && rc.split(';').forEach(function( cookie ) {
      let parts = cookie.split('=');
      list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    say(list);



    // to-do: refactor as we need only 1 cookie!
    // use regexes maybe? + what decodeURI is. Is it standard function?
    const sessionTempId = list[this.cookieParams['tempCookie'].name];

    let val;
    if (sessionTempId) {

      let rec = this.tempCookieStorage.get(sessionTempId);
      say('rrrrrrrrr');
      say(rec);

      if (rec) {
        val = rec['access_token'];
      }
   }


    return val ? val : '';
  }

}