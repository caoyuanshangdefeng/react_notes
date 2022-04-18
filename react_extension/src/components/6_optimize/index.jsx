// import React, { Component } from 'react'
import React, { PureComponent } from 'react'
import './index.css'
export default class Parent extends PureComponent {
    state = { carName: '奔驰C160' }
    changeCar = () => {
        this.setState({ carName: 'BMW 320M' })

    }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(nextProps,nextState);//接下来要变化的目标props,目标state
    //     console.log(this.props,this.state);//目前的props和state
    //     if (this.state.carName === nextState.carName) return false
    //     else return true
    //     // return !this.state.carName === nextState.carName
    // }


    render() {
        return (
            <div className='parent'>
                <h3>我是父组件</h3>
                <h4>Car Name : {this.state.carName}</h4>
                <button onClick={this.changeCar}>点我换车</button>
                <Child carName={this.state.carName} />
                {/* <Child carName="aotuo" /> */}
            </div>
        )
    }
}

class Child extends PureComponent {
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(nextProps,nextState);//接下来要变化的目标props,目标state
    //     console.log(this.props,this.state);//目前的props和state
    //     if (this.props.carName === nextProps.carName) return false
    //     else return true
    //     // return !this.props.carName === nextProps.carName
    // }
    render() {
        return (
            <div className='child'>
                <h3>我是子组件</h3>
                <h4>我接到的车是 : {this.props.carName}</h4>
            </div>
        )
    }
}
