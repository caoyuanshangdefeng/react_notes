import React, { Component } from 'react'
import './index.css'


// 创建Context对象
const MyContext = React.createContext()
const {  Consumer } = MyContext
export default class A extends Component {
    state = {
        username: 'tom',
        age: 18
    }
    render() {
        const { username, age } = this.state
        return (
            <div className="parent">
                <h3>我是A组件</h3>
                <h4>我的用户名是:{username}</h4>
                {/* <B username={this.state.username}/> */}
                {/* <MyContext.Provider value={{username:username,age:age}}> */}
                <MyContext.Provider value={{ username, age }}>
                    <B />
                </MyContext.Provider>

            </div>
        )
    }
}


class B extends Component {
    render() {
        return (
            <div className="child">
                <h3>我是B组件</h3>
                {/* <h4>我是从A组件接收的用户名:{this.props.username}</h4> */}
                <C />
            </div>

        )
    }
}

// class C extends Component {
//     static contextType=MyContext
//     render() {
//         console.log(this.context);
//         return (
//             <div className="grand">
//                 <h3>我是C组件</h3>
//                 <h4>我是从A组件接收的用户名:{this.context.username}</h4>
//                 <h4>我是从A组件接收的年龄:{this.context.age}</h4>
//             </div>
//         )
//     }
// }


function C() {
    return (
        <div className='grand'>
            <h3>我是C组件</h3>
            <h4>我是A组件接收到的:
                <Consumer>
                    {
                        value => {
                            return `${value.username},年龄:${value.age}`
                        }
                    }
                </Consumer>
            </h4>

        </div>
    )

}
