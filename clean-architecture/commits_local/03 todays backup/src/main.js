import say from './utils.js';
import {createDOMTree} from './vdom/index.js';

let some_DOM_structure_obj = {};

const el = createDOMTree(some_DOM_structure_obj);
const root = document.querySelector('body');

root.appendChild(el);
