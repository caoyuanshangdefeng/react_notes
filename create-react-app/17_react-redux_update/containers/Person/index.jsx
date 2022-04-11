import { nanoid } from 'nanoid';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {createAddPersonAction} from '../../redux/actions/person'
class Person extends Component {
   addPerson=() => {
       const name=this.nameNode.value
       const age=this.ageNode.value
       
       const personObj={id:nanoid(),name:name,age:age}
      //  console.log(personObj);
       this.props.jiayiren(personObj)
       this.nameNode.value=''
       this.ageNode.value=''


   }
  
    render() {
    return (
      <div>
          <h2>我是Person组件,上方组件的求和为{this.props.count}</h2>
          <input ref={c=>this.nameNode=c}type="text" placeholder="输入名字"/>
          <input ref={c=>this.ageNode=c}type="text" placeholder="输入年龄"/>
          <button onClick={this.addPerson}>添加</button>
          <ul>
              {/* <li>名字1---年龄1---</li> */}
              {
                this.props.persons.map(
                  (p) => {
                    return <li key={p.id}>{p.name}---{p.age}</li>
                  }
                )
              }
          </ul>


      </div>
    )
  }
}




export default connect(
  state=>({
    persons:state.persons,
    count:state.count}),//映射状态
  {
    jiayiren:createAddPersonAction
  }//映射操作状态的方法

)(Person)
