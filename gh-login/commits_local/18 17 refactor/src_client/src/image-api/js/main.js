import '../css/style.css';
import say from './say';
import Controller from './controller';
import Session from './session';
import {Logger as ClientLogger} from './logger';

window.addEventListener("DOMContentLoaded", ()=>{
  //let c = new Controller();
  //new Session();
  //say(ClientLogger);
  new ClientLogger();
}
);