import React from 'react'
import HeaderUI from './headerUI'
import store from '../../store'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const Header = (props) => {
  const realname = props.realname
  // 返回首页
  const handleClick = () => {
    props.history.push('/');
  }
  // const handleInputChange = (e) => {

  // }
  // 退出登录
  const handleLogoutClick = () => {
    axios.get('/api/user/logout')
      .then(() => {
        const loginState = false
        const admin = ''
        store.dispatch({
          type: 'LOGIN_STATE',
          loginState,
          admin
        })
        if (props.match.path === '/') {
          const { handleLogout } = props
          handleLogout()
        } else {
          props.history.push('/');
        }
      }).catch(err => {
        console.error(err)
      })
  }
  return ( 
    <HeaderUI 
      realname={realname}
      handleClick={handleClick}
      handleLogoutClick={handleLogoutClick}
    />
  )
}

export default withRouter(Header)