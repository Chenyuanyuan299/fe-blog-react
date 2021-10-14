import React, { useState, useEffect } from 'react'
import EditControlUI from './editControlUI'
import axios from 'axios'

const EditControl = (props) => {
  const label = props.location.state.label
  const [ list, setList ] = useState([])
  const [ labelList, setLabelList ] =useState([])
  const getBlogList = () => {
    axios.get('/api/blog/list?isadmin=1')
    .then((res) => {
      const resData  = res.data.data
      setList(resData.listData)
      setLabelList(resData.labelList)
    })
    .catch(() => {
      alert('数据获取失败')
    })
  }
  useEffect(() => {
    getBlogList()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 带有标签的所有博客列表
  const listWithLabel = list.filter((item) => {
    return item.label === label
  })

  const handleToEditControl = (item) => {
    if(item === label) return
    props.history.push({
      pathname:'/editcontrol/'+item,
      state: {
        label: item
      }
    });
  }

  const handleToEditBlog = (index) => {
    props.history.push({
      pathname:'/editblog/'+index, 
      state: {
        data: list[index]
      }
    });
  }

  const handleDeleteBlog = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("确认删除这篇博客？")) {
      const url = '/api/blog/delete?id=' + id
      axios.post(url).then(res => {
        if (res.status === 200 && res.data.errno === 0) {
          getBlogList()
        }
      })
    } else {  
      alert('删除失败')
    }
  }

  return ( 
    <EditControlUI 
      list={label === 'all' ? list : listWithLabel}
      label={label}
      labelList={labelList}
      handleToEditBlog={handleToEditBlog}
      handleDeleteBlog={handleDeleteBlog}
      handleToEditControl={handleToEditControl}
    />
  )
}

export default EditControl
