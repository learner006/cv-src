function createDOMTree(p_vdom) {
  const tag = p_vdom['tag'];
  const attrs = p_vdom['attrs'];

  const out_el = document.createElement(tag);
  const children = p_vdom['children'];

  if (children)
    children.forEach((item)=>{createDOMTree(item)});

  return out_el
}

export {createDOMTree};