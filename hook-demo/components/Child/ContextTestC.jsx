import React,{useContext} from 'react'
// 函数式组件首字母必须大写
import { ThemeContext } from '../context'
function ContextTestC () {
  const value=useContext(ThemeContext)
  return (
    <button style={value}>hello world</button>
  )





}

export default ContextTestC




