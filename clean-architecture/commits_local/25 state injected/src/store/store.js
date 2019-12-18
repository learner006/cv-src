import say from '../utils.js';
import eventManagerFactory from './eventManager.js';
import stateFactory from './state.js';

const storeFactory = () => {
  const eventManager = eventManagerFactory();
  const state = stateFactory();

  return {
    eventManager: eventManager,
    state: state
  };
}

export default storeFactory;

