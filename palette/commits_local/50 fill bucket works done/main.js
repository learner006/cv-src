let G_CONTROLLER = null;

window.addEventListener("DOMContentLoaded", function () {

  G_CONTROLLER = new Controller();
  c = G_CONTROLLER;


  c.callback_MouseMoveCanvas = c.callback_MouseMoveCanvas.bind(c);
  c.callback_MouseEnterCanvas = c.callback_MouseEnterCanvas.bind(c);
  c.callback_MouseLeaveCanvas = c.callback_MouseLeaveCanvas.bind(c);
  c.callback_MouseDownCanvas = c.callback_MouseDownCanvas.bind(c);
  c.callback_MouseUpCanvas = c.callback_MouseUpCanvas.bind(c);

  let el = document.getElementById("canvasMain");
  if (el !== undefined) {
    el.addEventListener("mousemove",c.callback_MouseMoveCanvas);
    el.addEventListener("mouseenter",c.callback_MouseEnterCanvas);
    el.addEventListener("mouseleave",c.callback_MouseLeaveCanvas);
    el.addEventListener("mousedown",c.callback_MouseDownCanvas);
    el.addEventListener("mouseup",c.callback_MouseUpCanvas);
  }

  c.callback_MouseClickPickNewImageSize = c.callback_MouseClickPickNewImageSize.bind(c);
  c.callback_MouseClickCreateNewImage = c.callback_MouseClickCreateNewImage.bind(c);

  c.callback_MouseClickChooseColor = c.callback_MouseClickChooseColor.bind(c);
  
  el = document.getElementById("choose-color");
  if (el !== undefined)
    el.addEventListener("click",c.callback_MouseClickChooseColor);

  c.callback_InputColorChanged = c.callback_InputColorChanged.bind(c);
  el = document.getElementById("hiddenInputColor");
  if (el !== undefined)
    el.addEventListener("input",c.callback_InputColorChanged);



}
);