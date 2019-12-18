const getRandomStr = require("./random-string");


// Purpose: There are objects to maintain user sessions

module.exports = class StringStorage {
  put(p_str) {
    if (this[p_str] !== undefined)
      return false;
    else {
      this[p_str] = 1; // it could be any value
      return true;
    }
  }

  exists(p_str) {
    return (this[p_str] !== undefined);
  }

  delete(p_str) {
    delete this[p_str];
  }

  putRandomStr(p_bytesCount) {
    let s;
    do {
      s = getRandomStr(10);
    } while (this.exists(s))
  
    this.put(s);

    return s;
  }
}
