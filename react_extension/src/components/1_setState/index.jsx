import React, { Component } from 'react'

export default class Demo extends Component {

    state={count:0}
    add=() => {
        // // 对象式的setState
        // // 1.获取原有的count值
        // const {count} =this.state
        // // 更新状态,react修改完状态,render渲染,最后回调
        

        // this.setState({count:count+1},() => {
        //     console.log(this.state.count);
        // })
        // 函数式的setState
        // this.setState((state,props) => {
        //     return {count:state.count+1}
        // })

        this.setState(state =>({count:state.count+1})
        )








    }
    render() {
        return (
        <div>
            <h1>当前数值为{this.state.count}</h1>
            <button onClick={this.add}>点击加1</button>
        </div>
        )
    }
}
