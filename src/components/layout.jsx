import React from 'react'
import AppActions from '../actions/app'
import Header from './header.jsx'

class Layout extends React.Component {

  constructor(props) {
    super(props)
  }

  home(e) {
    e.preventDefault()
    AppActions.home()
  }

  about(e) {
    e.preventDefault()
    AppActions.about()
  }

  render() {
    return (
      <html>
      <body id="main">
        <Header/>

        <a href="/" onClick={this.home}>Home</a>
        <a href="/about" onClick={this.about}>About</a>

        {this.props.children}
        <script src="/static/x.js"></script>
      </body>
      </html>
    )
  }
///
}

export default Layout
