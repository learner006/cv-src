function say(p_text) {
	console.log(p_text);
}
//=pod
//const say=require('./backup/util.js');
//=cut

class Image {
  constructor(p_width, p_height, p_fillColor = 0, p_ImageView = null)
  {
    this.data=[];
    this.pixelDataForCanvas = [];
    //todo: refactor it! :-)
    this.fillColorOrig = p_fillColor;

    this.width = p_width;
    this.height = p_height;
    this.imageView = p_ImageView;

    this.resize(p_width,p_height);
  }

  initData() {
    for(let y = 0; y < this.height; ++y)
		{
			this.data.push(new Array(this.width).fill(this.fillColorOrig));
		}

  }

  resize(p_width,p_height) {
    this.data=[];

    this.width = p_width;
    this.height = p_height;

    this.initData();
    this.pixelDataForCanvas = [];
    this.pixelDataForCanvas = new Array(this.width * this.height * 4);

    this.safeUpdateImageView();
  }

  safeUpdateImageView() {
    if (this.imageView !== null)
      this.imageView.update(this);
  
  }

  ///////////////////////////////////////////////////////////////////////
	//
	//
	//
	getAsString() {
		let out_S = '';
		this.data.forEach(
			(item) => {
				out_S += item.join(' ') + '\n';

			}
		);

		return out_S;
	}

  ///////////////////////////////////////////////////////////////////////
	//
	//
	//
  saveToCanvas(p_Canvas)
  {
    if (this.data.length == 0)
      return;

    let imageHeight = this.data.length; 
    let imageWidth = this.data[0].length;

    this.pixelDataForCanvas;

    for(let y = 0; y < imageHeight; ++y) {
    	for(let x = 0; x < imageWidth; ++x) {
        let a = toColorAsArrayA(this.data[y][x]);

        let data = this.pixelDataForCanvas;

        data[((imageWidth * y) + x) * 4] = a[0];
        data[((imageWidth * y) + x) * 4 + 1] = a[1];
        data[((imageWidth * y) + x) * 4 + 2] = a[2];
        data[((imageWidth * y) + x) * 4 + 3] = a[3];
    	}
    }
    // google: canvas put image data example
    // url: https://stackoverflow.com/questions/15908179/draw-image-from-pixel-array-on-canvas-with-putimagedata
    let cc = p_Canvas.getContext("2d");
    cc.imageSmoothingEnabled = false;
    cc.mozImageSmoothingEnabled = false;
    cc.webkitImageSmoothingEnabled = false;
    cc.msImageSmoothingEnabled = false;
    
    // google: canvas put image data example
    // url: https://stackoverflow.com/questions/15908179/draw-image-from-pixel-array-on-canvas-with-putimagedata
    // Get a pointer to the current location in the image.
    var palette = cc.getImageData(0,0,imageWidth,imageHeight); //x,y,w,h

    // Wrap your array as a Uint8ClampedArray
    palette.data.set(new Uint8ClampedArray(this.pixelDataForCanvas)); // assuming values 0..255, RGBA, pre-mult.

    // Repost the data.
    cc.putImageData(palette,0,0);

  }


  ///////////////////////////////////////////////////////////////////////
	//
	//
	//
  saveToImage(p_imageDest) {
    let imageSrc = this;

    // Assume p_imageDest.width and p_imageDest.height greater than
    // this.width and this.height for now

    // But the concept of this algorithm will work for three cases:
    // shrinking, strecthing and shrinking and strecthing simultaneously
    // z.B.: (5,10) -> (100,2) // last case

    // There is no need to implement all ones! ;-)

    let transformX = getShrinkedCoords(p_imageDest.width,imageSrc.width);
    let transformY = getShrinkedCoords(p_imageDest.height,imageSrc.height);

    let srcArr = imageSrc.data;
    for(let ys = 0; ys < srcArr.length; ++ys)
      for(let xs = 0; xs < srcArr[ys].length; ++xs)
      {
        let destArr = p_imageDest.data;

        let pixelCoordsOrigX = transformX[xs];
        let pixelCoordsOrigY = transformY[ys];

        let startX = pixelCoordsOrigX[0];
        let endX = pixelCoordsOrigX[pixelCoordsOrigX.length-1];

        let startY = pixelCoordsOrigY[0];
        let endY = pixelCoordsOrigY[pixelCoordsOrigY.length-1];


        for(let destIdxY = startY; destIdxY <= endY; ++destIdxY)
          for(let destIdxX = startX; destIdxX <= endX; ++destIdxX) {
            destArr[destIdxY][destIdxX] = srcArr[ys][xs];
          }
      }
    p_imageDest.safeUpdateImageView();
  }

  putPixel(p_x, p_y, p_Color) {
    if (p_x >= 0 && p_x < this.width && p_y >= 0 && p_y < this.height)
      this.data[p_y][p_x] = p_Color;
  }
}


//=pod
/*
let image3x3 = new Image(3,3);
say(image3x3.getAsString());

let image5x7 = new Image(5,7);
say(image5x7.getAsString());

//getShrinkedCoords(5,3) => [[0],[1,2],[3,4]]
say(image3x3.getShrinkedCoords(5,3));

// getShrinkedCoords(7,3) => [[0,1],[2,3],[4,5,6]]
say(image3x3.getShrinkedCoords(7,3));

image3x3.saveToImage(image5x7);
say(image5x7.getAsString());
*/
//=cut