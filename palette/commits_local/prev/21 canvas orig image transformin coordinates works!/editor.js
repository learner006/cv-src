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

    // for debugging purpose ;-)
    //alert(`${p_x} ${p_y}`);

    let e = document.getElementById("fill-bucket-tool");
    //e.innerHTML = `${p_x} ${p_y}`;
    e.innerHTML = `${coord[0]} ${coord[1]}`;
  }
}