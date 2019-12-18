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

  transformCanvasPtToOrigImagePt(p_canvasX,p_canvasY) {
    let out_Arr = [];

    let origX = null;

    let tX = this._canvasToImageTransformX;
    for(let i = 0; i < tX.length; ++i)
      if (tX[i].includes(p_canvasX)) {
        origX = i;
        break;
      }

    let origY = null;
    let tY = this._canvasToImageTransformY;
    for(let i = 0; i < tY.length; ++i)
      if (tY[i].includes(p_canvasY)) {
        origY = i;
        break;
      }

    out_Arr = [origX,origY];

    return out_Arr;
  }
}