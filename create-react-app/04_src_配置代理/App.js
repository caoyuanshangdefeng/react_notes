import React,{Component} from 'react'
import axios, { Axios } from 'axios'



//创建并暴露App组件
export default class App extends Component {
    // constructor(props) {
    //     super(props);
    // }
    // state = {  }
    getStudentData=() => {
        axios.get("http://127.0.0.1:8000/api/v1/datatest22/").then(
            response=>{console.log("success",response.data);},
            error=>{console.log("fail",error.data)}
        )
    
    }
    render() { 
        return ( 
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
            </div>
            
         );
    }
}



//暴露App组件
// export default App;

