import React from 'react'

const HeaderUI = (props) => {
  return ( 
    <div className="fixed z-20 w-screen h-14 top-0 left-0 shadow bg-white">
      <div 
        className="flex h-full w-48 ml-2 p-1 justify-center items-center cursor-pointer"
        onClick={props.handleClick}
      >
        <img className="mr-4 h-10 w-10 rounded-full" alt="头像"/>
        <span className="font-semibold">{props.realname}</span>
      </div>
      <div className="flex justify-center items-center absolute top-3 right-40">
        <i className="iconfont icon-yanse mr-2"/>
        <div className="align-top">
          <i 
            className="iconfont icon-search absolute top-1 left-10" 
            style={{"fontSize": "1.1rem"}}
          />
          <input
            className="w-52 h-8 border-2 pl-7 rounded-md border-gray-200 focus:outline-none focus:border-blue-200"
            // onChange={handleInputChange}  
          />
        </div>
        <div 
          className="cursor-pointer"
          onClick={props.handleClick}
        >
          <i 
            className="iconfont icon-zhuye pb-1 mr-0.5" 
            style={{"fontSize": "1.1rem"}}
          />
          <span className="text-sm">主页</span>
        </div>
        <div className="cursor-pointer">
          <i 
            className="iconfont icon-my-fill mr-0.5"
            style={{"fontSize": "1.1rem"}}
            />
          <span>contact</span>
        </div>
        <div className="cursor-pointer">
          <i 
            className="iconfont icon-tuichu mr-0.5"
            style={{"fontSize": "1.1rem"}}
            />
          <span onClick={props.handleLogoutClick}>退出</span>
        </div>
      </div>
    </div>
  )
}

export default HeaderUI