import React, { Component } from 'react'
// import Demo from './components/1_setState'
// import DemoLazyload from './components/2_lazyload'
// import DemoClass from './components/3_hooks'
// import DemoFragment from './components/4_Fragment'
// import DemoContext from './components/5_Context'
import Parent from './components/6_optimize'
import RenderProps from './components/7_renderProps'
import ErrorBoundary from './components/8_ErrorBoundary/Parent'
class App extends Component {
  render() {
    return (
      <div>
          {/* <Demo/> */}
          {/* <DemoLazyload/> */}
          {/* <DemoClass/> */}
          {/* <DemoFragment/> */}
          {/* <DemoContext/> */}
          {/* <Parent/> */}
          {/* <RenderProps/> */}
          <ErrorBoundary/>
      </div>
    )
  }
}

export default App
