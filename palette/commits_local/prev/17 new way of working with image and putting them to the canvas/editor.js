class Editor {
  constructor(p_Session) {
    this.S = p_Session;
    this.S.imageOrig.saveToImage(this.S.canvasImage);
  }
}