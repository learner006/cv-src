function say(p_text) {
	console.log(p_text);
}


//import { obj1, sayTest } from './es2015_module_export.js';
//sayTest();
 
import * as mm from  './es2015_module_export.js';

mm.sayTest();

// NO CURLY BRACES :-)))
import greeting from './es2015_module_export.js';
say(greeting);