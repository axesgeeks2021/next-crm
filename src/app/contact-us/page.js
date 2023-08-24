"use client"
import React, {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import banner from "../../assets/images/contact_bg.png"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function page() {

    const router = useRouter()

    const [loading, setLoading] = useState(false)

    const [text, setText] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: ""
    })

    const { email, message, name, phone, subject } = text

    const handleText = e => {
        if(phone.length > 10){
            alert("number can't be greater than 10 digits")
            return setText({
                phone: mobile.slice(0, -1)
            })
          }
        setText({ ...text, [e.target.name]: e.target.value })
    }

    const fetchContactUs = (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const myHeaders = new Headers();
            myHeaders.append("Cookie", "PHPSESSID=bmgfbspjccp452g2nshfq4bt34");

            const formdata = new FormData();
            formdata.append("page_id", "");
            formdata.append("name", name);
            formdata.append("email", email);
            formdata.append("mobile", phone);
            formdata.append("subject", subject);
            formdata.append("message", message);
            formdata.append("page_name", "contact-us");

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/order/contact-message/", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.status) {
                        return router.push('/thank-you')
                    }
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error)
        }
    }
 
    return (
        <>
            <div className="top_ban">
                <div className="container">
                    <div className="C_2">
                        <h1>Reach  <span>Us</span> </h1>
                        <p>Connect with our team, lets <br />have a discussion</p>
                    </div>
                    <div className="vacancy">
                        <Image src={banner} alt="" />
                    </div>
                </div>
            </div>
            <div className="contact_f">
                <div className="container">
                    <div className="left_con">
                        <div className="box_field">
                            <span className="in_lefta"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                            <p className="in_leftr"><b>Email Us</b><br />
                                <span>Our friendly team is here to help.</span><br />
                                <b style={{ fontSize: "16px" }}>For Other</b> - info@e-startupindia.com<br />
                                <b style={{ fontSize: "16px" }}>For Hr</b> - hr@e-startupindia.com<br />
                                <b style={{ fontSize: "16px" }}>For Complain</b> - complain@e-startupindia.com
                            </p>
                        </div>
                        <div className="box_field">
                            <span className="in_lefta"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                            <p className="in_leftr"><b>Visit Us</b><br />
                                <span>Come say hello at our office HQ.</span><br />
                                D-56 3rd Floor Sector-2 Noida Uttar Pradesh 201301.
                            </p>
                        </div>
                        <div className="box_field">
                            <span className="in_lefta"><i className="fa fa-phone" aria-hidden="true"></i></span>
                            <p className="in_leftr"><b>Call Us</b><br />
                                <span>Mon-Sat from 10am to 6pm</span><br />
                                8881069069
                            </p>
                        </div>
                        <div className="social_ioc">
                            <ul >
                                <li><a href="https://twitter.com/e_STARTUP_India" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://www.facebook.com/estartupindia" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href=" https://www.instagram.com/estartupindia1/   " target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href=" https://www.linkedin.com/company/e-startupindia" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UC9Y3XVrwcKSPfyk8lGdWNMA/videos" target="_blank"><i className="fa fa-youtube"></i></a></li>
                                <li><a href="https:/t.me/estartupindia" target="_blank"><i className="fa fa-telegram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact_form">
                        <h1>Have Something to Say? <br />Lets Connect with us.</h1>
                        <p>Tell us more about yourself and what you're got in mind.</p>
                        <form id="myform" onSubmit={fetchContactUs}>
                            <input type="text" placeholder="Your Name" value={name} onChange={handleText} name="name" style={{ color: 'black' }} required />
                            <input type="email" placeholder="Your Email" value={email} onChange={handleText} name="email" required />
                            <input type="number" placeholder="Your Mobile Number" value={phone.substring(0, 10)} onChange={handleText} name="phone" required />
                            <textarea rows="3" placeholder="Messsage" value={message} onChange={handleText} name='message' style={{ color: 'black' }} required></textarea>
                            <button type='submit'>
                                {
                                    !loading ? <span id="send_t">Submit</span> : <div style={{ display: 'block' }} className='spinner' id="loader1"><span className='bounce1'></span><span className='bounce2'></span><span className='bounce3'></span></div>
                                }
                            </button>
                        </form>
                    </div>
                    <div className='clear'></div>
                </div>
            </div>
        </>
    )
}

export default page