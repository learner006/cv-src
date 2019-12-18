function say(p_text) {
	console.log(p_text);
}
//=pod
//const say=require('./backup/util.js');
//=cut

class Image {
  constructor(p_width, p_height, p_ImageView = null)
  {
    this.data=[];
    this.width = p_width;
    this.height = p_height;
    this.imageView = p_ImageView;
    this.initData(p_width,p_height);
  }

  initData() {
  	let fillColor = 0; 
    // to debug
    if (this.width == 200 && this.height == 200)
      fillColor = 16768460; // yellow

    //say(this.getAsString());
    //say('xx');

    for(let y = 0; y < this.height; ++y)
		{
			this.data.push(new Array(this.width).fill(fillColor));
		}

    // to debug
    if (this.width == 3 && this.height == 3) {
      this.data = [[1,2,3],[4,5,6],[7,8,9]];
    }
  }

  resize(p_width,p_height) {
    this.data=[];

    this.width = p_width;
    this.height = p_height;

    this.initData();

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
    let cc = p_Canvas.getContext("2d");

    for(let y = 0; y < this.data.length; ++y) {
    	for(let x = 0; x < this.data[y].length; ++x) {

    		let pixelColor = this.data[y][x];

			  cc.fillStyle = toColor(pixelColor);
        //cc.fillStyle = "rbg(0,0,255)";
			  cc.fillRect(x, y, 1, 1);
    	}
    }
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