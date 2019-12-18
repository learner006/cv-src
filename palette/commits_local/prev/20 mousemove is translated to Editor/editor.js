class Editor {
  constructor(p_Session) {
    this.S = p_Session;
    this.S.imageOrig.saveToImage(this.S.canvasImage);
    this.imageTemp = new Image(0,0);
  }
  /////////////////////////////////////////////////////////////////////////
  //
  // this.editor.event_DoMouseMove(e.clientX, e.clientY);
  //
  event_DoMouseMove(p_x,p_y) {
    alert(`${p_x} ${p_y}`);
  }
}