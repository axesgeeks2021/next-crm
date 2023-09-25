import React from 'react'
import Career from "./Career"

function page() {
  return (
    <>
      <Career />
    </>
  )
}



export function generateMetadata({params}){
  return{
      title: 'Careers',
  }
}

export default page
