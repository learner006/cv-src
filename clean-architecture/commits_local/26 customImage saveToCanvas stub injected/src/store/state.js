import customImageFactory from '../model/customImage.js';

const editorManager = {
}

const imageProvider = {
}

const stateFactory = () => {
  const customImage = customImageFactory();
  return {
    customImage,
    editorManager: editorManager,
    imageProvider: imageProvider
  }
}

export default stateFactory;