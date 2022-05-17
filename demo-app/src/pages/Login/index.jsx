import React ,{useState,useRef,lazy} from 'react'
import { changeRoute } from 'store/reducers/routeSlice';
import { useSelector, useDispatch } from 'react-redux'
import Logout from 'pages/Logout';



function Login () {
  const [username, setName] = useState('')
  const [password, setPwd] = useState('')
  const [display, setDispaly] = useState(false)
  const userRef=useRef()
  const pwdRef=useRef()
  // const routes = useSelector((state) => state.routeLink.routing)
  const dispatch = useDispatch()

  const accountLogin=() => {
    setName(userRef.current.value)
    setPwd(pwdRef.current.value)
    dispatch(changeRoute([{

        path: 'logout',

        // element: lazy(() => import('pages/Logout'))
        element: <Logout/>

    }]))

  }

  const showPassword=() => {
    setDispaly(true)

  }


  return (
    <div>
      <span>username:{username};password:{password}</span>
      <div><input ref={userRef} type='text' placeholder='Please Input Username' /></div>
      <div><input ref={pwdRef} type={display ? 'text' : 'password'} placeholder='Please Input Password' /></div><div><button onClick={showPassword}></button></div>
      <button onClick={accountLogin}>Login</button>

    </div>
  )
}


export default Login


