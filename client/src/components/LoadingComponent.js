import React from 'react'
import ReactLoading from 'react-loading'

function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-75">
      <ReactLoading type="spin" color="#fff" height={50} width={50} />
      <p className="mt-4 text-lg text-white font-bold text-center" aria-live="polite">
        Please wait due to delay requests by 50 seconds...
      </p>
    </div>
  )
}

export default Loading