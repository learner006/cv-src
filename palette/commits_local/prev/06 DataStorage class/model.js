let Utils = require('./utils.js');
let HEXToIntColor = Utils.HEXToIntColor;
let toColor = Utils.toColor;
let toColorARGB = Utils.toColorARGB;


class Session {
  constructor() {
    this.selectedTool = "fill-bucket";
    this.prevColor = 16768460; // #FFDDCC
    this.currColor = 16711680; // #FF0000
    this.picName = "4x4";
    this.picURL = ""; // reserved! :-)
  }
}