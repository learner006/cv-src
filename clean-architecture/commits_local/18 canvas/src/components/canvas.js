import say from '../utils.js';

const imagePainter = (p_componentInfo) => (
  {
    paintImage: () => {
      const p = p_componentInfo;
      say(canvasEl);
      if(p.customImage)
        p.customImage.saveToCanvas(canvasEl);
    }
  }
)


const canvasWrapper = (p_canvasEl, p_customImage) => {
  const componentInfo = {
    canvasEl: p_canvasEl,
    customImage: p_customImage
  }

  return Object.assign(
    {},
    paintImage(componentInfo)
  )
}

export default canvasWrapper;