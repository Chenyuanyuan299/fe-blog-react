import React, { useState, useEffect } from 'react'
import store from '../../store'
import moment from 'moment'
import axios from 'axios'
import './style.css'
import Header from '../Header/Header'
import Login from '../Login/login'
import User from './user'
import Time from './time'

const Admin = (props) => {
  const [ list, setList ] = useState([])
  const [ isLogin, setIsLogin ] = useState(false)
  const [ showLogin, setShowLogin ] = useState(false)
  const [ admin, setAdmin ] = useState('')
  const [ listCount, setListCount ] = useState(0)
  const getHomeData = () => {
    axios.get('/api/blog/list')
    .then((res) => {
      const resData  = res.data.data
      const message = resData.message
      setList(resData.listData)
      setAdmin(resData.realname)
      setListCount(resData.count)
      if (message === '已登录') {
        const loginState = true
        store.dispatch({
          type: 'LOGIN_STATE',
          loginState,
          admin
        })
        setIsLogin(true)
      }
    })
    .catch(() => {
      alert('数据获取失败')
    })
  }
  useEffect(() => {
    getHomeData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getBlogList = () => {
    return list.map((item, index) => {
      return ( 
        <li
          className="
            mb-5 p-4 rounded-lg shadow bg-white overflow-hidden cursor-pointer
            transition duration-500 ease-in-out hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-105
          "
          key={item._id}
          onClick={() => {handleToDetail(index)}}
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

  const handleToNew = () => {
    if (!isLogin) {
      setShowLogin(true)
    } else {
      props.history.push('/new');
    }
  }
  const handleToDetail = (index) => {
    props.history.push({
      pathname:'/detail/'+index, 
      state: {
        data: list[index]
      }
    });
  }
  const handleToEdit = () => {
    props.history.push('/edit');
  }
  const handleLoginClick = () => {
    setShowLogin(true)
  }
  const handleShowLogin = () => {
    setShowLogin(false)
    getHomeData()
  }
  const handleLogout = () => {
    setIsLogin(false)
    getHomeData()
  }

  return (
    <div>
      { 
        isLogin ? (
          <Header 
            realname={admin} 
            history={props.history} 
            handleLogout={handleLogout}
          />
        ) : ( 
          <div className="fixed z-20 w-screen h-14 top-0 left-0 shadow bg-white">
            <div className="text-center h-full w-28 float-right mr-60">
              <button 
                className="mt-3 h-8 w-20 border-2 border-blue-400 rounded-xl cursor-pointer focus:bg-blue-100"
                onClick={handleLoginClick}
              >
                登 录
              </button> 
            </div>
          </div>
        )
      }
      { showLogin ? (<Login handleShowLogin={handleShowLogin}/>) : null }
      <div className="blog-wrapper flex items-start mt-20 px-4 mx-auto">
        <div className="blog-list flex-auto">
          <ul className="w-full">
            {getBlogList()}
          </ul>
        </div>
        <div className="
          blog-admin sticky top-14 w-80 h-auto ml-6 px-4 rounded-lg shadow bg-white overflow-hidden
          transition duration-500 ease-in-out hover:shadow-lg
        "
        >
          { 
            isLogin === true ? ( 
              <User 
                realname={admin} 
                count={listCount}
              />
            ) : (
              <div className="text-lg text-blue-900 text-center py-4 border-b border-gray-300">
                <i 
                  className="mr-1 iconfont icon-like-round" 
                  style={{"fontSize": "1.2rem"}}  
                />
                <Time />
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
            onClick={handleToNew}
          >
            新建博客
          </div>
          { 
            isLogin === true ? ( 
              <div 
                className="
                  mx-12 mb-6 mt-4 py-1 text-base cursor-pointer text-center rounded-md shadow
                  transition duration-500 ease-in-out hover:text-blue-500 transform hover:scale-105
                "
                onClick={handleToEdit}
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

export default Admin