const pageDOM = [
  {
    tag: 'header',
    children: [
      {
        tag: 'p',
        attrs: {class: 'header__task-title'},
        innerHTML: '<span class="inline-material-icon material-icons material-icons.md-18">menu</span>Codejam - Canvas (Im)'
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
        attrs: {class: 'image-providers-parent-div'}
      }
      ,{
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

const paletteToolsList = [
  {
    tag: 'ul',
    attrs: {class: 'pic-names-list default-list-style'},
    children: [
      {
        tag: 'li',
        attrs: {
          id: 'no-tool'
        },
        innerHTML: '<span class="material-icons material-icons.md-18">mouse</span>Pointer'
      }
      ,{
        tag: 'li',
        attrs: {
          id: 'fill-bucket-tool'
        },
        innerHTML: '<span class="material-icons material-icons.md-18">format_paint</span>Fill bucket'
      }
      ,{
        tag: 'li',
        attrs: {
          id: 'pencil-tool'
        },
        innerHTML: '<span class="material-icons">edit</span>Pencil'
      }
      ,{
        tag: 'li',
        attrs: {
          id: 'transform-tool'
        },
        innerHTML: '<span class="material-icons">compare_arrows</span>Transform'
      }
    ]
  }
];

const colorsManipList = [
  {
    tag: 'ul',
    attrs: {class: 'colors-manip-list default-list-style'},
    children: [
      {
        tag: 'li',
        attrs: {
          id: 'eye-dropper'
        },
        innerHTML: '<span class="material-icons">colorize</span>Choose color'
      }
      ,{
        tag: 'hr'
      }
      ,{
        tag: 'li',
        innerHTML: 
          `<span
            class="editor-color-circle"
            style="background-color:rgb(0,0,0)">
          </span>
            Current color`
      }
      ,{
        tag: 'li',
        innerHTML: 
          `<span
            class="editor-color-circle"
            style="background-color:rgb(255,255,255)">
          </span>
            Previous color`
      }
      ,{
        tag: 'hr'
      }
      ,{
        tag: 'li',
        innerHTML: 
          `<span
            class="editor-color-circle"
            style="background-color:rgb(255,0,0)">
          </span>
            red`
      }
      ,{
        tag: 'li',
        innerHTML: 
          `<span
            class="editor-color-circle"
            style="background-color:rgb(0,255,0)">
          </span>
            green`
      }
      /*
      ,{
        tag: 'li',
        attrs: {
          id: ''
        },
        innerHTML: ''
      }
      ,{
        tag: 'li',
        attrs: {
          id: ''
        },
        innerHTML: ''
      }
      ,{
        tag: 'li',
        attrs: {
          id: ''
        },
        innerHTML: ''
      }
      */


    ]
  }
];

const vdomIndex = {
  'pageDOM': pageDOM,
  '.pic-names-list': picNamesList,
  '.palette-tools-list': paletteToolsList,
  '.colors-manip-list' : colorsManipList
};

function getVDOM(p_vdomId) {
  return vdomIndex[p_vdomId];
}

export default getVDOM;