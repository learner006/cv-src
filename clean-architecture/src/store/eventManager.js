import say from '../utils.js';

const subscriber = (p_eventManagerState) => (
  {
    subscribe: () => {
      say('subscribe! :-)');
    }
  }
);

const publisher = (p_eventManagerState) => (
  {
    publish: () => {
    }
  }
);


const eventManagerFactory = () => {
  const state = {
  };

  return Object.assign({},subscriber(state));
}

export default eventManagerFactory;