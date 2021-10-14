import React from 'react'
import moment from 'moment'

const EditControlUI = (props) => {
  const randomColor = () => {
    let color="rgb(";
    for(let i=0; i<3; i++) {
      color += parseInt(Math.random()*256)+",";
    } 
    color = color.substring(0, color.length-1)+")";
    return color
  }
  return ( 
    <div className="max-w-screen-lg mx-auto">
      <div className="w-auto h-10 mx-20 my-10 py-1 flex  flex-wrap">
        <span
          className="
            inline-block my-1 mx-1.5 px-2 text-sm text-white rounded-md cursor-pointer 
            transition duration-300 ease-in-out transform hover:scale-105
          "
          style={{
            "backgroundColor": randomColor(),
            "--tw-scale-x": (props.label === 'all') ? "1.1" : "",
            "--tw-scale-y": (props.label === 'all') ? "1.1" : ""
          }}
          onClick={() => {props.handleToEditControl('all')}}
        >
          all
        </span>
        {
          props.labelList.map((item) => {
            return (
              <span
                className="
                  inline-block my-1 mx-1.5 px-2 text-sm text-white rounded-md cursor-pointer 
                  transition duration-300 ease-in-out transform hover:scale-105
                "
                key={item}
                style={{
                  "backgroundColor": randomColor(), 
                  "--tw-scale-x": (item === props.label) ? "1.1" : "",
                  "--tw-scale-y": (item === props.label) ? "1.1" : ""
                }}
                onClick={() => {props.handleToEditControl(item)}}
              >
                {item}
              </span>
            )  
          })
        }
      </div>
      <ul className="w-full">
        { 
          props.list.map((item, index) => {
            return ( 
              <li
                className="
                  mb-5 p-4 mx-20 rounded-lg shadow bg-white 
                  overflow-hidden hover:shadow-lg cursor-default
                "
                key={item._id}
              >
                <div 
                  className="
                    w-auto text-center float-right mt-12 border-2 rounded p-0.5 ml-2
                    cursor-pointer hover:bg-blue-100 focus:bg-blue-100
                  "
                  onClick={() => {props.handleDeleteBlog(item._id)}}
                  >
                  <i 
                    className="iconfont icon-delete-fill ml-0"
                    style={{"fontSize": "1.2rem"}}
                  />
                  <span className="ml-1">删除博客</span>
                </div>
                <div 
                  className="
                    w-auto text-center float-right mt-12 border-2 rounded p-0.5
                    cursor-pointer hover:bg-blue-100 focus:bg-blue-100
                  "
                  onClick={() => {props.handleToEditBlog(index)}}
                >
                  <i 
                    className="iconfont icon-edit ml-0"
                    style={{"fontSize": "1.2rem"}}
                  />
                  <span className="ml-1">编辑博客</span>
                </div>
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
                      {item.label}
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