
import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import DataReq from '@/utils/http'

const getDataList = () => {
  return DataReq.get('users/').then((res) => {console.log(res);return res.data}).catch(err => console.log(err))
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve([6, 7, 8, 9, 10])
  //   }, 2000)
  // })

}


export default function Demo() {
  // const [messages] = useState([
    // { id: '001', title: '消息1', content: '锄禾日当午' },
    // { id: '002', title: '消息2', content: '汗滴禾下土' },
    // { id: '003', title: '消息3', content: '谁知盘中餐' },
    // { id: '004', title: '消息4', content: '粒粒皆辛苦' },
  // ])

  const [messages,setMessages] = useState([
  ])

  useEffect(() => {
    (async() => {
      const kaimo = await getDataList()
      console.log('useEffect：kaimo', kaimo.data)
      setMessages(kaimo.data)
    })()
  },[setMessages])



//   componentDidMount(){

//     //获取缓存的数据

//     var todolist=storage.get('keyName');

//     if(todolist){

//         this.setState({

//             list:todolist
//         })
//     }

// }
  return (
    <div>
      <h2>Demo Component</h2>
      <div>
      <h2>我是Message</h2>
      <div>


        <hr />

        {
        messages.map((item) => {return (<div key={item.id}>USER_{item.id};{item.name};{item.mail}</div>)})
      }
        {/* 指定路由组件的展示位置 */}
        {/* <Outlet /> */}
      </div>
    </div>

    </div>
  )
}
