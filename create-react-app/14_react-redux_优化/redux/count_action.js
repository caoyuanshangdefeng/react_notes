/*
   该文件专门为Count组件生产action对象

*/
// function createIncrementAction (data) { 
//     return {type:'increment',data:data}
// }

// function createDecrementAction (data) { 
//     return {type:'decrement',data:data}
// }
import { INCREMENT,DECREMENT } from "./constant";


// 同步action,就是指action的值为object类型的一般对象
export const createIncrementAction=(data) =>({type:INCREMENT,data:data})
export const createDecrementAction=(data) =>({type:DECREMENT,data:data})

// 异步action就是指action的值为函数;数值或者数组不能开启一个异步任务
// !!!异步action中一般会调用一个同步action
// 异步action不是必须要使用的

export const createIncrementAsyncAction=(data,time)=>{
   return (dispatch) => {
      setTimeout(() => {
         dispatch(createIncrementAction(data))
      }, time);

   }
}
// function createIncrementAsyncAction (data) { 
   
// }
// const createDecrementAction=(data) =>{} 这样写{}会被认为是函数体的花括号

