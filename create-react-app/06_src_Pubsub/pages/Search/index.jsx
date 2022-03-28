import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'


export default class Search extends Component {

  search = () => {
    // 获取用户的输入(连续解构赋值+重命名)
    const { keyWordElement: { value: keyWord } } = this
    // 发送请求通知App更新状态
    // this.props.updateAppState({ isFirst: false, isLoading: true })

    PubSub.publish('msgState',{ isFirst: false, isLoading: true })
    // 发送网络请求
    axios.get(`http://127.0.0.1:8000/datashow/users?q=${keyWord}`).then(
      response => {
        //请求成功后,通知App更新状态
        // this.props.updateAppState({isLoading:false,users:response.data})
        PubSub.publish('msgState',{isLoading:false,users:response.data})
        
    
      },
      error => {
        //请求成功后,通知App更新状态
        // this.props.updateAppState({isLoading:false,err:error.message})
        PubSub.publish('msgState',{isLoading:false,err:error.message})

        console.log(error.message);
      }
    )
  }



  render() {
    return (
      <div>
        <section>
          <h3>搜索用户</h3>
          <input ref={c => this.keyWordElement = c} type="text" placeholder='输入关键字' />
          <button onClick={this.search}>搜索</button>
        </section>
      </div>
    )
  }
}
