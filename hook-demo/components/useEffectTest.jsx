import React,{useState,useEffect} from 'react'
// src\components\useEffectTest.jsx
function UseEffectTest () {
  // 复杂的数据类型可以使用函数式进行更新
  // 实现一个Count小于时自增1，Count大于3时自增2
  const [count,setCount] = useState(0)
  // 如果定义的初始数据是引用类型，使用函数式更新结合扩展运算符，完成对象局部属性的更新
  const [stu,setStu] = useState({name:'zhangsan',age:20})
  useEffect(() => {
    console.log(count,'print count value');
  },[])
  const handleClick1=() => {
    setCount(() => {
      if (count<3){
        return count+1
      }else{
        return count+2
      }
    })
    // if (count<3){
    //   return setCount(count+1)
    // }else{
    //   return setCount(count+2)
    // }
  }



  return (
    <div>
      <p>HOOK COUNTER</p>
      <p>{count}</p>

      <button onClick={handleClick1}>BUTTUN</button>
    </div>
  )

}

export default UseEffectTest
