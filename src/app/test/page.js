"use client"
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

function page() {
  return (
    <div className='box'>
      <p className='text'>Hello world form another world</p>
      <style jsx>{`
      div{
        padding: 20px 100px;
        background-color: lime;
      }
      p{
        color: white;
      }

    `}</style>
    </div>
  )
}

export default page
