import React from 'react'
import ContactUs from "./ContactUs"

function page() {
  return (
    <>
      <ContactUs />
    </>
  )
}


export function generateMetadata({params}){
    return{
        title: 'Contact us',
    }
  }
  

export default page
