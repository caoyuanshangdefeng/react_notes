
import React, { lazy } from "react"
import { Navigate } from "react-router-dom"
// import Login from "pages/Login";
// import PageNotFound from 'pages/PageNotFound'
// import Demo from "pages/Demo";
// import Logout from "pages/Logout";


// `@/${loginPath}`)

const loginPath='pages/Login'
const Login = lazy(() => import(`@/${loginPath}`))
// const Login = lazy(() => import('@/pages/Login'))
const testDemo = [{
  key: '1',
  title: '应用列表',
  path: '/demo',
  sourcePath: 'pages/Demo',
},
{
  key: '2',
  title: '登录',
  path: '/login',
  sourcePath: 'pages/Login',
},]

// export const LayoutContent = (props) => {
//   getmenu(); // routerLists 赋值
//   return (
//       <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
//           <Suspense fallback={<div style={{ textAlign: 'center', fontSize: '20px', padding: '100px 0', color: '#0d7bff' }}>Loading...</div>}>
//               <Switch>
//                   {routerLists.map(item =>
//                       < Route path={item.path} key={item.key} component={
//                           item.component ? item.component : lazy(() => import(`@/${item.sourcePath}`))} />
//                   )}
//               </Switch>
//           </Suspense>
//       </Content>
//   )
// }













const PageNotFound = lazy(() => import('@/pages/PageNotFound'))
const Demo = lazy(() => import('@/pages/Demo'))
export const commonRoutes ={commonRoutes:[
  {
    path: '/',
    element: <Navigate to="/login" />
  },

  {
    path: '/login',


    element: <Login />

  },
  {
    path: '/404',
    element: <PageNotFound />

  },
  {
    path: '/*',
    element: <Navigate to="/404" />
  }
]}


export const baseRoutes = {baseRoutes:[
  {
    path: '/404',
    element: <PageNotFound />
  },
  {
    path: '/*',
    element: <Navigate to="/404" />
  }

]}



export const demoRoutes = [
  {
    path: '/',
    element: <Navigate to="/demo" />
  },
  {
    path: '/demo',
    element: <Demo />
  }
]


const testRoute = [{
  key: '1',
  title: '应用列表',
  path: '/demo',
  sourcePath: 'pages/Demo',
}]
const lazyComponent = (path) => { return lazy(() => import(`@/${path}`)) }
export const menuList = () => {

  const routerLists = []

  testRoute.map(item => {
    let Component = lazyComponent(item.sourcePath)




    routerLists.push({ path: item.path, element: <Component/> })
    routerLists.push({ path: '/', element: <Navigate to="/demo" /> })
  })
  return {routerMenu:routerLists}
}



