const pageDOM = [
  {
    tag: 'header',
    children: [
      {
        tag: 'p',
        attrs: {class: 'header__task-title'},
        innerHTML: '<span class="inline-material-icon material-icons material-icons.md-18">menu</span> Codejam - Canvas (Im)'
      }
    ]
  },
  {
    tag: 'div', 
    attrs: {id: 'left-pane'},
    children: [
      {
        tag: 'div',
        attrs: {class: 'tools-list-parent-div'}
      },
      {
        tag: 'div',
        attrs: {class: 'empty-vspace-div'}
      },
      {
        tag: 'div',
        attrs: {class: 'colors-manip-list-parent-div'}
      }
    ]
  },
  {
    tag: 'div', 
    attrs: {id: 'right-pane'},
    children: [
      {
        tag: 'div',
        attrs: {class: 'pic-names-list-parent-div'}
      }
    ]

  },
  {
    tag: 'div', 
    attrs: {
      class: 'user-message notification-popup'
      ,style: 'display:none'
    },
    innerHTML: '<p>Application state loaded from the local storage</p>'
  },
  {
    tag: 'canvas',
    attrs: {
      class: 'canvas-main'
    }
  }
];

const picNamesList = [
  {
    tag: 'ul', 
    attrs: {class: 'pic-names-list default-list-style'},
    children: [
      {
        tag: 'li',
        attrs: {
          id: '4x4'
        },
        innerHTML: '4x4'
      },
      {
        tag: 'li',
        attrs: {
          id: '32x32'
        },
        innerHTML: '32x32'
      },
      {
        tag: 'li',
        attrs: {
          id: 'pngpic'
        },
        innerHTML: 'RSS logo'
      }
    ]
  }
];

const vdomIndex = {
  'pageDOM': pageDOM,
  '.pic-names-list': picNamesList
};

function getVDOM(p_vdomId) {
  return vdomIndex[p_vdomId];
}

export default getVDOM;