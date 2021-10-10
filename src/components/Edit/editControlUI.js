import React from 'react'
import moment from 'moment'

const EditControlUI = (props) => {
  return ( 
    <div className="max-w-screen-lg mx-auto">
      <ul className="w-full">
        { 
          props.list.map((item, index) => {
            return ( 
              <li
                className="
                  mb-5 p-4 mx-20 rounded-lg shadow bg-white overflow-hidden cursor-pointer
                  transition duration-500 ease-in-out hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-105
                "
                key={item._id}
                onClick={() => {props.handleToEditBlog(index)}}
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

export default EditControlUI