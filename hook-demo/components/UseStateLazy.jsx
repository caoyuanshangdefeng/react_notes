import React,{useState} from 'react'
// src\components\UseStateLazy.jsx
// 复杂的初始数据可以使用函数式解决
function UseStateLazy (props) {
  const [count,setCount] = useState(() => {
    if (props.initialState<100){
      return props.initialState+1
    }else{
      return props.initialState+100
    }

  })
  console.log('update')

  const handleClick1=() => {
    if (count<3){
      return setCount(count)
    }else{
      return setCount(count)
    }
  }



  return (
    <div>
      <p>HOOK COUNTER</p>
      <p>{count}</p>
      <button onClick={handleClick1}>Count BUTTUN</button>
    </div>
  )

}

export default UseStateLazy
