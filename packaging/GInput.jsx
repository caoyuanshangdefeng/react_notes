// input组件
import React from 'react'
import './GInput.css'
// props 参数：
// --props
// ------可选：type defaultValue placeholder readOnly disabled
// ------可选：trim:"true" 过滤前后空格 className
// ------可选：rule:{ regx:RegExp | function, [callback: function, errorMsg: ''] } 验证规则
// ------必选：onInput input事件函数，通过这个函数获取修改后的input值value
// --自定义属性以data-*方式定义
class GInput extends React.Component {
  constructor (props) {
    super();
    let errMsg = ''
    if (props.rule) {
      errMsg = props.rule.errorMsg || ''
    }
    let attrs = {}
    attrs = this.getOptionsAttrs(props)
    this.state = {
      val: null,
      attrs: attrs,
      className: props.className || '',
      hasError: this.regxRule(props, props.defaultValue || props.value),
      errorMsg: errMsg
    }
    this.handleInputChange = this.handleInputChangeFn.bind(this)
  }
  hasRule (props) {
    let flag = ''
    if (props.rule) {
      if (props.rule.regx instanceof RegExp) {
        flag = 'RegExp'
      }
      else if (typeof props.rule.regx === 'function') {
        flag = 'function'
      }
    }
    return flag
  }
  regxRule (props, expValue) {
    expValue = expValue || ''
    // console.log('expValue:', expValue, '  flag:', props.rule.regx.test(expValue))
    let error = false
    let ruleFlag = this.hasRule(props)
    if (ruleFlag) {
      let flag;
      if(ruleFlag === 'RegExp') {
        flag = new RegExp(props.rule.regx).test(expValue)
      }
      else if (ruleFlag === 'function') {
        flag = props.rule.regx(expValue)
      }
      if (!flag) {
        error = true
      }
      if (typeof props.rule.callback === 'function') {
        props.rule.callback(flag)
      }
    }
    return error
  }
  handleInputChangeFn(event) {
    // console.log(event.target.value)
    let val = event.target.value
    if (typeof this.props.onInput === 'function') {
      if(this.props.trim === 'true') {
        val = val.replace(/^\s*|\s*$/g,'')
        event.target.value = val
      }
      if (typeof val === 'string' && val !== this.state.val) {
        // 如果设置了trim:"true"，每次输入空格的时候，都会过滤，value一直都是''
        // 这种情况下，只需要第一次更新一下空值，后面的空值就不需要再更新了
        // 下面的代码就是为了达到这个目的，防止每次空值都更新
        this.props.onInput(val)
        this.setState({
          val: val
        })
      }
      this.setState({
        hasError: this.regxRule(this.props, val)
      })
    } else {
      console.error('<GInput> has no onInput event.')
    }
  }
  // type onInput className value属性是直接写在input标签中的，rule, trim属性是不需要直接写在属性中的
  // 其他的属性，包括自定义属性，都以 attrs 解构赋值的方式写入input属性中
  getOptionsAttrs (props) {
    let obj = {}
    let keyArr = Object.keys(props)
    let requiredOptions = 'onInput|type|rule|trim|className|value'
    let key = ''
    for(let i = 0; i < keyArr.length; i++) {
      key = keyArr[i]
      if(requiredOptions.indexOf(key) > -1) {
        continue
      }
      // console.log(key)
      obj[key] = props[key]
    }
    return obj
  }
  render () {
    return (
      <div className={'g-input-box ' + this.state.className + (this.state.hasError? ' error':'')}>
        {/* <input className='g-input'
               readOnly={this.state.readOnly}
               disabled={this.state.disabled}
               type={this.props.type || 'text'}
               placeholder={this.props.placeholder}
               defaultValue={this.props.defaultValue}
               onInput={this.handleInputChange}/> */}
        {
          this.props.value ?
          (
            <input className='g-input'
               {...this.state.attrs}
               type={this.props.type || 'text'}
               value={this.props.value}
               onInput={this.handleInputChange}/>
          )
          :
          (
            <input className='g-input'
               {...this.state.attrs}
               type={this.props.type || 'text'}
               onInput={this.handleInputChange}/>
          )
        }
        {
          this.state.hasError && (
            <div className="error-msg">{this.state.errorMsg}</div>
          )
        }
      </div>
    )
  }
}

export default GInput;


// 组件同目录下的样式
html, body {
  height: 100%; padding: 0; margin: 0;
}
/*GInput*/
.g-input-box > .g-input {
  border: 1px solid #666;
}
.g-input-box.error > .g-input {
  border: 1px solid #f00;
}
.g-input-box.error > .error-msg, .g-input-box.error > .g-input {
  color: #f00;
}

// 组件的引用页面
import React, { Component } from "react";
import GInput from './components/form/GInput.jsx'

class About extends Component {
  constructor(props) {
    super();
    this.state={
      form: {
        input123: 'abc',
        pwd: '12s3'
      },
      rules: {
        input123Rule: {
          regx: /^[a-z]*$/g,
          callback: function (flag) {
            console.log('input123Rule:', flag)
          }
        },
        pwdRule: {
          regx: function (val) {
            if (val > 100 && val < 10000) {
              return true
            } else {
              return false
            }
          },
          callback: function (flag) {
            console.log('pwdRule:', flag)
          },
          errorMsg: '只能输入100-10000之间的数字'
        }
      }
    }
  }
  UNSAFE_componentWillMount () {}
  componentDidMount () {}
  handleInput123Change (val) {
    console.log('handleInput123Change:', val)
  }
  render () {
    return (
      <div>
        <h1>About page</h1>

        <GInput type="text" className="my-input-123"
                trim={true}
                disabled={false}
                placeholder="只能输入小写字母"
                rule={this.state.rules.input123Rule}
                onInput={this.handleInput123Change}></GInput>
        <GInput type="text" className="my-input-123"
                trim={true}
                defaultValue={this.state.form.pwd}
                rule={this.state.rules.pwdRule}
                onInput={this.handleInput123Change}></GInput>
      </div>
    )
  }
}
export default About;



