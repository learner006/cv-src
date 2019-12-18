import say from './utils.js';
import {createDOMTree} from './vdom/index.js';

/*
const pageDOM = [
  {tag: 'div', attrs: 'class="div__List"', 
   children: [
    { tag: 'div', attrs: 'id="child1" class="children_example"'} 
   ]

  }
];
*/

const pageDOM = [
  {
    tag: 'div', 
    attrs: {class: 'div__List'}
  }
];

const el = createDOMTree(pageDOM);
const root = document.querySelector('body');

root.appendChild(el);
