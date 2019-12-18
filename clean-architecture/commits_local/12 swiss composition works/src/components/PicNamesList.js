const fullRenderer = (p_componentInfo) => {
  return
  {
    fullRender: () => {
      const p = p_componentInfo;
      if (p.parent)
        p.parent.innerHTML = '<p>Hello! :-)))';
    }
  }
}

const picNamesList = (p_parentEl) => {
  const componentInfo = {
    parent: p_parentEl
  }

  return Object.assign(
    {},
    fullRenderer(componentInfo)
  )
}


export default picNamesList;