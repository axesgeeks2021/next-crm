import React from 'react'
import Payment from "./Payment"

function page() {
  return (
    <>
      <Payment />
    </>
  )
}


export function generateMetadata({params}){
    return{
        title: 'Payment',
    }
  }

export default page
