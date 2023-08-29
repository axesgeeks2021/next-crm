import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import Image from 'next/image'

function page() {
  return (
    <div style={{background: 'white', padding: '5rem 4rem'}}>
        <Image src="/images/newmobile.jpg" width={300} height={300} alt='new mobile'/>
    </div>
  )
}

export default page