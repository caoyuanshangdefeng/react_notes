/*
该文件专门用于暴露一个store对象,整个应用只有一个store对象
*/
// 引入createStore,专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware, combineReducers } from "redux"
// 引入为count组件服务的reducer
import countReducer from './reducers/count' //这个文件后期使用的是默认暴露
// store 是个对象,默认暴露
// 引入redux-thunk ,用于支持异步action
import thunk from "redux-thunk"
// 引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'

// 引入person的reducer
import personReducer from './reducers/person'
// const store = createStore(countReducer)
// export default store


// 汇总所有的reducer
const allReducer = combineReducers(
    {
        he: countReducer,
        rens: personReducer
    }
)
// 暴露store
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))


