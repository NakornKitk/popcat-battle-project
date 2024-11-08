import React from 'react'
import ReactLoading from 'react-loading'

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
        <ReactLoading type="spin" color='#fff' />
    </div>
  )
}

export default Loading