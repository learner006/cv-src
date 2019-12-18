class Editor {
  constructor(p_Session) {
    this.S = p_Session;
    this.S.imageOrig.saveToImage(this.S.canvasImage);
    this.imageTemp = new Image(0,0);
    this.prevUpdatedX = -1;
    this.prevUpdatedY = -1;

    this.isDrawPixelDuringMouseMove = false;
    this.isDrawPixelUnderCursor = false;
    this.isDrawing = false;
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

    if (this.isPencil() && this.isDrawing)
    {
      this.S.imageOrig.putPixel(coord[0],coord[1],this.S.color);
      this.S.imageOrig.saveToImage(this.S.canvasImage);
    }
    else
    {
      this.imageTemp.resize(this.S.imageOrig.width,this.S.imageOrig.height);
      this.S.imageOrig.saveToImage(this.imageTemp);
  
      if (this.isDrawPixelUnderCursor && this.isDrawPixelDuringMouseMove) {
        this.imageTemp.putPixel(coord[0],coord[1],this.S.color);
      }
  
      this.imageTemp.saveToImage(this.S.canvasImage);
    }


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
    this.isDrawing = false;
    // refactor
    this.S.imageOrig.saveToImage(this.S.canvasImage);
  }
  /////////////////////////////////////////////////////////////////////////
  //
  // 
  //
  event_DoMouseDown(p_x, p_y) {
    
    let coord = this.S.transformCanvasPtToOrigImagePt(p_x,p_y);

    

    if (this.isPencil()) {
      this.isDrawing = true;

      this.S.imageOrig.putPixel(coord[0],coord[1],this.S.color);
      this.S.imageOrig.saveToImage(this.S.canvasImage);
    }
    else if (this.isFillBucket()) {
      this.S.imageOrig.fill(coord[0],coord[1],this.S.color);
      this.S.imageOrig.saveToImage(this.S.canvasImage);
    }
  }
  /////////////////////////////////////////////////////////////////////////
  //
  // 
  //
  event_DoMouseUp() {
    if (this.isPencil())
      this.isDrawing = false;

  }

  /////////////////////////////////////////////////////////////////////////
  //
  // 
  //
  isPencil() {
    return this.S.getSelectedTool() == "pencil-tool";
  }
  isFillBucket() {
    return this.S.getSelectedTool() == "fill-bucket-tool";
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