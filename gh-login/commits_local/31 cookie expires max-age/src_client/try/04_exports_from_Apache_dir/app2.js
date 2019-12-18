function say(p_text) {
	console.log(p_text);
}


/*
import * as mm from  './es2015_module2_export.js';

mm.sayTest();

// NO CURLY BRACES :-)))
import greeting from './es2015_module_export.js';
say(greeting);
*/

/*
import gr, {sayTest} from  './es2015_module2_export.js';
// ^^^^^ I CAN NOT BELIEVE IT! IT WORKS! :-)))
say(gr);
*/

import gr, {sayTest as SSS} from  './es2015_module2_export.js';
// ^^^^^ I CAN NOT BELIEVE IT! IT WORKS! :-)))
SSS(gr);
