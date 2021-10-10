import React, { useState, useEffect } from 'react'
import moment from 'moment'
import axios from 'axios'

const Edit = (props) => {
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
    console.log(index)
    props.history.push({
      pathname:'/editui/'+index, 
      state: {
        data: list[index]
      }
    });
  }

  return ( 
    <div className="max-w-screen-lg mx-auto">
      <ul className="w-full">
        { 
          list.map((item, index) => {
            return ( 
              <li
                className="
                  mb-5 p-4 mx-20 rounded-lg shadow bg-white overflow-hidden cursor-pointer
                  transition duration-500 ease-in-out hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-105
                "
                key={item._id}
                onClick={() => {handleToEditBlog(index)}}
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
      </ul>
    </div>
  )
}

export default Edit
