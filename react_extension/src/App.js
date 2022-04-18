import React, { Component } from 'react'
// import Demo from './components/1_setState'
// import DemoLazyload from './components/2_lazyload'
// import DemoClass from './components/3_hooks'
// import DemoFragment from './components/4_Fragment'
// import DemoContext from './components/5_Context'
import Parent from './components/6_optimize'

class App extends Component {
  render() {
    return (
      <div>
          {/* <Demo/> */}
          {/* <DemoLazyload/> */}
          {/* <DemoClass/> */}
          {/* <DemoFragment/> */}
          {/* <DemoContext/> */}
          <Parent/>
      </div>
    )
  }
}

export default App
