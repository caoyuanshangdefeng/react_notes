import React ,{ Suspense }from 'react'
import { useRoutes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { changeRoute } from 'store/reducers/routeSlice';


import Demo from 'pages/Demo';
import './App.css';
// import Login from './pages/Login';

import {BrowserRouter} from 'react-router-dom'
function App() {
  const routes = useSelector((state) => state.routeLink.routing)


  const element = useRoutes(routes);



  const dispatch = useDispatch()

  return (
    <div className="App">
      {/* <Login/> */}
      <div>
      <Demo/>
      </div>
      {/* <Demo/> */}
      <Suspense fallback={<div>loading</div>}>

      {element}


      </Suspense>
    </div>
  );
}

export default App;
