import React from 'react'
import App from './components/app.jsx'
import About from './components/about.jsx'
import Thing from './components/thing.jsx'
import app from '../lib/client-router'

app('/', <App/>)
app('/about', <About/>)
app('/things/:id', <Thing/>)

app.start()
