import React from 'react'
import About from './About'

function page() {
  return (
    <>
      <About />
    </>
  )
}


export function generateMetadata({params}){
    return{
        title: 'About us',
    }
}


export default page
