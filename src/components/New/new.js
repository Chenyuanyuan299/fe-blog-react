import React, { useState } from 'react'
import EditUI from '../common/EditUI/editui'
import axios from 'axios'
import './style.css'

const New = (props) => {
  const [ title, setTitle ] = useState('')
  const [ content, setContent ] = useState('')

  // 使用 axios 请求发送 blog
  const handleSendBlog = () => {
    if (!title || !content) {
      alert('标题或内容不能为空！')
    }
    const data = { title, content }
    axios.post('/api/blog/new', data).then(res => {
      if (res.status === 200 && res.data.errno === 0) {
        setTimeout(() => {
          props.history.push('/')
        }, 1000)
        alert('发布成功！即将自动返回首页...')
      }
    })
  }
  // 监听内容输入的变化，使用了节流
  const contentChange = (e) => {
    setContent(e.target.value)
  }
  // 监听标题输入的变化，使用了防抖
  const titleChange = (e) => {
    setTitle(e.target.value)
  }
  // 防抖
  const debounce = (fn, delay) => {
    let timer
    return function() {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, delay)
    }
  }
  // 节流
  // const throttle = (fn, delay) => {
  //   let flag = true
  //   return function() {
  //     if (!flag) {
  //       return false
  //     }
  //     flag = false
  //     setTimeout(() => {
  //       fn.apply(this, arguments)
  //       flag = true
  //     }, delay)
  //   }
  // }

  return ( 
    <EditUI 
      title={title}
      content={content}
      handleSendBlog={handleSendBlog}
      contentChange={contentChange}
      titleChange={titleChange}
      debounce={debounce}
      // throttle={throttle}
    />
  )
}

export default New