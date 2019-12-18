class Session {
  constructor() {
    this._selectedTool = "fill-bucket";
    this.prevColor = 16768460; // #FFDDCC
    this.currColor = 16711680; // #FF0000
    this.picName = "4x4";
    this.picURL = ""; // reserved! :-)
    this.image = new Image(0,0);
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
