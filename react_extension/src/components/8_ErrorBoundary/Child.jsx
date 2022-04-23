import React, { Component } from 'react';

class Child extends Component {
    state = {
        // users:[
        //     {id:'001',name:'tom',age:20},
        //     {id:'002',name:'Jack',age:35},
        //     {id:'003',name:'xiaoming',age:15},
        // ]
        users:"abcd"
    }
    render() {
        return (
            <div>
                <h2>我是Child组件</h2>
                {this.state.users.map((userOdj) => {
                    return <h4 key={userOdj.id}>{userOdj.name}---{userOdj.age}</h4>
                })}
            </div>
        );
    }
}

export default Child;