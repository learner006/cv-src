  window.addEventListener("DOMContentLoaded", function () {
  let session = new Session();
  session.imageOrig = new Image(4,4);

  let dataStorage = new DataStorage();
  let arr = dataStorage.get('4x4');

  session.imageOrig.data = [];

  arr.forEach(
    (arr_line) => {
      let IntColorsLine = arr_line.map((p_colorStr) => {return HEXToIntColor(p_colorStr)});
      session.imageOrig.data.push(IntColorsLine);
    }
  );

  //session.imageOrig.data = 
    


  let imageView = new ImageView('canvasMain');
  session.canvasImage = new Image(512,512,imageView);

  let editor = new Editor(session);
}
);