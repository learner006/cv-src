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
      tempCookie : {name: "sessiont", 'Max-Age': '10', 'secure-dt-gap' : 10 * 1000},
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

  createTempCookie(p_ip = '127.0.0.1') {
    const val = this.tempCookieStorage.putRandomStr(
      this.randomBytesCount.tempCookie,
      {date: Date.now(), ip: p_ip}
     );

    const p = this.cookieParams['tempCookie'];

    return `${p.name}=${val}; Max-Age=${p['Max-Age']}`;
  }

}