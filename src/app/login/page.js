import React from 'react'
import Login from "./Login"

function page() {
  return (
    <>
      <Login />
    </>
  )
}


export function generateMetadata({params}){
    return{
        title: 'Login',
    }
  }

export default page
