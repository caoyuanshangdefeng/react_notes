import React,{Component} from 'react'
import {Link,Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';






  
//创建并暴露App组件
export default class App extends Component {
    // constructor(props) {
    //     super(props);
    // }
    // state = {  }
    
    
    render() { 
        return ( 
            <div >
                <div>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-8">
                            <div className="page-header"><h2>React Router Demo</h2></div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                                {/* 原生html中,靠<a>跳转不同的页面 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a> */}
                            {/* 在react中靠路由链接实现切换组件 
                            to='/about';to尽量写小写,不写点(./about)
                            
                            
                            */}
                                
                            <Link className="list-group-item" to='/about'>About</Link>
                            <Link className="list-group-item" to='/home'>Home</Link>
                                
                                
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 
                                exact={true}精准匹配
                                */}
                                <Routes>
                                    {/* <Route exact={true} path="/about" element={<About/>}/>
                                    <Route exact={true} path="/home" element={<Home/>}/> */}
                                    <Route path="/about" element={<About/>}/>
                                    
                                    <Route path="/home" element={<Home/>}/>

                                   
                                    
                                </Routes>
                                
                            
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        );
    }
}



//暴露App组件
// export default App;
//Q:A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.
// http://www.manongjc.com/detail/26-nlcmvjnsbkcujsx.html

