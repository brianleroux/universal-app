import express from 'express'
import sessions from 'client-sessions'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import logger from 'morgan'
import cors from 'cors'

import React from 'react'
import iso from 'iso'
import alt from '../src/alt'

let app = express()

app.use(cors())
app.use(logger('dev'))
app.use('/static', express.static('./src/static'))

app.use(function (req, res, next) {
  // add our helper fn
  res.html = function html(El, stores) {
    // load up the state
    alt.bootstrap(JSON.stringify(stores))
    // take a snapshot
    let markup = React.renderToStaticMarkup(El)
    // render out the client with embedded data
    let str = iso.render(markup, stores)
    res.send(str)
  }
  next()
})

app.start = (port=3000)=> {
  app.listen(port, x=> console.log(`started on http://localhost:${port}`))
}

export default app
