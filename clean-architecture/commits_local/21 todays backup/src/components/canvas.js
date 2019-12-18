import say from '../utils.js';

const imagePainter = (p_componentInfo) => (
  {
    paintImage: () => {
      const p = p_componentInfo;
      say(p.canvasEl);
      if(p.customImage)
        p.customImage.saveToCanvas(p.canvasEl);
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
    imagePainter(componentInfo)
  )
}

export default canvasWrapper;