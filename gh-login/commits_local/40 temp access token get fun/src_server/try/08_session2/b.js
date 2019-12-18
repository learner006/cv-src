const say = require("../../say");

let myCar = {};
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 67;

function show_props(obj, obj_name) {
          var result = ""
          for (var i in obj) {
              say(i);
                    result += obj_name + "." + i + " = " + obj[i] + "\n"
          }
          return result
}



say(show_props(myCar, "myCar"));


