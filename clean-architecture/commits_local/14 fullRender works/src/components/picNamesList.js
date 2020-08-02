const fullRenderer = (p_componentInfo) => (
  {
    fullRender: () => {
      const p = p_componentInfo;
      if (p.parent)
        p.parent.innerHTML = '<p>Hello! :-)))</p>';
    }
  }
)

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
//export default fullRenderer;