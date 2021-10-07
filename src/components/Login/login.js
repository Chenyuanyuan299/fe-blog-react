import React, { Component } from 'react'
import axios from 'axios'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state ={
      username: '',
      password: '',
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  render() {
    return ( 
      <div className="fixed flex inset-0 justify-center items-center z-50 bg-gray-500 bg-opacity-50">
        <div className="bg-white w-80 max-w-full h-80 rounded-lg p-5">
          <div className="text-center text-5xl my-5 text-blue-500">Login</div>
          <div className="mx-4 mt-8 mb-6">
            <div className="mb-4 py-1.5 border border-blue-400 rounded-lg">
              <i style={{"fontSize": "1rem"}} className="iconfont icon-zhanghao mr-2"/>
              <input 
                placeholder="请输入账号"
                className="h-6 w-48 text-base focus:outline-none"
                onChange={this.handleUsernameChange}
              />
            </div>
            <div className="mb-6 py-1.5 border border-blue-400 rounded-lg">
              <i style={{"fontSize": "1rem"}} className="iconfont icon-mima mr-2"/> 
              <input 
                placeholder="请输入密码"
                type="password"
                className="h-6 w-48 focus:outline-none"
                onChange={this.handlePasswordChange}
              />
            </div>
          </div>
          <div className="text-center">
            <button 
              className="h-8 w-32 border-2 border-blue-400 rounded-xl cursor-pointer focus:bg-blue-100"
              onClick={this.handleLogin}
            >
              登 录
            </button>
          </div>
        </div>
      </div>
    )
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }
  handleLogin() {
    const username = this.state.username
    const password = this.state.password
    const { showLoginChange } = this.props
    const data = {
      username,
      password
    }
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
        alert('登录成功！')
        showLoginChange()
      } else {
        alert('密码错误')
      }
    })
  }
}
export default Login