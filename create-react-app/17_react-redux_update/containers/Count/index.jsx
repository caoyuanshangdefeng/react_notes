/*
    容器组件
    借助react-redux创建容器组件
    容器组件是一个桥梁,左手边是UI,右手边是redux
*/
import React, { Component } from 'react'
// 引入count的UI组件
import {connect} from 'react-redux'

// 引入action
import {createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction} from "../../redux/actions/count"
// 映射状态
// const mapStateToProps=state=>({count:state})

// 映射操作状态的方法
// const mapDispatchToProps=dispatch=>({
   
//         jia:(number) => {dispatch(createIncrementAction(number))},
//         jian:(number) => {dispatch(createDecrementAction(number))},
//         jiaAsync:(number,time) => {dispatch(createIncrementAsyncAction(number,time))},
      
//     })





// case1
// export default connect(
//     state=>({count:state}),
//     dispatch=>({
   
//         jia:(number) => {dispatch(createIncrementAction(number))},
//         jian:(number) => {dispatch(createDecrementAction(number))},
//         jiaAsync:(number,time) => {dispatch(createIncrementAsyncAction(number,time))},
      
//     })
//     )(CountUI)

class CountUI extends Component {
    state = {
        carName:'C260'
        
    }

    // 加法
    increment = () => {
        const {value}=this.selectNumber
        this.props.jia(value*1)
        
    
    }
    // 减法
    decrement = () => {
        const {value}=this.selectNumber
        this.props.jian(value*1)
       
    }
    // 奇数加
    incrementIfOdd = () => {
        const {value}=this.selectNumber
        if (this.props.count%2!==0) {
            
            this.props.jia(value*1)

        }

    }
    // 异步加
    incrementAsyc = () => {
        const {value}=this.selectNumber
        this.props.jiaAsync(value*1,1000)

       

    }
    render() {
        // console.log('UI组件接收到的props是:',this.props);
        return (
            <div>
                <h1>我是Count组件</h1>
                <h4>当前求和为: {this.props.count},下方组件的人数为:{this.props.personCount}</h4>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>

                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>奇数+</button>&nbsp;
                <button onClick={this.incrementAsyc}>异步+</button>
            </div>
        )
    }
}
export default connect(
    state=>({
        count:state.count,
        personCount:state.persons.length}),
    // mapDispatchToProps的简写,react-redux进行了自动分发
    {
    
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction,
        
    }
    )(CountUI)












