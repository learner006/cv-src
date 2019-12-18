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
    this.session.canvasImage = new Image(512,512,0,this.imageViewCanvasMain);

    let canvas = document.getElementById('canvasMain');
    // we need to do that! I do not know why at the moment! :-)
    canvas.width = 512;
    canvas.height = 512;


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
    this.editorManager = new EditorManager(this.session,this.editor);
  }

  callback_MouseMoveCanvas(p_MouseEvent) {
    let e = p_MouseEvent;
    this.editor.event_DoMouseMove(e.offsetX, e.offsetY);
  }

  callback_MouseEnterCanvas() {
    this.editor.event_DoMouseEnter();
  }

  callback_MouseLeaveCanvas() {
    this.editor.event_DoMouseLeave();
  }

  callback_MouseClickPickNewImageSize(p_el) {
    //alert(p_el.id);
    let a = p_el.id.match(/\d+$/);
    //alert(a[0]);
    if (a === null) {
      throw new Error('Bad id!');
    }
    // Let's convert string to number! :-)
    this.editorManager.setImageSizeToLoad(+a[0],+a[0]);
  }

  callback_MouseClickCreateNewImage() {
    this.editorManager.LoadNewImage();
  }

  callback_MouseClickChoosePredefinedColor(p_el) {
    let a = p_el.id.match(/[\dA-F]{6}$/i);
    if (a === null)
      throw new Error('Bad id!');

    this.editorManager.setNewColor(a[0]);
  }

  callback_MouseClickChooseColor() {
    this.editorManager.chooseNewColorUsingDialog();
  }

  callback_InputColorChanged(p_InputEvent) {
    this.editorManager.setNewColor(p_InputEvent.target.value.substring(1,7))
  }


}