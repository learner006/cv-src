const getRandomStr = require("./random-string");


// Purpose: There are objects to maintain user sessions

module.exports = class StringStorage {
  put(p_str, p_data = 1) {
    if (this[p_str] !== undefined)
      return false;
    else {
      this[p_str] = p_data;
      return true;
    }
  }

  exists(p_str) {
    return (this[p_str] !== undefined);
  }

  get(p_str) {
    return this[p_str];
  }

  delete(p_str) {
    delete this[p_str];
  }

  putRandomStr(p_bytesCount,p_data) {
    let s;
    do {
      s = getRandomStr(10);
    } while (this.exists(s))
  
    this.put(s,p_data);

    return s;
  }
}
