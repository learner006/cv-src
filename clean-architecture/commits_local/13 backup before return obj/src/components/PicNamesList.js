const barker = (state) => ({
  bark: () => console.log('Woof, I am ' + state.name)
})

const fullRenderer = (p_componentInfo) => (
  const i = 1;
  {
    fullRender: () => {
      const p = p_componentInfo;
      if (p.parent)
        p.parent.innerHTML = '<p>Hello! :-)))';
    }
  }
)



export default fullRenderer;