import Link from 'next/link'
import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/style.css"

function Thankyou() {
    return (
        <>
            <div className="thanku">
                <h1>Thank you <span>!</span></h1>
                <p>Our team will contact you soon.</p>
                <Link href="/">Go Home</Link>
            </div>
            <Link href="" className="what_up"><img src="@/assets/img/whatsapp-web-logo-1.png" alt="" /></Link>
        </>
    )
}

export default Thankyou