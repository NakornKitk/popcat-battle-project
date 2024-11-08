import React from 'react'
import ReactLoading from 'react-loading'

function Loading() {
  return (
    <div className="h-[600px] flex justify-center items-center">
        <ReactLoading type="spin" color='#fff' />
    </div>
  )
}

export default Loading