import React,{Component} from 'react'
import Hello from './components/Hello' 
import Welcome from './components/Welcome' 
//创建并暴露App组件
export default class App extends Component {
    // constructor(props) {
    //     super(props);
    // }
    // state = {  }
    render() { 
        return ( 
            <div>
                <Hello/>
                <Welcome/>
            </div>
            
         );
    }
}



//暴露App组件
// export default App;

