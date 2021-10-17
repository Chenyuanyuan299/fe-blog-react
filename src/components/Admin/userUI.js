import React from "react";
import TimeUI from './timeUI'

const UserUI = (props) => {
  return ( 
    <>
      <div className="pb-8 border-b border-gray-300">
        <img
          src="/img/touxiang.jpg"
          className="mx-auto mt-8 mb-4 w-24 h-24 rounded-full" 
          alt="头像"
        />
        <div className="text-lg text-blue-900 text-center py-4">
          <i 
            className="mr-1 iconfont icon-like-round" 
            style={{"fontSize": "1.2rem"}}  
          />
          <h3 className="inline text-center font-medium my-2 mr-1">
            {props.realname}
          </h3>
          <TimeUI />
        </div>
        <div className="flex w-4/5 mx-auto mb-4"> 
          <div className="text-center flex-1 border-r border-black">
            <h3>{props.count}</h3>
            <h6>文章</h6>
          </div>
          <div className="text-center flex-1">
            <h3>{props.labelCount}</h3>
            <h6>标签</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserUI