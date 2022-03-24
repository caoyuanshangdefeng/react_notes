import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {

  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: '',
  }

  // componentDidMount() {
  //   PubSub.subscribe("atguigu", (_, data) => {
  //     console.log(data);
  //   })
  // }

  render() {
    const { users, isFirst, isLoading, err } = this.props
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
