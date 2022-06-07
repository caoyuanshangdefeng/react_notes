import React from 'react'
import './modal.css'
export default function ModalDemo(props) {
  // const propTypes = {
  //   visible: PropTypes.bool,
  //   title: PropTypes.string,
  //   onOk: PropTypes.func,
  //   onCancel: PropTypes.func,
  //   children: PropTypes.element
  // }

  const {
    visible,
    title,
    content,
    onOk,
    onCancel
  } = props
  console.log('@@@', props);


  // const show = { zIndex: 2000, opacity: 1 }
  // const hide = { zIndex: -1, opacity: 0 }
  // const contShow = { width: '600px', height: '600px' }
  // const contHide = { width: '0px', height: '0px' }





  // return (
  //   <div className="gy-modalContainer" style={ visible ? show : hide }>
  //     <div className="mask" onClick={onCancel}></div>
  //     <div className="innerContent" style={ visible ? contShow : contHide }>
  //       <div className="innerContent-header">
  //         <div className="innerContent-title">{title}</div>
  //       </div>
  //       <div className="innerContent-center">
  //         children
  //         {/* {content} */}
  //         {JSON.stringify(content)}
  //       </div>
  //       <div className="innerContent-footer">
  //         <button type='cancel' onClick={onCancel}>取消</button>
  //         <button type='primary' onClick={onOk}>确定</button>
  //       </div>
  //     </div>
  //   </div>
  // )
  return (
    <div className="modal-mask" onClick={onCancel}>
      <div className="modal-container" >

        <div className="modal-header">
          <div className="modal-title">{title}</div>
        </div>
        <div className="modal-body">
          children
          {/* {content} */}
          {JSON.stringify(content)}
        </div>
        <div className="modal-footer">
          <button className='modal-cancel-btn btn' onClick={onCancel}>取消</button>
          <button className='modal-confirm-btn btn' onClick={onOk}>确定</button>
        </div>
      </div>
    </div>
  )
}
// https://juejin.cn/post/6844903777460617223
// https://www.imooc.com/article/75950

