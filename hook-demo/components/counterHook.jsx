import React,{useState} from 'react'

function Counter () {
  const [count,setCount] = useState(0)
  return (
    <div>
      <p>HOOK COUNTER</p>
      <p>{count}</p>
      <button onClick={()=>{setCount(count+1)}}>BUTTUN</button>
    </div>
  )

}

export default Counter
