function createDOMTree(p_vdomArray) {

  let out_el;

  if (p_vdomArray)
    p_vdomArray.forEach((vdomEl)=> {

      const tag = vdomEl['tag'];
      const attrs = vdomEl['attrs'];
    
      out_el = document.createElement(tag);

      const childNodes = createDOMTree(vdomEl['children']);
      if (childNodes)
        out_el.appendChild(childNode);
    });

  return out_el;
}

export {createDOMTree};