import Login from "pages/Login";
import PageNotFound from 'pages/PageNotFound'
import React,{ lazy } from "react"
import { Navigate } from "react-router-dom"
import Demo from "pages/Demo";
import Logout from "pages/Logout";
export const commonRoutes = [
  {
    path: '/',
    element: <Navigate to="/login"/>
  },

  {
    path: '/login',

    // element: lazy(() => import('pages/Login'))
    element: <Login/>
  },
  {
    path: '/404',
    element: <PageNotFound/>
  },
  {
    path: '/*',
    element: <Navigate to="/404"/>
  }
]


export const userRoutes = [
  {
    path: '/404',
    element: <PageNotFound/>
  },
  {
    path: '/*',
    element: <Navigate to="/404"/>
  }

]



export const demoRoutes=[
  {
    path: '/',
    element: <Navigate to="/demo"/>
  },
  {
    path: '/demo',
    element: <Logout/>
  }
]

