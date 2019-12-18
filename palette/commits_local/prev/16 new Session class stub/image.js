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

		for(let y = 0; y < this.height; ++y)
		{
			this.data.push(new Array(this.width).fill(0));
      //this.data.push(new Array(p_width).fill(16768460));
		}

    // to debug
    if (this.width == 3 && this.height == 3) {
      this.data = [[1,2,3],[4,5,6],[7,8,9]];
    }
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
			  cc.fillRect(x, y, 1, 1);
    	}
    }
  }

  ///////////////////////////////////////////////////////////////////////
  // 
	// getShrinkedCoords(5,3) => [[0],[1,2],[3,4]]
  // getShrinkedCoords(7,3) => [[0,1],[2,3],[4,5,6]]
	//
  getShrinkedCoords(p_dimHigher, p_dimLower) {
    let out_Arr = new Array(p_dimLower);

    let scale = p_dimHigher / p_dimLower;

    // It is a point on the number line! :-)
    let ptPrev = 0;
    for(let n = 1; n <= p_dimLower; ++n) {
      let pt = ptPrev + scale;
      let boundLeft = Math.floor(ptPrev) + 1;

      // A gap. To detect cases like pt == 4.999998
      const epsilon = 0.0001;
      let boundRight = Math.floor(pt + epsilon);
      ptPrev = pt;

      out_Arr[n-1] = [];

      for(let i = boundLeft; i <= boundRight; ++i)
        out_Arr[n-1].push(i - 1); // as we need indexes, not numbers! :-)
    }

    return out_Arr;
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

    let transformX = this.getShrinkedCoords(p_imageDest.width,imageSrc.width);
    let transformY = this.getShrinkedCoords(p_imageDest.height,imageSrc.height);

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