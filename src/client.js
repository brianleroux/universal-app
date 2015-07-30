import React from 'react'
import App from './components/app.jsx'
import About from './components/about.jsx'
import app from '../lib/client-router'

app('/', <App/>)
app('/about', <About/>)

app.start()
