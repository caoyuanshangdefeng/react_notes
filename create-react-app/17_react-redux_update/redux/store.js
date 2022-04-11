/*
该文件专门用于暴露一个store对象,整个应用只有一个store对象
*/
// 引入createStore,专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware} from "redux"

// 引入汇总之后的reducers
import allReducer from '../redux/reducers/index'

// store 是个对象,默认暴露
// 引入redux-thunk ,用于支持异步action
import thunk from "redux-thunk"
// 引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'


// const store = createStore(countReducer)
// export default store



// 暴露store
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))


