import React ,{useState,useRef,lazy} from 'react'
import { changeRoute } from '@/store/reducers/routeSlice';
import { useSelector, useDispatch } from 'react-redux'
import { setToken } from '@/utils/auth';
import { useNavigate } from 'react-router-dom';
import { demoRoutes,menuList} from "@/routes";

function Login () {
  const [username, setName] = useState('')
  const [password, setPwd] = useState('')
  const [display, setDispaly] = useState(false)
  const userRef=useRef()
  const pwdRef=useRef()

  const dispatch = useDispatch()
  const navigate=useNavigate()

  const accountLogin=() => {
    setName(userRef.current.value)
    setPwd(pwdRef.current.value)
    setToken('112233445566')
    navigate('/')
    // dispatch(changeRoute(demoRoutes))
    dispatch(changeRoute(menuList()))

  }

  const showPassword=() => {
    setDispaly(true)

  }


  return (
    <div>
      <span>username:{username};password:{password}</span>
      <div><input ref={userRef} type='text' placeholder='Please Input Username' /></div>
      <div><input ref={pwdRef} type={display ? 'text' : 'password'} placeholder='Please Input Password' /></div><div><button onClick={showPassword}>showPwd</button></div>
      <button onClick={accountLogin}>Login</button>

    </div>
  )
}


export default Login


