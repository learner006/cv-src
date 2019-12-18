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

const paletteToolsList = defaultList(
  document.querySelector('.tools-list-parent-div'),
  getVDOM('.palette-tools-list')
);


picNamesList.fullRender();
paletteToolsList.fullRender();

const canvasMainH = document.querySelector('.canvas-main');

// we need to do that! I do not know why at the moment! :-)
canvasMainH.width = 512;
canvasMainH.height = 512;

const canvasMain = canvasWrapper(canvasMainH,null);
canvasMain.paintImage();

