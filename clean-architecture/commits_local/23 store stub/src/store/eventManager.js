import say from '../utils.js';

const subscriber = (p_eventManagerState) => (
  {
    subscribe: (p_eventManagerState) => {
      say('subscribe! :-)');
    }
  }
);

const publisher = (p_eventManagerState) => (
  {
    publish: (p_eventManagerState) => {
    }
  }
);


const eventManager = () => {
  const state = {
  };

  return Object.assign({},subscriber(state));
}

export default eventManager;