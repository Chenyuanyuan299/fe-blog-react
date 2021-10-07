import React from 'react'
import moment from 'moment'
import Header from '../Header/Header'
import Login from '../Login/login'

const Detail = (props) => {
  const state = props.location.state
  let showLogin = false
  const handleLogin = () => {
    console.log(showLogin)
    showLogin = true
  }
  return ( 
    <>
      { 
        state.isLogin ? (
          <Header 
            realname={state.admin} 
            history={props.history} 
          />
        ) : ( 
          <div className="fixed z-20 w-screen h-14 top-0 left-0 shadow bg-white">
            <div className="text-center h-full w-28 float-right mr-60">
              <button 
                className="mt-3 h-8 w-20 border-2 border-blue-400 rounded-xl cursor-pointer focus:bg-blue-100"
                onClick={handleLogin}
              >
                登 录
              </button> 
              { showLogin ? (<Login />) : null }
            </div>
          </div>
        )
      }
      <div className="mt-16 mx-auto text-left">
        <div className="px-52 py-5">
          <div className="text-3xl my-5 ml-6">{state.data.title}</div>
          <div className="px-2 my-1">
            <i 
              className="iconfont icon-my-fill mr-4"
              style={{"fontSize": "1.1rem"}}
            >
              <span className="text-base ml-1">{state.data.author}</span>
            </i>
            <i
              className="iconfont icon-time-fill mr-4"
              style={{"fontSize": "1.1rem"}}
            >
              <span className="text-base ml-1">
                {moment(state.data.createdAt).format('YYYY-MM-DD')}
              </span>
            </i>
            <i
              className="iconfont icon-news-hot-fill mr-4"
              style={{"fontSize": "1.1rem"}}
            >
              <span className="text-base ml-1">标签</span>
            </i>
          </div>
        </div>
        <div className="px-52 py-6">
          <div className="px-6">
            {state.data.content}
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail