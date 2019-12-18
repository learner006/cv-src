//=pod
//const say=require('./backup/util.js');
//=cut

class Image {
  constructor(p_width, p_height, p_ImageView)
  {
    this.data=[];
    this.imageView = p_ImageView;
		for(let y = 0; y < p_height; ++y)
		{
			//this.data.push(new Array(p_width).fill(0));
      this.data.push(new Array(p_width).fill(16768460));
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
}

//=pod
//let image = new Image(10,10);
//say(image.getAsString());
//=cut