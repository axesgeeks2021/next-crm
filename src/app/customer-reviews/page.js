import React from 'react'
import CustomerReview from './CustomerReviews'

function page() {
  return (
    <>
      <CustomerReview />
    </>
  )
}


export function generateMetadata({params}){
    return{
        title: 'Customer Reviews',
    }
  }
  

export default page
