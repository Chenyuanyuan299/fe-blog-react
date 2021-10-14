import React, { useState, useEffect } from 'react'
import EditUI from '../common/EditUI/editui'
import axios from 'axios'

const EditBlog = (props) => {
  const data = props.location.state.data
  const id = props.location.state.data._id
  const [ title, setTitle ] = useState('')
  const [ label, setLabel ] = useState('')
  const [ content, setContent ] = useState('')

  useEffect(() => {
    setTitle(data.title)
    setLabel(data.label)
    setContent(data.content)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 使用 axios 请求发送 blog
  const handleUpdateBlog = () => {
    if(!label || label === "--请选择--") {
      alert('请选择标签，这将有助于文章分类')
      return
    }
    if (!title || !content) {
      alert('标题或内容不能为空！')
      return
    }
    const data = { title, label, content }
    const url = '/api/blog/update?id=' + id
    axios.post(url, data).then(res => {
      if (res.status === 200 && res.data.errno === 0) {
        setTimeout(() => {
          props.history.push('/')
        }, 1000)
        alert('更新成功！即将自动返回首页...')
      }
    })
  }
  // 监听标题输入的变化，使用了防抖
  const titleChange = (e) => {
    setTitle(e.target.value)
  }
  // 监听内容输入的变化，使用了节流
  const contentChange = (e) => {
    setContent(e.target.value)
  }

  return (
    <EditUI 
      title={title}
      label={label}
      content={content}
      setLabel={setLabel}
      handleUpdateBlog={handleUpdateBlog}
      titleChange={titleChange}
      contentChange={contentChange}
    />
  )
}

export default EditBlog