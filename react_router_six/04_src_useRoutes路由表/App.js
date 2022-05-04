import React from "react";
import {NavLink,useRoutes} from 'react-router-dom'
import routes from "./routes";
function App() {
  function computedClassName({isActive}){
    return isActive ? 'list-group-item gaoliang' :'list-group-item'
  }
  // 根据路由表生成对应的路由规则
  const element=useRoutes(routes)
  return (
    <div >
      <h3>我是APP...</h3>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}

            <NavLink className="list-group-item " to="/home">Home</NavLink>
            <NavLink className={computedClassName} to="/about">About</NavLink>

          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {/* <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/" element={<Navigate to="/about"/>}/>


              </Routes> */}
              {element}

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
