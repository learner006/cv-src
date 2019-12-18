function say(p_text) {
	console.log(p_text);
}

function HEXToIntColor(rrggbb) {
  return parseInt(rrggbb, 16);
}


function toColor(num) {
    num >>>= 0;
    var b = num & 0xFF,
        g = (num & 0xFF00) >>> 8,
        r = (num & 0xFF0000) >>> 16;
    return "rgb(" + [r, g, b].join(",") + ")";
}

function toColorAsArrayA(num) {
    num >>>= 0;
    var b = num & 0xFF,
        g = (num & 0xFF00) >>> 8,
        r = (num & 0xFF0000) >>> 16;
    // 1 is an alpha chanel's value. It is predefined! ;-)
    return [r, g, b, 1];
}


toColorARGB =  new function(num) {
    num >>>= 0;
    var b = num & 0xFF,
        g = (num & 0xFF00) >>> 8,
        r = (num & 0xFF0000) >>> 16,
        a = ( (num & 0xFF000000) >>> 24 ) / 255 ;
    return "rgba(" + [r, g, b, a].join(",") + ")";
}

///////////////////////////////////////////////////////////////////////
// 
// getShrinkedCoords(5,3) => [[0],[1,2],[3,4]]
// getShrinkedCoords(7,3) => [[0,1],[2,3],[4,5,6]]
//
function getShrinkedCoords(p_dimHigher, p_dimLower) {
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

//say(getShrinkedCoords(512,4));
//say(toColorAsArray(255));