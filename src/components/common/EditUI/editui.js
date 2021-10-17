import React, { useState } from 'react'

const EditUI = (props) => {
  const labelList = ['--请选择--', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Nodejs', 'React', 'Vue', 'Browser', 'Network', 'WebPack']
  const [ label, setLabel ] = useState(labelList[0])
  const [ showlabel, setShowLabel ] = useState(false)
  const handleShowLabel = () => {
    setShowLabel(!showlabel)
  }
  const handleChangeLabel = (index) => {
    setLabel(labelList[index])
    props.setLabel(labelList[index])
    setShowLabel(false)
  }
  const getLabelList = () => {
    return labelList.map((item, index) => {
      return ( 
        <li 
          className="w-24 h-8 bg-white leading-8 text-center cursor-pointer"
          style={{"fontSize": "0.9rem"}}
          key={item}
          onClick={() => handleChangeLabel(index)}
        >
          {item}
        </li>
      )
    })
  }
  return ( 
    <div>
      <div className="fixed flex z-30 w-screen h-16 top-0 left-0 bg-white px-8 border-b border-gray-300">
        <input 
          maxLength="80" 
          placeholder="输入文章标题..." 
          className="focus:outline-none h-full ml-4 text-2xl flex-auto"
          onChange={props.titleChange}
          value={ props.title? props.title : '' } 
        />
        <div className="flex items-center justify-center">
          <div className="ml-4 w-28 h-8 rounded border-2 border-blue-200">
            <span className="inline-block h-full w-20 text-sm text-center">
              { props.label ? props.label : label}
            </span>
            <i 
              className="iconfont icon-arrow-down-1-icon"
              style={{"fontSize": "0.8rem"}}
              onClick={handleShowLabel}
            />
            { showlabel ? (            
              <ul className="w-28 h-28 mt-2 overflow-auto rounded shadow-md">
                {getLabelList()}
              </ul>
              ) : null 
            }
          </div>
          <button 
            className="
              mx-2.5 w-16 h-8 text-center text-white bg-blue-500 rounded-sm
              transition duration-100 hover:bg-opacity-80
            "
            onClick={props.handleSendBlog || props.handleUpdateBlog}
          >
            发布
          </button>
          <i className="iconfont icon-qiehuan mx-2.5 text-xl text-center"></i>
          <img
            src="/img/touxiang.jpg"
            alt="头像" 
            className="mx-2.5 rounded-full w-9 h-9" 
          />
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
            onChange={props.contentChange}
            value={ props.content? props.content : ''}
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