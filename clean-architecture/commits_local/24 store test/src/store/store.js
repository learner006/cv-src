import say from '../utils.js';
import eventManagerFactory from './eventManager.js';

const storeFactory = () => {
  const eventManager = eventManagerFactory();
  return {
    eventManager: eventManager
  };
}

export default storeFactory;

