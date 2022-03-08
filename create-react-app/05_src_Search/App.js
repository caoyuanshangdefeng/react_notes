import React,{Component} from 'react'
// import './App.css'
import List from './components/List';
import Search from './components/Search';



//创建并暴露App组件
export default class App extends Component {
    // constructor(props) {
    //     super(props);
    // }
    // state = {  }
    
    render() { 
        return ( 
            <div className="container">
                <Search/>
                <List/>
            </div>
            
        );
    }
}



//暴露App组件
// export default App;

