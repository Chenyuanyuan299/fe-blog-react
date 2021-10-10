import React from 'react'
import UserUI from './userUI'
import TimeUI from './timeUI'
import Header from '../Header/header'
import Login from '../Login/login'
import moment from 'moment'

const adminUI = (props) => {
  const getBlogList = () => {
    return props.list.map((item, index) => {
      return ( 
        <li
          className="
            mb-5 p-4 rounded-lg shadow bg-white overflow-hidden cursor-pointer
            transition duration-500 ease-in-out hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-105
          "
          key={item._id}
          onClick={() => {props.handleToDetail(index)}}
        >
          <div className="blog-title inline-block mx-3 relative py-1">
            {item.title}
          </div>
          <div className="px-2 my-1">
            <i 
              className="iconfont icon-my-fill mr-4"
              style={{"fontSize": "1.1rem"}}
            >
              <span className="text-base ml-1">{item.author}</span>
            </i>
            <i
              className="iconfont icon-time-fill mr-4"
              style={{"fontSize": "1.1rem"}}
            >
              <span
                className="text-base ml-1"
              >
                {moment(item.createdAt).format('YYYY-MM-DD')}
              </span>
            </i>
            <i
              className="iconfont icon-news-hot-fill mr-4"
              style={{"fontSize": "1.1rem"}}
            >
              <span
                className="text-base ml-1"
              >
                标签
              </span>
            </i>
          </div>
        </li>
      )
    })
  }
  
  return (
    <div>
      { 
        props.isLogin ? (
          <Header 
            realname={props.admin} 
            history={props.history} 
            handleLogout={props.handleLogout}
          />
        ) : ( 
          <div className="fixed z-20 w-screen h-14 top-0 left-0 shadow bg-white">
            <div className="text-center h-full w-28 float-right mr-60">
              <button 
                className="mt-3 h-8 w-20 border-2 border-blue-400 rounded-xl cursor-pointer focus:bg-blue-100"
                onClick={props.handleLoginClick}
              >
                登 录
              </button> 
            </div>
          </div>
        )
      }
      { props.showLogin ? (<Login handleShowLogin={props.handleShowLogin}/>) : null }
      <div className="blog-wrapper flex items-start mt-20 px-4 mx-auto">
        <div className="blog-list flex-auto">
          <ul className="w-full">
            {getBlogList()}
          </ul>
        </div>
        <div className="
          blog-admin sticky top-16 w-80 h-auto ml-6 px-4 rounded-lg shadow bg-white overflow-hidden
          transition duration-500 ease-in-out hover:shadow-lg
        "
        >
          { 
            props.isLogin === true ? ( 
              <UserUI 
                realname={props.admin} 
                count={props.listCount}
              />
            ) : (
              <div className="text-lg text-blue-900 text-center py-4 border-b border-gray-300">
                <i 
                  className="mr-1 iconfont icon-like-round" 
                  style={{"fontSize": "1.2rem"}}  
                />
                <TimeUI />
              </div>
            )
          }
          <div className="my-3">
            <i 
              className="iconfont icon-fenlei" 
              style={{"fontSize": "1.1rem"}}  
            />
            <span className="ml-1">分类</span>
          </div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <div 
            className="
              mx-12 mt-6 mb-4 py-1 text-base cursor-pointer text-center rounded-md shadow
              transition duration-500 ease-in-out hover:text-blue-500 transform hover:scale-105
            "
            onClick={props.handleToNew}
          >
            新建博客
          </div>
          { 
            props.isLogin === true ? ( 
              <div 
                className="
                  mx-12 mb-6 mt-4 py-1 text-base cursor-pointer text-center rounded-md shadow
                  transition duration-500 ease-in-out hover:text-blue-500 transform hover:scale-105
                "
                onClick={props.handleToEdit}
              >
                编辑我的博客
              </div>
            ) : null
          }
        </div>
      </div>
    </div>
  )
}

export default adminUI