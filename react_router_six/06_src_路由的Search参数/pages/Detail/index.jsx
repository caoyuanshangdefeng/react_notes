import React from 'react'
import { useSearchParams } from 'react-router-dom'
export default function Detail() {
  const [search,setSearch]= useSearchParams()
  const id=search.get('id')
  const title=search.get('title')
  const content=search.get('content')

  return (
    <div>
      <h2>我是Detail组件</h2>
      <ul>
        <li>
          <button onClick={()=>setSearch('id=008&title=hello&content=welcome')}>点我更新一下</button>
        </li>
        <li>消息编号:{id}</li>
        <li>消息标题:{title}</li>
        <li>消息内容:{content}</li>
      </ul>
    </div>
  )
}
