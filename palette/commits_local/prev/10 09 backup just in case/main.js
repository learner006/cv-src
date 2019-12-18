window.addEventListener("DOMContentLoaded", function () {
  let editor = new Editor();

  let imageView = new ImageView('canvasMain');
  let imageScaled = new Image(200,200,imageView);

  imageView.update(imageScaled);
}
);