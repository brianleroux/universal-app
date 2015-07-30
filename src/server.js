import React from 'react'
import App from './components/app'
import About from './components/about'
import Thing from './components/thing'
import server from '../lib/express-config'

server.get('/', (req, res)=> {
  let state = {App:{url:req.url, title:'home title (from server)'}}
  res.html(<App/>, state)
})

server.get('/about', (req, res)=> {
  let state = {App:{url:req.url, title:'about title (from server)'}}
  res.html(<About/>, state)
})

server.get('/things/:id', (req, res)=> {
  res.html(<Thing/>, {})
})

server.start()
