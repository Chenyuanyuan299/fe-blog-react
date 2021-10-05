import React, { Component } from 'react'
import store from '../../store/index'
import moment from 'moment'
import axios from 'axios'
import './style.css'
import Header from '../Header/Header'
import Login from '../Login/login'

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      showLogin: false,
      isLogin: false
    }
    this.handleToNew = this.handleToNew.bind(this)
  }

  componentDidMount () {
    axios.get('/api/blog/list')
    .then((res) => {
      const resData  = res.data
      const message = resData.message
      this.setState({
        list: [...resData.data]
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

  render() {
    return (
      <div>
        <Header></Header>
        { this.state.showLogin ? (<Login history={this.props.history} />) : null }
        <div className="blog-wrapper flex items-start mt-20 px-4 mx-auto">
          <div className="blog-list flex-auto">
            <ul className="w-full">
              {this.getBlogList()}
            </ul>
          </div>
          <div className="
            blog-admin sticky top-14 w-80 h-auto ml-6 px-4 rounded-lg shadow bg-white overflow-hidden
            transition duration-500 ease-in-out hover:shadow-lg
          ">
            <div className="pb-8 border-b border-gray-300">
              <img className="mx-auto mt-8 mb-4 w-24 h-24 rounded-full bg-red-400" alt="头像"/>
              <h3 className="text-center font-medium my-2">username</h3>
              <div className="flex w-4/5 mx-auto mb-4"> 
                <div className="text-center flex-1 border-r border-black">
                  <h3>8</h3>
                  <h6>文章</h6>
                </div>
                <div className="text-center flex-1">
                  <h3>10</h3>
                  <h6>标签</h6>
                </div>
              </div>
            </div>
            <div className="my-3">
              <i className="iconfont icon-news-hot-fill" />
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
    return this.state.list.map((item) => {
      return ( 
        <li
          className="
            mb-5 p-4 rounded-lg shadow bg-white overflow-hidden cursor-pointer
            transition duration-500 ease-in-out hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-105
          "
          key={item._id}
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
                {moment(item.createtime).format('YYYY-MM-DD')}
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
    console.log(this.state.isLogin)
    if (!this.state.isLogin) {
      this.setState({
        showLogin: true
      })
    } else {
      this.props.history.push('/new');
    }
  }
}

export default Admin