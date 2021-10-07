import React, { useState } from 'react'
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
      if (res.status === 200 && res.data.errno === 0) {
        const loginState = true
        const admin = res.data.message
        store.dispatch({
          type: 'LOGIN_STATE',
          loginState,
          admin
        })
        alert('登录成功！')
        handleShowLogin()
      } else {
        alert('密码错误')
      }
    })
  }

  const closeLogin = () => {
    handleShowLogin()
  }

  return ( 
    <div className="fixed flex inset-0 justify-center items-center z-50 bg-gray-500 bg-opacity-50">
      <div className="bg-white w-80 max-w-full h-80 rounded-lg p-5">
        <div className="text-center my-5">
          <i 
            style={{"fontSize": "1.2rem"}} 
            className="iconfont icon-close float-right mr-4"
            onClick={closeLogin}
          />
          <span className="ml-12 text-5xl text-blue-500">Login</span>
        </div>
        <div className="mx-4 mt-8 mb-6">
          <div className="mb-4 py-1.5 border border-blue-400 rounded-lg">
            <i style={{"fontSize": "1rem"}} className="iconfont icon-zhanghao mr-2"/>
            <input 
              placeholder="请输入账号"
              className="h-6 w-48 text-base focus:outline-none"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6 py-1.5 border border-blue-400 rounded-lg">
            <i style={{"fontSize": "1rem"}} className="iconfont icon-mima mr-2"/> 
            <input 
              placeholder="请输入密码"
              type="password"
              className="h-6 w-48 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="text-center">
          <button 
            className="h-8 w-32 border-2 border-blue-400 rounded-xl cursor-pointer focus:bg-blue-100"
            onClick={handleLogin}
          >
            登 录
          </button>
        </div>
      </div>
    </div>
  )
}

export default useLogin