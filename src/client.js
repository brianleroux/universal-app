import React from 'react'
import alt from './alt'
import App from './components/app.jsx'
import About from './components/about.jsx'
import app from '../lib/client-router'

app('/', <App/>)
app('/about', <About/>)

app.start()
