import React ,{ Suspense }from 'react'
import { useRoutes } from 'react-router-dom';
import { useSelector} from 'react-redux'
import { commonRoutes,userRoutes } from 'routes';

import { isLogined } from 'utils/auth'
import Demo from 'pages/Demo';
import './App.css';



function App() {
  const routing = useSelector((state) => state.routeLink.routing)
  console.log('isLogined',isLogined());
  const routes = isLogined() ? routing :commonRoutes
  const element=useRoutes(routes)
  return (
    <div>
      {element}
    </div>
  )
}

export default App;
