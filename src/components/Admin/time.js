import React from 'react'

const Time = (props) => {
  const time = new Date()
  const hour = time.getHours()
  let msg = ''
  if (hour >= 0 && hour < 6) {
    msg = '夜深了，早点休息。'
  } else if(hour >= 6 && hour < 12) {
    msg = '早上好！'
  } else if(hour >= 12 && hour < 18) {
    msg = '下午好！'
  } else if(hour >= 18 && hour < 24) {
    msg = '晚上好！'
  }
  return( 
    <span>{msg}</span>
  )
}

export default Time