import React, { useState, useEffect } from 'react'
import DetailUI from './detailUI' 
import store from '../../store'
import axios from 'axios'

const Detail = (props) => {
  const id = props.location.state.data._id
  const [data, setData] = useState(null);
  const loginState = store.getState().loginState
  const admin = store.getState().admin
  const history = props.history

  useEffect(() => {
    const url = '/api/blog/detail?id=' + id
    axios.get(url).then(res => {
      const resData = res.data.data
      setData(resData)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const [ showLogin, setShowLogin ] = useState(false)
  const handleShowLogin = () => {
    setShowLogin(false)
  }
  return ( 
    <DetailUI 
      data={data}
      loginState={loginState}
      admin={admin}
      showLogin={showLogin}
      setShowLogin={setShowLogin}
      history={history}
      handleShowLogin={handleShowLogin}
    />
  )
}

export default Detail