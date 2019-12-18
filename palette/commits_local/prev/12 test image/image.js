//=pod
const say=require('./backup/util.js');
//=cut

class Image {
  constructor(p_width, p_height, p_ImageView)
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

  saveToImage(p_Image) {
  }
}

//=pod
let image = new Image(3,3);
say(image.getAsString());
//=cut