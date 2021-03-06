import React, { Component } from 'react'


export default class Count extends Component {
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
                <h1>当前求和为: {this.props.count}</h1>
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
