let G_CONTROLLER = null;

window.addEventListener("DOMContentLoaded", function () {
var canvas = document.getElementById('canvasMain');

  G_CONTROLLER = new Controller();
  c = G_CONTROLLER;


  c.callback_MouseMoveCanvas = c.callback_MouseMoveCanvas.bind(c);
  c.callback_MouseEnterCanvas = c.callback_MouseEnterCanvas.bind(c);
  c.callback_MouseLeaveCanvas = c.callback_MouseLeaveCanvas.bind(c);
  c.callback_MouseClickCreateNewImage = c.callback_MouseClickCreateNewImage.bind(c);

  let el = document.getElementById("canvasMain");
  if (el !== undefined) {
    el.addEventListener("mousemove",c.callback_MouseMoveCanvas);
    el.addEventListener("mouseenter",c.callback_MouseEnterCanvas);
    el.addEventListener("mouseleave",c.callback_MouseLeaveCanvas);
  }
}
);