import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Detail() {
  // 连续解构赋值
  const {state:{id,title,content}}=useLocation()

  return (
    <div>
      <h2>我是Detail组件</h2>
      <ul>

        <li>消息编号:{id}</li>
        <li>消息标题:{title}</li>
        <li>消息内容:{content}</li>
      </ul>
    </div>
  )
}
