const crypto = require("crypto");

module.exports = function getRandomString(p_bytesCount) {
  return crypto.randomBytes(p_bytesCount).toString('hex');
}