import React from 'react'
import PartnerWithUs from "./PartnerWithUs"

function page() {
  return (
    <>
      <PartnerWithUs />
    </>
  )
}


export function generateMetadata({params}){
    return{
        title: 'Partner With Us',
    }
  }

export default page
