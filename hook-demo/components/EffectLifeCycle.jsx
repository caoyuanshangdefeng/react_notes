import React,{useState,useEffect} from "react";
// vsrc\components\EffectLifeCycle.jsx
function EffectLifeCycle () {
  const [count,setCount] = useState(0)
  useEffect(() => {
    console.log('useEffect');
  },[])

  useEffect(() => {
    console.log(count,'print count value');
    return () => {
      // 清除上一次的useEffect，然后再执行useEffect
      console.log('cancel listening');
    }
  },[])
  const handleClick1=() => {
    setCount(() => {
      if (count<3){
        return count+1
      }else{
        return count+2
      }
    })
  }



  return (
    <div>
      <p>HOOK EffectLifeCycle</p>
      <p>{count}</p>

      <button onClick={handleClick1}>BUTTUN</button>
    </div>
  )

}
export default EffectLifeCycle;
