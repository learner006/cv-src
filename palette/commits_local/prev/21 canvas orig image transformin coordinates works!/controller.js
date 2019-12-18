class Controller {
  constructor() {
    this.session = new Session();

    this.session.imageOrig = new Image(4,4);
  
    this.dataStorage = new DataStorage();
    let arr = this.dataStorage.get('4x4');
  
    this.session.imageOrig.data = [];
  
    arr.forEach(
      (arr_line) => {
        let IntColorsLine = arr_line.map((p_colorStr) => {return HEXToIntColor(p_colorStr)});
        this.session.imageOrig.data.push(IntColorsLine);
      }
    );

    this.imageViewCanvasMain = new ImageView('canvasMain');
    this.session.canvasImage = new Image(512,512,this.imageViewCanvasMain);

    // to-do: refactor it! :-)
    this.session.setCanvasAndOrigImageDimensions(
    [
      this.session.canvasImage.width,
      this.session.canvasImage.height,
      this.session.imageOrig.width,
      this.session.imageOrig.height
    ]
    );

    this.editor = new Editor(this.session);
  }

  callback_MouseMoveCanvas(p_MouseEvent) {
    let e = p_MouseEvent;
    this.editor.event_DoMouseMove(e.offsetX, e.offsetY);
  }
}