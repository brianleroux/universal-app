import React from 'react'
import iso from 'iso'
import ready from 'domready'
import alt from './alt'
import App from './components/app.jsx'

ready(x=> {
  iso.bootstrap((state, _, container)=> {
    alt.bootstrap(JSON.stringify(state))
    React.render(<App/>, container) 
  })
})
