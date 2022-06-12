
import React, { useEffect, useState } from 'react'
import Paginator from '@/compontents/Paginator';
import DataReq from '@/utils/http'
import ModalDemo from '@/pages/ModalDemo';
const getDataList = (pageFlag) => {
  const params={'page':pageFlag}
  return DataReq.get('users/',params).then((res) => { console.log(res); return res.data }).catch(err => console.log(err))

}



export default function Demo() {
  const [visible, setVisible] = useState(false)
  const [pagination, setPagination] = useState(1)
  // const onOK=() => setVisible(!visible)
  // const onCannel=() => setVisible(!visible)
  console.log('6666', visible);
  const toggle =(i)=>{setPagination(i);}
  console.log('@@current page',pagination);

  const [messages, setMessages] = useState([
  ])

  const dataVisible = (dataID) => {

    // setVisible(!visible)
    console.log("@@dataVisible", dataID);
    const userList = messages.map((item) => {
      if (item.id === dataID) {
        item["isShow"] = 1
      } else {
        item["isShow"] = 0
      }


      return item
    })
    console.log(userList);
    setMessages(userList)
    setVisible(!visible)


  }

  useEffect(() => {
    (async () => {
      const userData = await getDataList(pagination)
      const userList = userData.data.map((item) => {
        item["isShow"] = 0
        return item
      })


      setMessages(userList)
    })()




  }, [setMessages,pagination])

  return (
    <div>
      <h2>Demo Component</h2>
      <div>
        <h2>我是Message</h2>
        <div>
          <hr />
          {
            messages.map((item) => {
              return (
                <div key={item.id}>
                  USER_{item.id};{item.name};{item.mail}
                  <button onClick={() => dataVisible(item.id)}>
                    Details</button>
                  {item.isShow ?
                    <ModalDemo
                      title='this is title'
                      visible={visible}
                      onOK={() => setVisible(!visible)}
                      onCancel={() => setVisible(!visible)}
                      content={item}
                    /> : null}

                </div>
              )
            })
          }
          <Paginator
          index={pagination}
          total='100'
          toggle={toggle}

          />

        </div>
      </div>

    </div>
  )
}
