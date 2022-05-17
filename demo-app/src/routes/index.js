import Login from "pages/Login";
import PageNotFound from 'pages/PageNotFound'
import React,{ lazy } from "react"
import { Navigate } from "react-router-dom"
import Demo from "pages/Demo";
export const commonRoutes = [

  {
    path: '/login',

    // element: lazy(() => import('pages/Login'))
    element: <Login/>
  },
  {
    path: '/404',

    // element: lazy(() => import('pages/Login'))
    element: <PageNotFound/>
  },
  // {
  //   path: '*',

  //   // element: lazy(() => import('pages/Login'))
  //   element: <Navigate to="/404"/>
  // }
]


export const userRoutes = [
  {
    path: '/',

    // element: lazy(() => import('pages/Login'))
    element: <Navigate to="/demo"/>
  },

  {
    path: '/demo',

    // element: lazy(() => import('pages/Login'))
    element: <Demo/>
  }

]

