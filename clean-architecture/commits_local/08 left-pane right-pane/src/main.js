import say from './utils.js';
import {createDOMTree} from './vdom/index.js';

const pageDOM = [
  {
    tag: 'div', 
    attrs: {id: 'left-pane'}
  },
  {
    tag: 'div', 
    attrs: {id: 'right-pane'}
  }
];

const root = document.querySelector('body');
createDOMTree(root, pageDOM);