import React from 'react'
import Loader from '../components/Loader'

function Loading() {
  return (
    <div style={{width: '100%', height: '100vh',justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
        <Loader />
    </div>
  )
}

export default Loading
