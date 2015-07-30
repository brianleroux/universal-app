import React from 'react'
import Layout from './layout.jsx'

class Thing extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <h1>Hello thing</h1>
        <strong>this.props</strong>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </Layout>
    )
  }
}

export default Thing

