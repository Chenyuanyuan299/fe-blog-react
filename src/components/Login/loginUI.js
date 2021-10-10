import React from 'react'

const LoginUI = (props) => {
  return ( 
    <div className="fixed flex inset-0 justify-center items-center z-50 bg-gray-500 bg-opacity-50">
      <div className="bg-white w-80 max-w-full h-80 rounded-lg p-5">
        <div className="text-center my-5">
          <i 
            style={{"fontSize": "1.2rem"}} 
            className="iconfont icon-close float-right mr-4"
            onClick={props.closeLogin}
          />
          <span className="ml-12 text-5xl text-blue-500">Login</span>
        </div>
        <div className="mx-4 mt-8 mb-6">
          <div className="mb-4 py-1.5 border border-blue-400 rounded-lg">
            <i style={{"fontSize": "1rem"}} className="iconfont icon-zhanghao mr-2"/>
            <input 
              placeholder="请输入账号"
              className="h-6 w-48 text-base focus:outline-none"
              onChange={(e) => props.setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6 py-1.5 border border-blue-400 rounded-lg">
            <i style={{"fontSize": "1rem"}} className="iconfont icon-mima mr-2"/> 
            <input 
              placeholder="请输入密码"
              type="password"
              className="h-6 w-48 focus:outline-none"
              onChange={(e) => props.setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="text-center">
          <button 
            className="h-8 w-32 border-2 border-blue-400 rounded-xl cursor-pointer focus:bg-blue-100"
            onClick={props.handleLogin}
          >
            登 录
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginUI