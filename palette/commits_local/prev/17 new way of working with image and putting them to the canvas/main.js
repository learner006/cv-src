window.addEventListener("DOMContentLoaded", function () {
  let session = new Session();
  session.imageOrig = new Image(200,200);

  let imageView = new ImageView('canvasMain');
  session.canvasImage = new Image(512,512,imageView);

  let editor = new Editor(session);
}
);