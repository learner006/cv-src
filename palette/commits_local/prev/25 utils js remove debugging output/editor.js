class Editor {
  constructor(p_Session) {
    this.S = p_Session;
    this.S.imageOrig.saveToImage(this.S.canvasImage);
    this.imageTemp = new Image(0,0);
    this.prevUpdatedX = -1;
    this.prevUpdatedY = -1;
  }
  /////////////////////////////////////////////////////////////////////////
  //
  // this.editor.event_DoMouseMove(e.clientX, e.clientY);
  //
  event_DoMouseMove(p_x,p_y) {

    //let coord = this.S.transformCanvasPtToOrigImagePt(p_x,p_y);
    let coord = [Math.floor(Math.random() * 4),Math.floor(Math.random() * 4)];

    if (coord[0] == this.prevUpdatedX && coord[1] == this.prevUpdatedY)
      return;

    this.imageTemp.resize(this.S.imageOrig.width,this.S.imageOrig.height);
    this.S.imageOrig.saveToImage(this.imageTemp);

    let pixelColor = 255; // blue
    this.imageTemp.putPixel(coord[0],coord[1],pixelColor);

    this.imageTemp.saveToImage(this.S.canvasImage);
  }
}