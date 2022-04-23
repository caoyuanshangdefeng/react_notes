import React, { Component } from 'react';
import './index.css'


export default class Parent extends Component {
  render() {
    return (
      <div className='parent'>
          <h3>我是Parent组件</h3>
          {/* <A>
              <B  />//B组件作为了标签体的内容
          </A> */}
          <A render={(name)=><B name={name}/>}/>
      </div>
    )
  }
}


class A extends Component {
    state={name:'zhangsan'}
    render() {
        console.log(this.props);
        const {name} = this.state
        return (
            <div className='a'>
                <h3>我是A组件</h3>
                {/* {this.props.children}//在这里调用了B */}
                {/* <B/> */}
                {this.props.render(name)}
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div className='b'>
                <h3>我是B组件</h3>
                <h4>名字是:{this.props.name}</h4>
            </div>
        );
    }
}