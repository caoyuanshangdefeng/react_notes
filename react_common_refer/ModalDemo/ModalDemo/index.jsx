import React from 'react'
import './modal.css'
export default function ModalDemo(props) {

  const {
    visible,
    title,
    onOk,
    onCancel,
    content
  } = props
  console.log('@@@props', props);




  if (!visible){
    return null
  }
  return (
    <div className="modal-mask" onClick={onCancel}>
      <div className="modal-container" >

        <div className="modal-header">
          <div className="modal-title">{title}</div>
        </div>
        <div className="modal-body">
          children

          {JSON.stringify(content)}
        </div>
        <div className="modal-footer">
          <button className='modal-cancel-btn btn' onClick={onCancel}>取消{visible? 1:0}</button>
          <button className='modal-confirm-btn btn' onClick={onOk}>确定{visible? 1:0}</button>
        </div>
      </div>
    </div>
  )
}
// https://juejin.cn/post/6844903777460617223
// https://www.imooc.com/article/75950

