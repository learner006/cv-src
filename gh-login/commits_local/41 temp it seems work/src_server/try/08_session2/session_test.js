const say = require("../../say");
const StringStorage = require("../../session");


let ss = new StringStorage();

let dt = Date.now();
ss.put("xx",{date: dt , ip: "192.168.0.1"});
say(ss.get("xx"));
say(ss.get("xx").date);
say(ss.get("xx")['date']);
say(ss.get("xx")[1]);