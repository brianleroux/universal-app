import React from 'react'
import Header from './header.jsx'
import app from '../../lib/client-router'

let Link = app.Link

class Layout extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <html>
      <body id="main">
        <Header/>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/things/thing-guid">A Thing</Link>

        {this.props.children}
        <script src="/static/x.js"></script>
      </body>
      </html>
    )
  }
///
}

export default Layout
