import express from 'express'
import sessions from 'client-sessions'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import logger from 'morgan'
import cors from 'cors'
import React from 'react'
import iso from 'iso'
import browserify from 'browserify'
import babelify from 'babelify'
import alt from './alt'
import App from './components/app'

let app = express()
app.use(cors())
app.use(logger('dev'))
app.use('/static', express.static('./src/static'))

app.get('/', function renderReact(req, res) {
  let d = {dummy:'data'}
  alt.bootstrap(JSON.stringify(d))
  let markup = React.renderToStaticMarkup(React.createElement(App))
  let html = iso.render(markup, d)
  res.send(html)
})

if (require.main === module) {
  app.listen(3000, x=> console.log('started on http://localhost:3000'))
}
