import React from 'react'
import Register from "./Register"

function page() {
  return (
    <>
      <Register />
    </>
  )
}


export function generateMetadata({params}){
  return{
      title: 'Sign up',
  }
}

export default page
