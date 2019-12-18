const say = require("../say");
const StringStorage = require("../session");


let ss = new StringStorage();

say(ss.put("xx",Date.now()));
say(ss.put("xx",Date.now())); 

say(new Date(ss.get("xx")).getHours());


let ss2 = new StringStorage();

let dt = Date.now();
ss2.put("xx",{date: dt , ip: "192.168.0.1"});
say(ss2.get("xx"));

ss2.get("xx").ip = "zzz";
say(ss2.get("xx"));