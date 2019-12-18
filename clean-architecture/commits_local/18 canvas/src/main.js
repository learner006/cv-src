import say from '../utils.js';
import getVDOM from './vdom/skeleton.js';
import {createDOMTree} from './vdom/index.js';
import defaultList from './components/lists.js';
import canvasWrapper from './components/canvas.js';


const root = document.querySelector('body');
createDOMTree(root, getVDOM('pageDOM'));

const picNamesList = defaultList(
  document.querySelector('.pic-names-list-parent-div'),
  getVDOM('.pic-names-list')
);

picNamesList.fullRender();

