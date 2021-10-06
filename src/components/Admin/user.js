import React from "react";
import Time from './time'

const User = (props) => {
  return ( 
    <>
      <div className="pb-8 border-b border-gray-300">
        <img className="mx-auto mt-8 mb-4 w-24 h-24 rounded-full bg-red-400" alt="头像"/>
        <div className="text-lg text-blue-900 text-center py-4">
          <i 
            className="mr-1 iconfont icon-like-round" 
            style={{"fontSize": "1.2rem", "cursor": "default"}}  
          />
          <h3 className="inline text-center font-medium my-2 mr-1">
            {this.props.realname}
          </h3>
          <Time />
        </div>
        <div className="flex w-4/5 mx-auto mb-4"> 
          <div className="text-center flex-1 border-r border-black">
            <h3>{this.props.count}</h3>
            <h6>文章</h6>
          </div>
          <div className="text-center flex-1">
            <h3>10</h3>
            <h6>标签</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default User