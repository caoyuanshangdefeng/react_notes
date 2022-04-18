import React from 'react'
import { Component } from 'react'
import ReactDOM from 'react-dom'
// 类组件
// export default class DemoClass extends Component {
//     state = { count: 0 }

//     myRef=React.createRef()
//     add = () => {
//         this.setState(state => ({ count: state.count + 1 }))
//     }
//     componentDidMount() {
//         this.timer=setInterval(() => {
//             this.setState(state => ({ count: state.count + 1 }))
//         }, 1000)
//     }



//     componentWillUnmount(){
//         clearInterval(this.timer)
//     }
//     unmount = () => {
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }
//     show=() => {
//         alert(this.myRef.current.value)
//         this.myRef.current.value=''
//     }

    

//     render() {

//         return (
//             <div>
//                 <input type='text' ref={this.myRef} />
//                 <h2>当前求和为 : {this.state.count}</h2>
//                 <button onClick={this.add}>点我+1</button>
//                 <button onClick={this.unmount}>卸载组件</button>
//                 <button onClick={this.show}>点击当前数据</button>
                
//             </div>
//         )
//     }
// }

// 函数组件

function DemoFunc() {
    // console.log('Demo'); //Demo 调用1+n 次
    const [count, setCount] = React.useState(0)//单例模式
    const [name, setName] = React.useState('tom')//单例模式
    const myRef=React.useRef()

    // a的值为一个数组,第一个值为0/1/2;第二个值为更新状态的方法

    // React.useEffect(() => {
    //     console.log('@');
    // },[])//如果不给useEffect添加第二个参数,它会检测所有的状态,则被调用1+n次,不写数组谁都监测,写了空数组,谁都不监测


    React.useEffect(() => {
        let timer=setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])//如果不给useEffect添加第二个参数,它会检测所有的状态,则被调用1+n次,不写数组谁都监测,写了空数组,谁都不监测;给列表中加入state的参数,则会对其进行监测;加入return函数则会变为willUnmount

    function add() {
        // setCount(count+1)
        // setCount((count) => {return count+1})
        setCount(count => count + 1)

    }
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))

    }



    function change() {
        setName('zhangsan')
    }

    function show() {
        alert(myRef.current.value)
    }
    return (
        <div>
            <h2>当前求和为 : {count},{name}</h2>
            <input type='text' ref={myRef}/>

            <button onClick={add}>点我+1</button>
            <button onClick={change}>点我改名</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点击提示数据</button>
        </div>
    )

}

export default DemoFunc