import React, { useState, useEffect } from 'react'
import store from '../../store'
import axios from 'axios'
import './style.css'
import AdminUI from './adminUI'


const Admin = (props) => {
  const [ list, setList ] = useState([])
  const [ isLogin, setIsLogin ] = useState(false)
  const [ showLogin, setShowLogin ] = useState(false)
  const [ admin, setAdmin ] = useState('')
  const [ listCount, setListCount ] = useState(0)
  const history = props.history
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
        const admin = resData.realname
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
    props.history.push('/editcontrol');
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
    <AdminUI 
      list={list}
      isLogin={isLogin}
      showLogin={showLogin}
      listCount={listCount}
      admin={admin}
      history={history}
      handleToNew={handleToNew}
      handleToDetail={handleToDetail}
      handleToEdit={handleToEdit}
      handleLoginClick={handleLoginClick}
      handleShowLogin={handleShowLogin}
      handleLogout={handleLogout}
    />
  )
}

export default Admin