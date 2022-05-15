import Login from "pages/Login";
import { lazy } from "react"
import { Navigate } from "react-router-dom"
const loginRouter = [
  {
    path:'/',
    element:<Navigate to="/login"/>
  },
  {
    path: '/login',

    element: <Login/>
  }
]

export default loginRouter
