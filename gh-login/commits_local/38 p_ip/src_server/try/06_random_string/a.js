const say = require("../../say");

var crypto = require("crypto");
var id = crypto.randomBytes(128).toString('hex');

// "bb5dc8842ca31d4603d6aa11448d1654"
say(id);