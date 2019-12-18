import say from './utils.js';
import {createDOMTree} from './vdom/index.js';

const pageDOM = [
  {
    tag: 'header',
    children: [
      {
        tag: 'p',
        attrs: {class: 'header__task-title'},
        innerHTML: '<span class="inline-material-icon material-icons material-icons.md-18">menu</span> Codejam - Canvas (Im)'
      }
    ]
  },
  {
    tag: 'div', 
    attrs: {id: 'left-pane'}
  },
  {
    tag: 'div', 
    attrs: {id: 'right-pane'}
  },
  {
    tag: 'div', 
    attrs: {
      class: 'user-message notification-popup'
      ,style: 'display:none'
    },
    innerHTML: '<p>Application state loaded from the local storage</p>'
  }
];

const root = document.querySelector('body');
createDOMTree(root, pageDOM);