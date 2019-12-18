const fullRenderer = (p_componentInfo) => (
  {
    fullRender: () => {
      const p = p_componentInfo;
      const p_links = p.links || [];
      if (p.parent) {
        p.parent.innerHTML = `<a href="#" ${p.anchorAttr}>Test</a>`;
      }
    }
  }
)


const linksListFactory = (p_parentEl, p_anchorAttr) => {
  const componentInfo = {
    parent: p_parentEl,
    anchorAttr: p_anchorAttr
  };

  return Object.assign({},fullRenderer(componentInfo));
}

export default linksListFactory;