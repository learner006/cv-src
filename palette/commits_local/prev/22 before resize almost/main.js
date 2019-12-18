window.addEventListener("DOMContentLoaded", function () {
  let c = new Controller();


  c.callback_MouseMoveCanvas = c.callback_MouseMoveCanvas.bind(c);

  let el = document.getElementById("canvasMain");
  if (el !== undefined) {
    el.addEventListener("mousemove",c.callback_MouseMoveCanvas);
  }
}
);