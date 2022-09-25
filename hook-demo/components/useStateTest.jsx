import React,{useState} from 'react'

function UseStateTest () {
  // 复杂的数据类型可以使用函数式进行更新
  // 实现一个Count小于时自增1，Count大于3时自增2
  const [count,setCount] = useState(0)
  // 如果定义的初始数据是引用类型，使用函数式更新结合扩展运算符，完成对象局部属性的更新
  const [stu,setStu] = useState({name:'zhangsan',age:20})
  const handleClick1=() => {
    if (count<3){
      return setCount(count+1)
    }else{
      return setCount(count+2)
    }
  }
  const handleClick2=() => {
    setStu(() => {
      return {
        ...stu,
        name:'lisi'
      }
    })
  }


  return (
    <div>
      <p>HOOK COUNTER</p>
      <p>{count}</p>
      <p>{stu.name}</p>
      <p>{stu.age}</p>
      <button onClick={handleClick1}>BUTTUN</button>
      <button onClick={handleClick2}>ChangeStu</button>
    </div>
  )

}

export default UseStateTest
