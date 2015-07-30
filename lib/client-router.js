import React from 'react'
import iso from 'iso'
import qs from 'query-string'
import Pattern from 'url-pattern'
import alt from '../src/alt'

// usage <Link to="/">Text Here</Link>
class Link extends React.Component {
  constructor(props) {
    super(props)
    this.navigate = this.navigate.bind(this)
  }
  navigate(e) {
    e.preventDefault()
    app.navigate(this.props.to)
  }
  render() {
    return (<a href={this.props.to} onClick={this.navigate}>{this.props.children}</a>)
  }
}

class NotFound extends React.Component {
  render() {
    return (<div>Not found!</div>)
  }
}

// HACK to run this serverside we need to fake out domready
let ready = process.browser? require('domready') : function(){}

// private maps
let routes = {}
let listeners = []

// adds a route
function app(path, ctrl) {
  routes[path] = ctrl
}

// adds a listener for route changes
app.listen = listener=>listeners.push(listener)

// navigates to a route
app.navigate = (path, title='', state={})=> {
  // first change the url
  history.pushState(state, title, path)
  // then we can notify listeners to do their thing
  listeners.forEach(l=>l(path, title, state))
}

app.Link = Link

function getComponent() {
  // turn ?foo=bar into {foo:'bar'}
  let query = qs.parse(location.search)
  let key = location.pathname
  let fast = routes[key]
  if (fast) return React.cloneElement(fast, {query})
  // shit, we now have to search each route
  let found = false
  let keys = Object.keys(routes)
  keys.forEach(k=> {
    let possible = new Pattern(k)
    let params = possible.match(key)
    if (params) {
      found = React.cloneElement(routes[k], {query, params})
    }
  })
  return (found? found : <NotFound/>)
}

// listens for route changes and renders
app.start = function startApp() {
  ready(x=> {
    iso.bootstrap((state, _, container)=> {

      // draw the component for this route
      let draw = x=>React.render(getComponent(), container)

      // listen on the back button
      window.onpopstate = draw

      // listen for any AppStore change to the url
      app.listen(draw)

      // fire up our local client state
      alt.bootstrap(JSON.stringify(state))

      // first run render
      draw()
    })
  })
}

export default app
