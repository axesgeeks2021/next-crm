import React from 'react'
import ResetPassword from "./ResetPassword"

function page() {
  return (
    <>
      <ResetPassword />
    </>
  )
}


export function generateMetadata({params}){
    return{
        title: 'Reset Password',
    }
  }

export default page
