import React, { Component } from 'react'
import List from './pages/List'
import Search from './pages/Search'

export default class App extends Component {

  render() {
    return (
      <div>
        <Search />
        <List />
      </div>
    )
  }
}
