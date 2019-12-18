class ImageView {
  constructor(p_CanvasId) {
    this.canvasId = p_CanvasId;
  }
  update(p_Image) {
    let el = document.getElementById(this.canvasId);
    if (el !== undefined)
      p_Image.saveToCanvas(el);
  }
  getCanvas() {
    return document.getElementById(this.canvasId);
  }
}