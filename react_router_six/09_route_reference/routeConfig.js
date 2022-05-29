import menuRoute from '@/route/index'
import { lazy } from 'react';
import { NavLink, Outlet, Route, Routes, Link } from 'react-router-dom'

lazyRoute = (path) => {
  let Conponent = lazy(() => import(path))
  return Conponent
}

// <Navigate to="/about"/>
navRoute = (path) => {
  return <Navigate to={path} />
}

getSubmenu = (menuRoute) => {
  var noFoundFlag = ['/', '*']
  return menuRoute.map(item => {
    if (!item.children || item.children.length === 0) {    //如果当前路由没有子路由且该路由的hidden为false或不设置该路由的hidden时则直接显示该路由，若该路由的hidden为true则不显示该路由
      if (item.hidden) return false
      return noFoundFlag.includes(item.url) ? <Route path={item.url} element={navRoute(item.sourcePath)} /> : <Route path={item.url} element={lazyRout(item.sourcePath)} />
    } else if (item.children && item.children.length >= 1) {
      // if (item.hidden) return false

      let parentRouter = [<Route path={item.url} element={lazyRout(item.sourcePath)} />];
      let childRouter = [];
      item.children.map(
        item => {

          childRouter.push(<Route path={item.url} element={lazyRout(item.sourcePath)} />)
          return true
      })
      return {parentRouter:parentRouter,childRouter:childRouter}


  }});
}
