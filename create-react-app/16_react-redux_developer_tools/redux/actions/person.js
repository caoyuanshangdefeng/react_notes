import {ADD_PERSON} from '../constant'


// 创建一个增加人的action操作对象

export const createAddPersonAction=personObj => ({type:ADD_PERSON,data:personObj})