import React, { useState, useEffect } from 'react'
import EditControlUI from './editControlUI'
import axios from 'axios'

const EditControl = (props) => {
  const [ list, setList ] = useState([])
  const getBlogList = () => {
    axios.get('/api/blog/list?isadmin=1')
    .then((res) => {
      const resData  = res.data.data
      setList(resData.listData)
    })
    .catch(() => {
      alert('数据获取失败')
    })
  }
  useEffect(() => {
    getBlogList()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleToEditBlog = (index) => {
    props.history.push({
      pathname:'/editblog/'+index, 
      state: {
        data: list[index]
      }
    });
  }

  return ( 
    <EditControlUI 
      list={list}
      handleToEditBlog={handleToEditBlog}
    />
  )
}

export default EditControl
