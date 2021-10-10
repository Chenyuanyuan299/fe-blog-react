import React from 'react'

const EditUI = (props) => {
  return ( 
    <div>
      <div className="fixed flex z-20 w-screen h-16 top-0 left-0 bg-white px-8 border-b border-gray-300">
        <input 
          maxLength="80" 
          placeholder="输入文章标题..." 
          className="focus:outline-none h-full ml-4 text-2xl flex-auto"
          onChange={props.debounce(props.titleChange, 500)} 
        />
        <div className="flex items-center justify-center">
          <button 
            className="
              mx-2.5 w-16 h-8 text-center text-white bg-blue-500 rounded-sm
              transition duration-100 hover:bg-opacity-80
            "
            onClick={props.handleSendBlog}
          >
            发布
          </button>
          <i className="iconfont icon-qiehuan mx-2.5 text-xl text-center"></i>
          <img alt="头像" className="mx-2.5 rounded-full bg-red-300 w-9 h-9" />
        </div>
      </div>
      <div 
        className="
          fixed flex z-20 w-screen h-8 top-16 left-0 bg-gray-100 border-b 
          border-gray-300 px-4 py-1">
        <i className="iconfont icon-13biaoti1" />
        <i className="iconfont icon-01jiacu" />
        <i className="iconfont icon-02xieti" />
        <i className="iconfont icon-double-quotes-l" />
        <i className="iconfont icon-07lianjie" />
        <i className="iconfont icon-tupian" />
        <i className="iconfont icon-daima" />
        <i className="iconfont icon-daimakuai" />
        <i className="iconfont icon-20xiangmufuhao" />
        <i className="iconfont icon-21bianhaogeshi" />
        <i className="iconfont icon-04shanchuxian" />
      </div>
      <div className="blog-body">
        <div className="inline-block overflow-hidden w-1/2 h-full border bg-gray-100">
          <textarea 
            className="blog-edit p-5 h-full w-full bg-gray-100 focus:outline-none"
            onChange={props.debounce(props.contentChange, 500)}
          />
        </div>
        <div className="inline-block w-1/2 h-full border overflow-hidden">
          <div className="blog-preview h-full p-5 pb-7 overflow-auto whitespace-pre-line">{props.content}</div>
        </div>
        <div className="blog-count fixed h-6  w-screen z-20 bottom-0 left-0 bg-white border-t border-gray-300">
          <span className="pl-6">字数: {props.content.replace(/[\s\r\n]/g,"").length}</span>
          <span className="pl-6">行数: {props.content.split('\n').length}</span>
        </div>
      </div>
    </div>
  )
}

export default EditUI