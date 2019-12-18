class Editor {
  constructor(p_Session) {
    this.S = p_Session;
    this.S.imageOrig.saveToImage(this.S.canvasImage);
    this.imageTemp = new Image(0,0);
    this.prevUpdatedX = -1;
    this.prevUpdatedY = -1;

    this.isDrawPixelDuringMouseMove = false;
    this.isDrawPixelUnderCursor = false;
  }
  /////////////////////////////////////////////////////////////////////////
  //
  // this.editor.event_DoMouseMove(e.clientX, e.clientY);
  //
  event_DoMouseMove(p_x,p_y) {

    let coord = this.S.transformCanvasPtToOrigImagePt(p_x,p_y);

    // Nothing is changed! Let's do NOT handle an event! :-)
    if (coord[0] == this.prevUpdatedX && coord[1] == this.prevUpdatedY)
      return;


    this.imageTemp.resize(this.S.imageOrig.width,this.S.imageOrig.height);
    this.S.imageOrig.saveToImage(this.imageTemp);

    if (this.isDrawPixelUnderCursor && this.isDrawPixelDuringMouseMove) {
      this.imageTemp.putPixel(coord[0],coord[1],this.S.color);
    }

    this.imageTemp.saveToImage(this.S.canvasImage);
  }

  /////////////////////////////////////////////////////////////////////////
  //
  // 
  //
  event_DoMouseEnter() {
    this.isDrawPixelUnderCursor = true;
  }

  /////////////////////////////////////////////////////////////////////////
  //
  // 
  //
  event_DoMouseLeave() {
    this.isDrawPixelUnderCursor = false;
    // refactor
    this.S.imageOrig.saveToImage(this.S.canvasImage);
  }

  /////////////////////////////////////////////////////////////////////////
  //
  // 
  //
  notify_ImageChanged() {
    this.S.imageOrig.saveToImage(this.S.canvasImage);
  }
  /////////////////////////////////////////////////////////////////////////
  //
  // 
  //
  notify_NewToolSelected() {
    let t = this.S.getSelectedTool();
    this.isDrawPixelDuringMouseMove = (t == "fill-bucket-tool" || t == "pencil-tool");
  }


}