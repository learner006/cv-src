import say from '../utils.js';

const toCanvasSaver = (p_customImageState) => (
  {
    saveToCanvas: () => {
      say('saveToCanvas! :-)))');
    }
  }
);

const customImageFactory = () => {
  // todo: fill out this later! ;-)
  const state = {};

  return Object.assign({},toCanvasSaver(state));
}

export default customImageFactory;