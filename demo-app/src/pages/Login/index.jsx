import React ,{useState,useRef} from 'react'

function Login () {
  const [username, setName] = useState('')
  const [password, setPwd] = useState('')
  const [display, setDispaly] = useState(false)
  const userRef=useRef()
  const pwdRef=useRef()

  const accountLogin=() => {
    setName(userRef.current.value)
    setPwd(pwdRef.current.value)

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


