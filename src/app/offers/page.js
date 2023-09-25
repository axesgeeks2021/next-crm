import React from 'react'
import Offer from './Offer'

function page() {
  return (
    <>
      <Offer />
    </>
  )
}

export function generateMetadata({params}){
    return{
        title: 'Offers',
    }
}

export default page
