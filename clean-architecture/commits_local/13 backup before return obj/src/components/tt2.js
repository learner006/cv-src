import say from '../utils.js';

const barker = (state) => ({
  bark: () => console.log('Woof, I am ' + state.name)
})

say(typeof barker);

const driver = (state) => ({
  drive: () => state.position = state.position + state.speed
})

const murderRobotDog = (name)  => {
  let state = {
    name,
    speed: 100,
    position: 0
  }
  return Object.assign(
        {},
        barker(state),
        driver(state)
    )
}
const bruno =  murderRobotDog('bruno')
bruno.bark() // "Woof, I am Bruno"

export default bruno;