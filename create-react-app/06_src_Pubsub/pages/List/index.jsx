import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {

  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: '',
  }

  componentDidMount() {
    // 订阅消息,开启定时器
    // 开启消息订阅
    this.token=PubSub.subscribe("msgState", (_, stateObj) => {
      // console.log(stateObj);
      this.setState(stateObj)
    })
  }


  componentWillUnmount(){
    // 取消消息订阅
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state
    return (
      <div>
        {
          isFirst ? <h2>欢迎使用,输入关键字,随后点击搜索</h2> :
          isLoading ? <h2>Loading ....</h2> :
          err ? <h2 style={{ color: 'red' }}>{err}</h2> :

          users.map((item) => {
                  return (
                    <div key={item.id}>
                      <span >{item.name}{item.age}</span>
                    </div>


                  )
                })


        }
      </div>
    )
  }
}



