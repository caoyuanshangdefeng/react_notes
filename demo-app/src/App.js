import React ,{ Suspense }from 'react'
// import { useRoutes } from 'react-router-dom';
import { useSelector} from 'react-redux'
// import { commonRoutes } from 'routes';
import Main from 'pages/Main';

import Demo from 'pages/Demo';
import './App.css';
// import Login from './pages/Login';


function App() {
  // const routes = useSelector((state) => state.routeLink.routing)
  // console.log('change Routes',routes);



  // const element = useRoutes(commonRoutes);





  return (
    <div>
      <Main/>
    </div>
  );
}

export default App;
