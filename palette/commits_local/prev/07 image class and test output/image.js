//=pod
const say=require('./backup/util.js');
//=cut

class Image {
  constructor(p_width, p_height)
  {
    this.data=[];
		for(let y = 0; y < p_height; ++y)
		{
			this.data.push(new Array(p_width).fill(0));
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
}

//=pod
let image = new Image(10,10);
say(image.getAsString());
//=cut