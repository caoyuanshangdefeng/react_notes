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


export const createIncrementAction=(data) =>({type:INCREMENT,data:data})
export const createDecrementAction=(data) =>({type:DECREMENT,data:data})

// const createDecrementAction=(data) =>{} 这样写{}会被认为是函数体的花括号

