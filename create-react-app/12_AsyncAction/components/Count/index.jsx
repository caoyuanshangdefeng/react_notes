import React, { Component } from 'react'
// 引入store用于获取store中保存的状态
import store from '../../redux/store'
// react 可修改状态state,可以掉render,redux仅管理状态

import { 
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'
export default class Count extends Component {
    state = {
        carName:'C260'
        
    }
    // componentDidMount(){
    //     // 检测redux中状态的变化,只要变化,就调用render
    //     store.subscribe(() => {
    //         // console.log('aa');
    //         this.setState({})
    //     })
    // }
    // 加法
    increment = () => {
        const {value}=this.selectNumber
        // 通知redux加value
        store.dispatch(createIncrementAction(value*1))
        


    }
    // 减法
    decrement = () => {
        const {value}=this.selectNumber
        store.dispatch(createDecrementAction(value*1))

    }
    // 奇数加
    incrementIfOdd = () => {
        const {value}=this.selectNumber
        const count=store.getState()
        if (count%2!==0){
            store.dispatch(createIncrementAction(value*1))
        }
       

    }
    // 异步加
    incrementAsyc = () => {
        const {value}=this.selectNumber
        store.dispatch(createIncrementAsyncAction(value*1,1000))
        // setTimeout(() => {
        //     store.dispatch(createIncrementAction(value*1))
        // }, 1000);

    }
    render() {
        return (
            <div>
                <h1>当前求和为: {store.getState()}</h1>
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
