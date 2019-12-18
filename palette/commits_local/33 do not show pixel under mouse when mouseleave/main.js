window.addEventListener("DOMContentLoaded", function () {
var canvas = document.getElementById('canvasMain');

  let c = new Controller();


  c.callback_MouseMoveCanvas = c.callback_MouseMoveCanvas.bind(c);
  c.callback_MouseEnterCanvas = c.callback_MouseEnterCanvas.bind(c);
  c.callback_MouseLeaveCanvas = c.callback_MouseLeaveCanvas.bind(c);

  let el = document.getElementById("canvasMain");
  if (el !== undefined) {
    el.addEventListener("mousemove",c.callback_MouseMoveCanvas);
    el.addEventListener("mouseenter",c.callback_MouseEnterCanvas);
    el.addEventListener("mouseleave",c.callback_MouseLeaveCanvas);
  }
}
);