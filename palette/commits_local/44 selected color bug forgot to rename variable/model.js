class Session {
  constructor() {
    this._selectedTool = "fill-bucket";
    this.color = 16768460; // #FFDDCC
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
    this.colorsHistory = ['',''];

    this.editorManagerView = new EditorManagerView();
    this.setNewColor('000000');
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
  LoadNewImage() {
    this.session.imageOrig = null;
    this.session.imageOrig = new Image(this._loadWidth, this._loadHeight, this.session.color);
    this.editor.notify_ImageChanged();
    // refactor it! :-)
    this.session.notify_OrigImageChanged();

    this.editorManagerView.update(this);
  }
  /////////////////////////////////////////////////////////////////////////
  //
  // 
  //
  event_ColorChanged(p_InputEvent) {
    this.session.color = HEXToIntColor(p_InputEvent.target.value);
    this.editorManagerView.update(this);
  }
  /////////////////////////////////////////////////////////////////////////
  //
  // 
  //
  chooseNewColorUsingDialog() {
    let c = document.getElementById("hiddenInputColor");
    c.focus();
    let arr = toColorAsArrayA(this.session.color);

    c.value = rgbToHex(arr[0],arr[1],arr[2]);

    c.click();

  }
  /////////////////////////////////////////////////////////////////////////
  //
  // 
  //
  setNewColor(p_HEXColor) {
    this.colorsHistory.shift();
    this.colorsHistory.push(p_HEXColor);

    this.session.color = HEXToIntColor(p_HEXColor);
    this.editorManagerView.update(this);

  }
  /////////////////////////////////////////////////////////////////////////
  //
  // 
  //
  event_DoChooseTool(p_selectedToolName) {
    this.session.setSelectedTool(p_selectedToolName);
    this.editor.notify_NewToolSelected();
    this.editorManagerView.updateToolbox(p_selectedToolName);
  }



}

class EditorManagerView {
  updateUnorderedList(p_ListId,p_SelectedListItemId) {
    let L = document.getElementById(p_ListId);
  	let items = L.getElementsByTagName("li");
  
  	for(let i = 0; i < items.length; ++i) {
  		items[i].classList.remove('selected');
  
  		if (items[i].id == p_SelectedListItemId)
  			items[i].classList.add('selected');
  	}
  }
  updateToolbox(p_selectedToolName) {
    this.updateUnorderedList("toolboxList",p_selectedToolName);
  }

  updateNewImageList(p_selectedImageName) {
    this.updateUnorderedList("pick-new-image-list",p_selectedToolName);
  }

  update(p_EditorManager) {
    let currColor = document.getElementById("currentColor-color");
    let prevColor = document.getElementById("prevColor-color");

    let a = p_EditorManager.colorsHistory;
    if (a[1] != '') {
      currColor.setAttribute("style",`background-color:\#${a[1]}`);

      if (a[0] != '')
        prevColor.setAttribute("style",`background-color:\#${a[0]}`);
    }


    
  }

}