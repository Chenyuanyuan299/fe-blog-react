import React, { useState } from 'react'
import LoginUI from './loginUI'
import store from '../../store'
import axios from 'axios'

const useLogin = (props) => {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  const { handleShowLogin } = props
  const handleLogin = () => {
    const data = { username, password }
    if (!data.username && !data.password) {
      alert('账号密码不能为空！')
      return 
    }
    if (!data.username) {
      alert('账号不能为空！')
      return 
    }
    if (!data.password) {
      alert('密码不能为空！')
      return
    }
    axios.post('/api/user/login', data).then(res => {
      const resData = res.data
      if (res.status === 200 && resData.errno === 0) {
        const loginState = true
        const admin = resData.message
        store.dispatch({
          type: 'LOGIN_STATE',
          loginState,
          admin
        })
        alert('登录成功！')
        handleShowLogin()
      } else if(resData.errno === -1 && resData.message === '用户不存在') {
        alert('用户不存在！')
      } else {
        alert('密码错误！')
      }
    })
  }

  const closeLogin = () => {
    handleShowLogin()
  }

  return ( 
    <LoginUI 
      setUsername={setUsername}
      setPassword={setPassword}
      handleLogin={handleLogin}
      closeLogin={closeLogin}
    />
  )
}

export default useLogin