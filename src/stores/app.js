import actions from '../actions/app'
import alt from '../alt'

let push = (path, title='', state={})=>history.pushState(state, title, path)

class App {

  constructor() {
    this.title = 'default title'
    this.url = '/'
    this.bindActions(actions)
  }

  home() {
    this.url = '/'
    push(this.url)  
  }

  about() {
    this.url = '/about'
    push(this.url)
  }
///
}

export default alt.createStore(App, 'App')
