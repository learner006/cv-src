function createDOMTree(p_rootNode, p_vdomArray) {

  if (p_vdomArray)
    p_vdomArray.forEach((vdomEl)=> {

      const tag = vdomEl['tag'];
      const attrs = vdomEl['attrs'];
      const innerHTML = vdomEl['innerHTML'];
    
      const el = document.createElement(tag);
      if (innerHTML)
        el.innerHTML = innerHTML;

      if (attrs)
        Object.keys(attrs).forEach(
          (k)=>{
            el.setAttribute(k,attrs[k])
          }
        );

      createDOMTree(el, vdomEl['children']);

      p_rootNode.appendChild(el);
    });
}

export {createDOMTree};