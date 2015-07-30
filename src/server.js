import React from 'react'
import App from './components/app'
import About from './components/about'
import server from '../lib/express-config'

server.get('/', (req, res)=> {
  res.html(<App/>, {dummy:'data'})
})

server.get('/about', (req, res)=> {
  res.html(<About/>, {title:'about universal apps'})
})

server.start()
