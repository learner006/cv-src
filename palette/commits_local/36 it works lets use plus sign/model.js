class Session {
  constructor() {
    this._selectedTool = "fill-bucket";
    this.setColor("prevColor",16768460); // #FFDDCC
    this.setColor("currColor",16711680); // #FF0000
    this.picName = "4x4";
    this.picURL = ""; // reserved! :-)
    this.imageOrig = null;

    this._imageOrigWidth = 0;
    this._imageOrigHeight = 0;
    this._canvasWidth = 0;
    this._canvasHeight = 0;
    this._canvasToImageTransformX = [];
    this._canvasToImageTransformY = [];

    this.canvasImage = null;
  }

  setSelectedTool(p_toolName) {
    this._selectedTool = p_toolName;
  }

  getSelectedTool() {
    return this._selectedTool;
  }

  setColor(p_colorKind, p_val) {
    this[p_colorKind] = p_val;
  }

  getColor(p_colorKind) {
    return this[p_colorKind];
  }

  saveImageIntoDatastorage() {
  }

  setCanvasAndOrigImageDimensions(p_arr) {
    this._canvasWidth = p_arr[0];
    this._canvasHeight = p_arr[1];
    this._imageOrigWidth = p_arr[2];
    this._imageOrigHeight = p_arr[3];

    this._canvasToImageTransformX = 
      getShrinkedCoords(
        this._canvasWidth,
        this._imageOrigWidth
      );

    this._canvasToImageTransformY = 
      getShrinkedCoords(
        this._canvasHeight,
        this._imageOrigHeight
      );
  }

  notify_OrigImageChanged() {
    this._imageOrigWidth = this.imageOrig.width;
    this._imageOrigHeight = this.imageOrig.height;

    this._canvasToImageTransformX = 
      getShrinkedCoords(
        this._canvasWidth,
        this._imageOrigWidth
      );

    this._canvasToImageTransformY = 
      getShrinkedCoords(
        this._canvasHeight,
        this._imageOrigHeight
      );
  }

  transformCanvasPtToOrigImagePt(p_canvasX,p_canvasY) {
    let out_Arr = [];

    let origX = null;

    let tX = this._canvasToImageTransformX;
    for(let i = 0; i < tX.length; ++i)
    {
      let left = tX[i][0];
      let right = tX[i][1];
      if (p_canvasX >= left && p_canvasX <= right) {
        origX = i;
        break;
      }
    }

    let origY = null;
    let tY = this._canvasToImageTransformY;
    for(let i = 0; i < tY.length; ++i) {
      let left = tY[i][0];
      let right = tY[i][1];
      if (p_canvasY >= left && p_canvasY <= right) {
        origY = i;
        break;
      }
    }

    out_Arr = [origX,origY];

    return out_Arr;
  }
}

class EditorManager {
  constructor(p_Session,p_Editor) {
    this.session = p_Session;
    this.editor = p_Editor;
    this._loadWidth = 0;
    this._loadHeight = 0;
  }

  /////////////////////////////////////////////////////////////////////////
  //
  // 
  //
  setImageSizeToLoad(p_Width, p_Height) {
    this._loadWidth = p_Width;
    this._loadHeight = p_Height;
  }


  /////////////////////////////////////////////////////////////////////////
  //
  // 
  //
  LoadNewImage(p_Color) {
    this.session.imageOrig = null;
    this.session.imageOrig = new Image(this._loadWidth, this._loadHeight, p_Color);
    this.editor.notify_ImageChanged();
    // refactor it! :-)
    this.session.notify_OrigImageChanged();
  }
}

class EditorManagerView {
  constructor() {
  }
}