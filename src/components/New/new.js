import React, { Component } from 'react'

class New extends Component {
  constructor(props) {
    super(props)
    this.getFuncList = this.getFuncList.bind(this)
  }

  render() {
    return ( 
      <div>
        <div className="fixed flex z-20 w-screen h-16 top-0 left-0 bg-white px-8 border-b border-gray-300">
          <input 
            maxLength="80" 
            placeholder="输入文章标题..." 
            className="focus:outline-none h-full ml-4 text-2xl flex-auto" 
          />
          <div className="flex items-center justify-center">
            <button 
              className="mx-2.5 w-16 h-8 text-center text-white bg-blue-500 rounded-sm
              transition duration-100 hover:bg-opacity-80
            ">
              发布
            </button>
            <i className="iconfont icon-qiehuan mx-2.5 text-xl text-center"></i>
            <img alt="头像" className="mx-2.5 rounded-full bg-red-300 w-9 h-9" />
          </div>
        </div>
        <ul className="fixed flex z-20 w-screen h-8 top-16 left-0 bg-gray-100 border-b border-gray-300">
          {this.getFuncList}
        </ul>
      </div>
    )
  }

  getFuncList() {
    const funcList = ['icon-13biaoti1', 'icon-01jiacu', 'icon-02xieti', 'icon-double-quotes-l',
  'icon-07lianjie', 'icon-tupian', 'icon-daima', 'icon-daimakuai', 'icon-20xiangmufuhao',
  'icon-21bianhaogeshi', 'icon-04shanchuxian'
  ]
  return funcList.map((item, index) => {
    return (
      <li>
        {
          
        }
        <i className="iconfont `${item[index]}`"/>
      </li>
    )
  })
  }
}

export default New