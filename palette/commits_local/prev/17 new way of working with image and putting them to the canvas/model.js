class Session {
  constructor() {
    this._selectedTool = "fill-bucket";
    this.setColor("prevColor",16768460); // #FFDDCC
    this.setColor("currColor",16711680); // #FF0000
    this.picName = "4x4";
    this.picURL = ""; // reserved! :-)
    this.imageOrig = null;
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.canvasImage = null;
  }

  setSelectedTool(p_toolName) {
    this._selectedTool = p_toolName;
  }

  getSelectedTool() {
    return this._selectedTool;
  }

  setColor(p_colorKind, p_val) {
    this[p_colorKind] = p_val;
  }

  getColor(p_colorKind) {
    return this[p_colorKind];
  }

  saveImageIntoDatastorage() {
  }
}