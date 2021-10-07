import React, { Component } from 'react'
import store from '../../store/index'
import moment from 'moment'
import axios from 'axios'
import './style.css'
import Header from '../Header/Header'
import Login from '../Login/login'
import User from './user'
import Time from './time'

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      showLogin: false,
      isLogin: false,
      admin: '',
      listCount: 0
    }
    this.handleToNew = this.handleToNew.bind(this)
    this.handleToDetail = this.handleToDetail.bind(this)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.showLoginChange = this.showLoginChange.bind(this)
  }

  getHomeData() {
    axios.get('/api/blog/list')
    .then((res) => {
      const resData  = res.data.data
      const message = resData.message
      this.setState({
        list: [...resData.listData],
        admin: resData.realname,
        listCount: resData.count
      })
      const isLogin = true
      if (message === '已登录') {
        store.dispatch({
          type: 'LOGIN_STATE',
          isLogin
        })
        this.setState({
          isLogin: true
        })
      }
    })
    .catch(() => {
      alert('数据获取失败')
    })
  }
  componentDidMount () {
    this.getHomeData()
  }

  render() {
    return (
      <div>
        { 
          this.state.isLogin ? (
            <Header 
              realname={this.state.admin} 
              history={this.props.history} 
              handleLogout={this.handleLogout}
            />
          ) : ( 
            <div className="fixed z-20 w-screen h-14 top-0 left-0 shadow bg-white">
              <div className="text-center h-full w-28 float-right mr-60">
                <button 
                  className="mt-3 h-8 w-20 border-2 border-blue-400 rounded-xl cursor-pointer focus:bg-blue-100"
                  onClick={this.handleLoginClick}
                >
                  登 录
                </button> 
              </div>
            </div>
          )
        }
        { this.state.showLogin ? (<Login showLoginChange={this.showLoginChange}/>) : null }
        <div className="blog-wrapper flex items-start mt-20 px-4 mx-auto">
          <div className="blog-list flex-auto">
            <ul className="w-full">
              {this.getBlogList()}
            </ul>
          </div>
          <div className="
            blog-admin sticky top-14 w-80 h-auto ml-6 px-4 rounded-lg shadow bg-white overflow-hidden
            transition duration-500 ease-in-out hover:shadow-lg
          "
          >
            { 
              this.state.isLogin === true ? ( 
                <User 
                  realname={this.state.admin} 
                  count={this.state.listCount}
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
                mx-12 my-6 py-1 text-base cursor-pointer text-center rounded-md shadow
                transition duration-500 ease-in-out hover:text-blue-500 transform hover:scale-105
              "
              onClick={this.handleToNew}
            >
              新建博客
            </div>
          </div>
        </div>
      </div>
    )
  }

  getBlogList() {
    return this.state.list.map((item, index) => {
      return ( 
        <li
          className="
            mb-5 p-4 rounded-lg shadow bg-white overflow-hidden cursor-pointer
            transition duration-500 ease-in-out hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-105
          "
          key={item._id}
          onClick={() => {this.handleToDetail(index)}}
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

  handleToNew() {
    if (!this.state.isLogin) {
      this.setState({
        showLogin: true
      })
    } else {
      this.props.history.push('/new');
    }
  }
  handleToDetail(index) {
    this.props.history.push({
      pathname:'/detail/'+index, 
      state: {
        data: this.state.list[index],
        isLogin: this.state.isLogin,
        admin: this.state.admin
      }
    });
  }
  handleLoginClick() {
    this.setState({
      showLogin: true
    })
  }
  showLoginChange() {
    this.setState({
      showLogin: false
    })
    this.getHomeData()
  }
  handleLogout() {
    this.setState({
      isLogin: false
    })
    this.getHomeData()
  }
}

export default Admin