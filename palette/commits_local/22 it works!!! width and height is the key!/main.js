window.addEventListener("DOMContentLoaded", function () {
var canvas = document.getElementById('canvasMain');

// This will stretch correctly
//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;
canvas.width = 512;
canvas.height = 512;


  let c = new Controller();


  c.callback_MouseMoveCanvas = c.callback_MouseMoveCanvas.bind(c);

  let el = document.getElementById("canvasMain");
  if (el !== undefined) {
    el.addEventListener("mousemove",c.callback_MouseMoveCanvas);
  }
}
);