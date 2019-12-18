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

    let coord = this.S.transformCanvasPtToOrigImagePt(p_x,p_y);

    this.imageTemp.width = this.S.imageOrig.width;
    this.imageTemp.height = this.S.imageOrig.height;

    this.S.imageOrig.saveToImage(this.imageTemp);
    let pixelColor = 0;
    this.imageTemp.putPixel(coord[0],coord[1],pixelColor);
    this.imageTemp.saveToImage(this.S.canvasImage);

  }
}