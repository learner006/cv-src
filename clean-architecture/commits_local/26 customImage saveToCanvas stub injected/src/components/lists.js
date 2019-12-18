import {createDOMTree} from '../vdom/index.js';

const fullRenderer = (p_componentInfo) => (
  {
    fullRender: () => {
      const p = p_componentInfo;
      if (p.parent)
        createDOMTree(p.parent,p.vdom);
    }
  }
)

const defaultList = (p_parentEl, p_vdomDesc) => {
  const componentInfo = {
    parent: p_parentEl,
    vdom: p_vdomDesc
  }

  return Object.assign(
    {},
    fullRenderer(componentInfo)
  )
}


export default defaultList;