import say from './utils';
import {createDOMTree} from './vdom/index';

let some_DOM_structure_obj = {};

const el = createDOMTree(some_DOM_structure_obj);
const root = document.querySelector('body');

root.appendChild(el);
