function say(p_text) {
	console.log(p_text);
}


const obj_here = require('./module1');
say(obj_here);


import { obj1 } from './es2015_module_export.js';
say(obj1);