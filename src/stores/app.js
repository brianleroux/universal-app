import actions from '../actions/app'
import alt from '../alt'

let push = (path, title='', state={})=>history.pushState(state, title, path)

class App {

  constructor() {
    this.bindActions(actions)
  }

  home() {
    push('/')  
  }

  about() {
    push('/about')
  }
///
}

export default alt.createStore(App, 'App')
