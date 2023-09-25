"use client"
import React, {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import banner from "../../assets/images/contact_bg.png"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkedAlt, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'


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
                            <span className="in_lefta"><FontAwesomeIcon icon={faEnvelope} /></span>
                            <p className="in_leftr"><b>Email Us</b><br />
                                <span>Our friendly team is here to help.</span><br />
                                <b style={{ fontSize: "16px" }}>For Other</b> - info@e-startupindia.com<br />
                                <b style={{ fontSize: "16px" }}>For Hr</b> - hr@e-startupindia.com<br />
                                <b style={{ fontSize: "16px" }}>For Complain</b> - complain@e-startupindia.com
                            </p>
                        </div>
                        <div className="box_field">
                            <span className="in_lefta"><FontAwesomeIcon icon={faMapMarkedAlt} /></span>
                            <p className="in_leftr"><b>Visit Us</b><br />
                                <span>Come say hello at our office HQ.</span><br />
                                D-56 3rd Floor Sector-2 Noida Uttar Pradesh 201301.
                            </p>
                        </div>
                        <div className="box_field">
                            <span className="in_lefta"><FontAwesomeIcon icon={faPhone} /></span>
                            <p className="in_leftr"><b>Call Us</b><br />
                                <span>Mon-Sat from 10am to 6pm</span><br />
                                8881069069
                            </p>
                        </div>
                        <div className="social_ioc">
                            <ul >
                                <li><a href="https://twitter.com/e_STARTUP_India" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg></a></li>
                                <li><a href="https://www.facebook.com/estartupindia" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a></li>
                                <li><a href=" https://www.instagram.com/estartupindia1/   " target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a></li>
                                <li><a href=" https://www.linkedin.com/company/e-startupindia" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a></li>
                                <li><a href="https://www.youtube.com/channel/UC9Y3XVrwcKSPfyk8lGdWNMA/videos" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg></a></li>
                                <li><a href="https:/t.me/estartupindia" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg></a></li>
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