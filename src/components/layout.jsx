import React from 'react'
import Header from './header.jsx'

class Layout extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <html>
      <body id="main">
        <Header/>

        {this.props.children}
        <script src="/static/x.js"></script>
      </body>
      </html>
    )
  }
///
}

export default Layout
