import React from 'react'
import iso from 'iso'
import ready from 'domready'
import alt from '../src/alt'
import AppStore from '../src/stores/app'

let routes = {}

function app(path, ctrl) {
  routes[path] = ctrl
}

app.start = function startApp() {
  ready(x=> {
    iso.bootstrap((state, _, container)=> {
      // draw the component for this route
      let draw = x=> React.render(routes[location.pathname], container)
      // listen on the back button
      window.onpopstate = draw
      // listen for any AppStore change to the url
      AppStore.listen(draw)
      // fire up our local client state
      alt.bootstrap(JSON.stringify(state))
      // render
      draw()
    })
  })
}

export default app
