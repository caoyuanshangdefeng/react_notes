import React, { Component } from 'react'
import List from './pages/List'
import Search from './pages/Search'

export default class App extends Component {

  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: '',
  }

  updateAppState=(stateObj) => {
    this.setState(stateObj)
    console.log("####",stateObj);
    console.log("@@@@@",this.state);
    

  }

  render() {
    return (
      <div>
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    )
  }
}
