import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
// router5 与router6使用Link或者NavLink通过类似<a>标签实现路由切换,6中还有Navigate,它必须渲染到页面上才会路由切换
export default function Home() {

  return (
    <div>
      <h3>我是Home的内容</h3>
      <div>
              <h2>Home组件内容</h2>
              <div>
                <ul className="nav nav-tabs">
                  <li>
                    <NavLink className="list-group-item" to="news">News</NavLink>
                  </li>
                  <li>
                    <NavLink className="list-group-item" to="message">Message</NavLink>
                  </li>
                </ul>
                {/* 指定路由组件呈现的位置 */}
                <Outlet/>
              </div>
            </div>


    </div>



  )
}
