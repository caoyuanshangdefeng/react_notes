/*
    容器组件
    借助react-redux创建容器组件
    容器组件是一个桥梁,左手边是UI,右手边是redux

*/

// 引入count的UI组件

import CountUI from "../../components/Count"
import {connect} from 'react-redux'
// 引入action
import {createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction} from "../../redux/count_action"

// 1.mapStateToProps函数返回的是一个对象
// 2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
// 3.mapStateToProps用于传递状态



function mapStateToProps (state) { 
    return {count:state}
}

// 1.mapDispatchToProps函数返回的是一个对象
// 2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
// 3.mapDispatchToProps用于传递操作状态的方法
function mapDispatchToProps(dispatch){
    return {
        jia:(number) => {dispatch(createIncrementAction(number))},
        jian:(number) => {dispatch(createDecrementAction(number))},
        jiaAsync:(number,time) => {dispatch(createIncrementAsyncAction(number,time))},
        // 通知redux执行加法

    }
}



// connect 是个函数,返回值也是一个函数
// const CountContainer=connect()(CountUI)
// 创建并暴露一个count的容器组件
// connect 在第一次调用的时候需要传入两个函数

export default connect(mapStateToProps,mapDispatchToProps)(CountUI)












