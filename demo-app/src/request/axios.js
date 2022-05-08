import axios from "axios";

// create axios intance
// https://www.jianshu.com/p/b8087593644a

const service =axios.create(
  {
    timeout:1000*5,
    baseURL:"http://127.0.0.1:8000/",
    headers: {
      'Content-Type': 'application/json'
    }
  }
)

// 2.请求拦截器
service.interceptors.request.use(config => {
  //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
   config.data = JSON.stringify(config.data); //数据转化,也可以使用qs转换
   config.headers = {
     'Content-Type':'application/x-www-form-urlencoded' //配置请求头
   }
   //注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，推荐js-cookie
   const token = getCookie('名称');//这里取token之前，你肯定需要先拿到token,存一下
   if(token){
      config.params = {'token':token} //如果要求携带在参数中
      config.headers.token= token; //如果要求携带在请求头中
    }
  return config
}, error => {
  Promise.reject(error)
})


