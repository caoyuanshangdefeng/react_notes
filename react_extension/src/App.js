import React, { Component } from 'react'
import Demo from './components/1_setState'
import DemoLazyload from './components/2_lazyload'

export default class App extends Component {
  render() {
    return (
      <div>
          <Demo/>
          <DemoLazyload/>
      </div>
    )
  }
}
