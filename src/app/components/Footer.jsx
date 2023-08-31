"use client"
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';


// images
import ani from "../../assets/images/ani.webp"
import buss from "../../assets/images/buss.webp"
import out from "../../assets/images/out.webp"
import htds from "../../assets/images/htds.webp"
import yahoo from "../../assets/images/yahoo.webp"
import nds from "../../assets/images/nds.webp"
import indi from "../../assets/images/indi.webp"
import inn from "../../assets/images/inn.webp"
import comodo from "../../assets/images/comodo.png"
import logo from "../../assets/images/logo.png"
// import mobileIcon from "../../assets/images/mobile.webp"
import google from "../../assets/images/google-play-icon.webp"
import gIcon from "../../assets/images/g_icon.webp"
import googleIcon from "../../assets/images/google.webp"
import axis from "../../assets/images/axis.webp"
import neo from "../../assets/images/neo.webp"
import icici from "../../assets/images/icici.webp"
import cii from "../../assets/images/cii.webp"
import startup from "../../assets/images/startup.webp"
import razorypay from "../../assets/images/razorpay.webp"

// import mobileIcon from "/images/mobile.webp"


import { AiOutlineStar, AiFillStar } from "react-icons/ai"

// import GoogleTag from "../utils/GoogleTag"
// import FacebookTag from "../utils/FacebookTag"
// import PushNotification from "../utils/PushNotification"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronRight, faMapMarker, faThumbsUp, faLock, faLaptop, faMoneyBill, faTimes, faMapMarked } from "@fortawesome/free-solid-svg-icons"

function Footer() {

    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [popEventModal, setPopEventModal] = useState(false)
    const [functionRun, setFunctionRun] = useState(true)
    const [ratingNumber, setRatingNumber] = useState(0)
    const [buttonLoading, setButtonLoading] = useState(false)


    const [check, setCheck] = useState(false)

    const [text, setText] = useState({
        name: '',
        mobile: '',
        email: '',
        message: '',
        subject: ""
    })

    const { email, mobile, name, message, subject } = text

    const handleText = e => {
        setText({ ...text, [e.target.name]: e.target.value })
    }

    const handlePopEventModal = () => {
        setPopEventModal(true)
        setFunctionRun(false)
    }


    const sendFeedback = (e) => {
        e.preventDefault()
        if (ratingNumber < 1) {
            return toast.warn('Rating can not be zero')
        }
        try {
            setButtonLoading(true)
            const user = JSON.parse(localStorage.getItem('auth'))
            var myHeaders = new Headers();
            myHeaders.append("Cookie", "PHPSESSID=bmgfbspjccp452g2nshfq4bt34");

            var formdata = new FormData();
            formdata.append("user_id", user?.user_id);
            formdata.append("subject", subject);
            formdata.append("message", message);
            formdata.append("rating", ratingNumber);
            formdata.append("order_id", "");
            formdata.append("name", name);
            formdata.append("email", email);
            formdata.append("mobile", mobile);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/order/feedback/", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.status) {
                        setButtonLoading(false)
                        setText({
                            email: "",
                            message: '',
                            mobile: '',
                            name: "",
                            subject: '',

                        })
                        setRatingNumber(0)
                        setShowModal(false)
                        window.scrollTo(0, 0)
                        return toast.success("Thank you for rating us.")
                    }
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error)
        }
    }

    const fetchContactUs = (e) => {
        e.preventDefault()

        if (name === "") {
            toast('Please fill all the fields!')
            return
        }

        try {
            setButtonLoading(true)
            const myHeaders = new Headers();
            myHeaders.append("Cookie", "PHPSESSID=bmgfbspjccp452g2nshfq4bt34");

            const formdata = new FormData();
            formdata.append("page_id", "");
            formdata.append("name", name);
            formdata.append("email", email);
            formdata.append("mobile", mobile);
            formdata.append("subject", "");
            formdata.append("message", message);
            formdata.append("page_name", "");

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
                        setButtonLoading(false)
                        setText({
                            name: '',
                            email: '',
                            mobile: ''
                        })
                        setPopEventModal(false)
                        return navigate('/thank-you')
                    }
                    // console.log(result)
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error)
        }
    }


    const talkChat = () => {
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/57453277f633cc8d73fffb0a/default';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    }

    useEffect(() => {
        // function handleResize() {
        // if(window.innerWidth > 500){
        // return talkChat()
        // }
        // }
        // const script1 = document.createElement('script')
        // script1.src = GoogleTag

        // const script2 = document.createElement('script')
        // script2.src = FacebookTag

        // const script3 = document.createElement('script')
        // script3.src = PushNotification

        // window.addEventListener('resize', handleResize)
        talkChat()

        // return window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            
            <div className="footer_strip">
                <div className="inner_footer_s">
                    <p><a href="tel:+918881069069"><i className="fa fa-phone" aria-hidden="true"></i><br />Call</a></p>
                    <p id="open_in_m" onClick={() => setPopEventModal(!popEventModal)}><i className="fa fa-user-o" aria-hidden="true"></i><br />Enquiry</p>
                    <p><a href="https://tawk.to/chat/57453277f633cc8d73fffb0a/default"><i className="fa fa-commenting"
                        aria-hidden="true"></i><br /> Live Chat</a></p>
                    <p><a href="https://wa.me/+917065004032"><i className="fa fa-whatsapp" aria-hidden="true"></i><br />Whatsapp</a>
                    </p>
                </div>
            </div>
            <div className="popevent" onMouseEnter={functionRun ? handlePopEventModal : null}></div>
            <div className="overlay_footer" id="layout" style={{ display: popEventModal ? 'block' : '' }}>
                <div className="popup_footer">

                    <i className="fa fa-times close" aria-hidden="true" onClick={() => setPopEventModal(false)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </i>
                    <form onSubmit={fetchContactUs}>
                        <h2>Contact Support</h2>
                        <div className="box_a"><label htmlFor="name">Name</label>
                            <input type="text" required id="name" name='name' onChange={handleText} value={name} />
                        </div>
                        <div className="box_a"><label htmlFor="mobile">Mobile</label>
                            <input type="tel" required id='mobile' pattern="\d{10}" name='mobile' onChange={handleText} value={mobile} />
                        </div>
                        <div className="box_a"><label htmlFor="email">Email</label>
                            <input type="email" required name='email' id='email' onChange={handleText} value={email} />
                        </div>
                        <div className="box_a">
                            <button type='submit' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {
                                    !buttonLoading ? <span id="send_t" style={{ fontSize: '1rem' }}>Submit</span> : <div style={{ display: 'block' }} className='spinner' id="loader1"><span className='bounce1'></span><span className='bounce2'></span><span className='bounce3'></span></div>
                                }
                            </button>
                        </div>
                    </form>
                    <div className="form_right">
                        <h2>Facing Trouble Filing Registration Form?</h2>
                    </div>
                </div>
            </div>
            <br />
            <div className="other_link">
                <a href="https://wa.me/+917065004032" className="what_up"><img
                    src="http://e-startup.co/image/whatsapp-web-logo-1.png" alt="" /></a>

                {/* <a href="tel:+918881069069" className="mobile-phone"><i className="fa fa-phone" aria-hidden="true"></i></a> */}
            </div>
            <h3 className="custom-text" style={{ marginTop: "2%" }}>5,00,000 HAPPY CUSTOMERS AND SERVING…</h3>
            <div className="review-rate reviewr">
                <i className="fa fa-star fa-2x" aria-hidden="true"></i>
                <i className="fa fa-star fa-2x" aria-hidden="true"></i>
                <i className="fa fa-star fa-2x" aria-hidden="true"></i>
                <i className="fa fa-star fa-2x" aria-hidden="true"></i>
                <i className="fa fa-star-half-empty fa-2x" aria-hidden="true"></i>
                <Image src={gIcon} className="img-responsive" alt='google icon' style={{ display: "inline-block", marginLeft: "1%", width: "38px", marginTop: "-18px" }} />
            </div>
            <h3 className="text-center">Check out our <Link href="/customer-reviews"
                style={{ borderBottom: "2px solid #fcc813" }} onClick={() => window.scrollTo(0, 0)}>Customer Reviews</Link></h3>
            <div className="partners">
                <div className="marginB20" style={{ marginTop: "35px" }}>
                    <div className="container"
                        style={{ background: "linear-gradient(100deg, rgba(252,200,19,1) 16%, rgba(255,231,93,1) 39%)", borderRadius: "25px", padding: "30px" }}>
                        <div className="row marginT20">
                            <div className="col-sm-4 col-xs-12 play_store" style={{ margin: "auto" }}>
                                <Image src="/images/newmobile.jpg" height={350} width={350} alt='mobile icon'/>
                            </div>
                            <div className="col-sm-8 col-xs-12 marginT20 app-check">
                                <h3 className="custom-text" style={{ marginBottom: "10px" }}><strong>GET E-STARTUP INDIA IN YOUR <br />
                                    pocket!</strong></h3>
                                <p className="text-center " style={{ fontSize: "18px", paddingTop: "32px", color: "#000" }}>
                                    Download our free Android App and get realtime update on your order status.<br />
                                    Easily connect with our professionals handling your order over chat &amp; mobile.<br />
                                    Never miss business compliances due date with advance notifications.
                                </p>
                                <p className="text-center marginT20"><a
                                    href="https://play.google.com/store/apps/details?id=com.e_startupindia.e_startup"
                                    target="_blank" className="marginT20"><Image src={google} /></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="partners">
                <div className="">
                    <div className="container">
                        <h3 className="custom-text"><span>Why Choose Us</span></h3>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="partners-box">
                                    <Image src={googleIcon} alt="" />
                                    <p >Serving business owners with an Average 4.8+ Google Rating. </p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="partners-box">
                                    <Image src={axis} alt="" />
                                    <p >Trusted by Axis bank to cater its clients all licensing &amp; compliance needs.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="partners-box">
                                    <Image src={neo} alt="" />
                                    <p >Providing lending solutions for business needs with NeoGrowth. </p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="partners-box">
                                    <Image src={icici} alt="" />
                                    <p >Providing business banking solutions in association with ICICI Bank.</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="partners-box">
                                    <Image src={cii} alt="" />
                                    <p > E-startupindia is a Proudly Member of Confederation of Indian Industry.The CII
                                        is a premier business association in India which works to create an environment.</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="partners-box">
                                    <Image src={startup} alt="" />
                                    <p >E-Startup India is duly certified under GOI's Startup India scheme and is
                                        renowned for our tech-driven solutions for business &amp; legal services requirements
                                        for MSMEs.</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="partners-box">
                                    <Image src={razorypay} alt="" />
                                    <p >E-Startup India partnered with Razorpay to empower new SME businesses to collect
                                        online payments and provide neo banking and corporate card solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ background: "linear-gradient(100deg, rgba(252,200,19,1) 16%, rgba(255,231,93,1) 39%)" }}>
                <div className="inmedia">
                    <div className="container">
                        <h2 className="custom-text"><span>IN THE MEDIA</span></h2>
                        <ul style={{ direction: "ltr" }}>
                            <li><Image src={ani} /></li>
                            <li><Image src={buss} /></li>
                            <li><Image src={out} /></li>
                            <li><Image src={htds} /></li>
                            <li><Image src={yahoo} /></li>
                            <li><Image src={nds} /></li>
                            <li><Image src={indi} /></li>
                            <li><Image src={inn} /></li>
                        </ul>
                    </div>
                </div>
                <section className="contact-page">
                    <div className="container">
                        <div className="row" >
                            <div className="contact-box">
                                <h2 className="custom-text"><span>CONNECT WITH US</span></h2>

                                <ul className="socala-icon" style={{ paddingTop: "10px" }}>
                                    <li><a href="https://twitter.com/e_STARTUP_India" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>                                        </a></li>
                                    <li><a href="https://www.facebook.com/estartupindia" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" color='red'><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                                    </a></li>
                                    <li><a href=" https://www.instagram.com/estartupindia1/   " target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                    </a></li>
                                    <li><a href=" https://www.linkedin.com/company/e-startupindia" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                                    </a></li>
                                    <li><a href="https://www.youtube.com/channel/UC9Y3XVrwcKSPfyk8lGdWNMA/videos"
                                        target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
                                    </a></li>
                                    <li><a href="https://t.me/estartupindia" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" /></svg>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                </footer>
            </div>
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 newfooter">
                            <div className="flogo">
                                <Image src={logo} />
                            </div>
                            <li><Link href="/about-us" onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faChevronRight} /> About Us</Link></li>
                            <li><Link href="/customer-reviews" onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faChevronRight} /> Customer Reviews</Link></li>
                            <li><Link href="/careers" onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faChevronRight} /> Career</Link></li>
                            <li><Link href="/payment" onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faChevronRight} /> Pay Us</Link></li>
                        </div>
                        <div className="col-sm-6 col-md-3 newfooter">
                            <h4>Our Popular Services</h4>
                            <li><Link href="/private-limited-company.html" onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faChevronRight} /> Private Limited Company</Link></li>
                            <li><Link href="/check-new.html" onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faChevronRight} /> Trademark</Link></li>
                            <li><Link href="/gst-registration.html" onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faChevronRight} /> GST Registration</Link></li>
                            <li><Link href="/iso-certification.html" onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faChevronRight} /> ISO Certification</Link></li>
                        </div>
                        <div className="col-sm-6 col-md-3 newfooter">
                            <h4>Terms &amp; Policy</h4>
                            <li><Link href="/terms-and-conditions" onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faChevronRight} /> Terms &amp; Conditions</Link></li>
                            <li><Link href="/privacy-policy" onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faChevronRight} /> Privacy Policy</Link></li>
                            <li><Link href="/refund-policy" onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faChevronRight} /> Refund Policy</Link></li>
                            <li><Link href="/confidentiality-policy" onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faChevronRight} /> Confidentiality Policy</Link></li>
                        </div>
                        <div className="col-sm-6 col-md-3 newfooter">
                            <h4>Connect With Us</h4>
                            <li><Link href="https://tawk.to/d344b4c38bff93fb03d7d55670c33b51099cfee7/popout/default/?$_tawk_popout=true&$_tawk_sk=574532e43fee027ee65c078e&$_tawk_tk=ceb8f39a7ebd67f7c068a77c90b3c336&v=488" onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faChevronRight} /> Live Chat</Link></li>
                            <li><Link href="/partner-with-us" onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faChevronRight} /> Partner with us</Link></li>
                            <li><Link href="/contact-us" onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faChevronRight} /> Contact Us</Link></li>
                            <li id="open_popup" style={{ color: "#ede9e9", cursor: 'pointer', fontWeight: '300' }} onClick={() => setShowModal(true)}><FontAwesomeIcon icon={faChevronRight} /> Suggestion and Feedback</li>
                        </div>
                    </div>
                    <div className="container local text-center">
                        <h4>Our Offices</h4>
                        <ul className="text-center" style={{ marginTop: "-30px", marginBottom: "10px" }}>
                            <li className="text-center"><a href="https://goo.gl/maps/r96HwatLJjMc5Usf9" target="blank"><FontAwesomeIcon icon={faMapMarker} /> New Delhi</a></li>
                            <li className="text-center"><a href="https://goo.gl/maps/qwE864bXdKDFQ9qQ7" target="blank"><FontAwesomeIcon icon={faMapMarker} /> Noida</a></li>
                            <li className="text-center"><a
                                href="https://www.google.com/maps/search/+A-004,+Lotus+Park,+Azde+Gaon,+Dombivali+(East),+Mumbai,+Maharashtra+%E2%80%93+421203/@19.2117401,73.0996373,17z/data=!3m1!4b1"
                                target="blank"><FontAwesomeIcon icon={faMapMarker} /> Mumbai</a></li>
                            <li className="text-center"><a
                                href="https://maps.google.com/?q=1200 A-302B, Shankar Towers, Above Allahabad Bank, 3rd Floor,Opposite IDPL Factory, Balanagar, Hyderabad, Telangana 500037"
                                target="blank"><FontAwesomeIcon icon={faMapMarker} /> Hyderabad</a></li>
                            <li className="text-center"><a
                                href="https://maps.google.com/?q=1200 No.20, 1st floor, 3rd cross, Jambu Nagar, Coconut Avenue, Jambusavari Dinne, J.P.Nagar 8th phase,&nbsp;Bangalore-560 076&nbsp;"
                                target="blank"><FontAwesomeIcon icon={faMapMarker} /> Banglore</a></li>
                            <li className="text-center"><a
                                href="https://maps.google.com/?q=1200 Kay Enn Business and Industrial Consultants Near shah foods sidco Industrial estate ph.II khunmoh Srinagar Jammu &amp; Kashmir 191104"
                                target="blank"><FontAwesomeIcon icon={faMapMarker} /> Srinagar</a></li>
                            <li className="text-center"><a
                                href="https://maps.google.com/?q=1200 L.P.G Inshore Solution office No, B-115, Kalpataru plaza, 1st floor, Beside Bank of India, 224 Bhawani peth, opp, Ramoshi Gate, pune Maharashtra- 411002"
                                target="blank"><FontAwesomeIcon icon={faMapMarker} /> Pune</a></li>
                            <li className="text-center"><a
                                href="https://maps.google.com/?q=1200 Quantum C/o SWCEI&nbsp;Computer&nbsp;Education Cent 11, Nandalal Basu Sarani College Para Siliguri Dist. Darjeeling West Bengal 734001"
                                target="blank"><FontAwesomeIcon icon={faMapMarker} /> Siliguri</a></li>
                            <li className="text-center"><a href="https://g.page/E-StartupIndia?share" target="blank"><FontAwesomeIcon icon={faMapMarker} /> Noida</a></li>
                            <li className="text-center"><a href="https://goo.gl/maps/4oZt2NpVfVPDcwzz7" target="blank"><FontAwesomeIcon icon={faMapMarker} /> Ahmedabad</a></li>
                        </ul>
                    </div>
                    <section className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="media">
                                        <div className="media-left">
                                            <FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '60px', color: '#fce113', marginRight: '15px' }} />
                                            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="media-heading text-center">ASSURED CUSTOMER SATISFACTION</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="media">
                                        <div className="media-left">
                                            <FontAwesomeIcon icon={faLock} style={{ fontSize: '60px', color: '#fce113', marginRight: '15px' }} />
                                        </div>
                                        <div className="media-body">
                                            <h5 className="media-heading text-center">CLIENT DATA CONFIDENTIALITY</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="media">
                                        <div className="media-left">
                                            <FontAwesomeIcon icon={faMoneyBill} style={{ fontSize: '60px', color: '#fce113', marginRight: '15px' }} />
                                            {/* <i className="fa fa-money" aria-hidden="true"></i> */}
                                        </div>
                                        <div className="media-body">
                                            <h5 className="media-heading text-center">NO HIDDEN <br />FEE</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="media">
                                        <div className="media-left">
                                            <FontAwesomeIcon icon={faLaptop} style={{ fontSize: '60px', color: '#fce113', marginRight: '15px' }} />
                                        </div>
                                        <div className="media-body">
                                            <h5 className="media-heading text-center">SECURE ONLINE PAYMENT</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="footer-icons">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="0.81em" viewBox="0 0 576 512"><path d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z" /></svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="80"
                                zoomAndPan="magnify" viewBox="0 0 60 30.000001" height="40" preserveAspectRatio="xMidYMid meet"
                                version="1.0">
                                <defs>
                                    <clipPath id="482462b9df">
                                        <path d="M 9.558594 7 L 48.027344 7 L 48.027344 22 L 9.558594 22 Z M 9.558594 7 "
                                            clipRule="nonzero" />
                                    </clipPath>
                                    <clipPath id="7389632a45">
                                        <path
                                            d="M 9.558594 23 L 48.027344 23 L 48.027344 28.804688 L 9.558594 28.804688 Z M 9.558594 23 "
                                            clipRule="nonzero" />
                                    </clipPath>
                                    <clipPath id="8436c8a106">
                                        <path d="M 9.558594 0.5 L 48.027344 0.5 L 48.027344 6 L 9.558594 6 Z M 9.558594 0.5 "
                                            clipRule="nonzero" />
                                    </clipPath>
                                </defs>
                                <path fill="#646464"
                                    d="M 17.226562 12.882812 L 18.972656 12.882812 L 18.972656 14.652344 L 17.226562 14.652344 Z M 17.226562 12.882812 "
                                    fillOpacity="1" fillRule="nonzero" />
                                <g clipPath="url(#482462b9df)">
                                    <path fill="#646464"
                                        d="M 9.582031 21.726562 L 48.003906 21.726562 L 48.003906 7.574219 L 9.582031 7.574219 Z M 36.199219 12.5625 C 36.117188 12.472656 36.054688 12.371094 36.011719 12.253906 C 35.96875 12.140625 35.953125 12.019531 35.960938 11.898438 C 35.96875 11.777344 36 11.660156 36.054688 11.550781 C 36.109375 11.441406 36.183594 11.347656 36.273438 11.269531 C 36.367188 11.191406 36.472656 11.132812 36.589844 11.101562 C 36.707031 11.066406 36.824219 11.058594 36.945312 11.074219 C 37.0625 11.089844 37.175781 11.128906 37.28125 11.191406 C 37.382812 11.253906 37.472656 11.335938 37.542969 11.433594 L 39.058594 13.269531 L 40.566406 11.433594 C 40.636719 11.335938 40.722656 11.253906 40.828125 11.191406 C 40.933594 11.128906 41.042969 11.089844 41.164062 11.074219 C 41.285156 11.058594 41.402344 11.066406 41.519531 11.101562 C 41.636719 11.132812 41.742188 11.191406 41.832031 11.269531 C 41.925781 11.347656 42 11.441406 42.054688 11.550781 C 42.109375 11.660156 42.140625 11.777344 42.148438 11.898438 C 42.15625 12.019531 42.136719 12.140625 42.097656 12.253906 C 42.054688 12.371094 41.992188 12.472656 41.910156 12.5625 L 40.195312 14.652344 L 41.910156 16.742188 C 42.0625 16.929688 42.128906 17.144531 42.109375 17.390625 C 42.085938 17.632812 41.984375 17.832031 41.796875 17.988281 C 41.636719 18.121094 41.449219 18.191406 41.242188 18.191406 C 40.964844 18.191406 40.742188 18.085938 40.566406 17.867188 L 39.058594 16.035156 L 37.542969 17.867188 C 37.371094 18.085938 37.148438 18.191406 36.875 18.191406 C 36.664062 18.191406 36.476562 18.125 36.3125 17.988281 C 36.125 17.832031 36.023438 17.632812 36 17.390625 C 35.980469 17.144531 36.046875 16.929688 36.199219 16.742188 L 37.914062 14.652344 Z M 29.453125 12 C 29.453125 11.753906 29.539062 11.546875 29.707031 11.371094 C 29.878906 11.199219 30.085938 11.113281 30.324219 11.113281 L 33.777344 11.113281 C 34.019531 11.113281 34.226562 11.199219 34.398438 11.371094 C 34.566406 11.546875 34.652344 11.753906 34.652344 12 C 34.652344 12.242188 34.566406 12.449219 34.398438 12.625 C 34.226562 12.796875 34.019531 12.882812 33.777344 12.882812 L 31.199219 12.882812 L 31.199219 13.765625 L 32.074219 13.765625 C 32.3125 13.765625 32.519531 13.855469 32.691406 14.027344 C 32.859375 14.199219 32.945312 14.40625 32.945312 14.652344 C 32.945312 14.894531 32.859375 15.105469 32.691406 15.277344 C 32.519531 15.449219 32.3125 15.535156 32.074219 15.535156 L 31.199219 15.535156 L 31.199219 16.421875 L 33.777344 16.421875 C 34.019531 16.421875 34.226562 16.507812 34.398438 16.679688 C 34.566406 16.851562 34.652344 17.0625 34.652344 17.304688 C 34.652344 17.550781 34.566406 17.757812 34.398438 17.929688 C 34.226562 18.105469 34.019531 18.191406 33.777344 18.191406 L 30.324219 18.191406 C 30.085938 18.191406 29.878906 18.105469 29.707031 17.929688 C 29.539062 17.757812 29.453125 17.550781 29.453125 17.304688 Z M 22.464844 12 C 22.464844 11.820312 22.511719 11.652344 22.609375 11.503906 C 22.703125 11.351562 22.835938 11.242188 23 11.175781 C 23.164062 11.105469 23.332031 11.089844 23.503906 11.125 C 23.679688 11.160156 23.828125 11.242188 23.953125 11.371094 L 25.085938 12.511719 L 26.214844 11.371094 C 26.339844 11.242188 26.488281 11.164062 26.660156 11.128906 C 26.835938 11.09375 27.003906 11.109375 27.167969 11.175781 C 27.332031 11.246094 27.460938 11.355469 27.558594 11.503906 C 27.660156 11.652344 27.707031 11.820312 27.707031 12 L 27.707031 17.304688 C 27.707031 17.550781 27.621094 17.757812 27.449219 17.929688 C 27.28125 18.105469 27.074219 18.191406 26.832031 18.191406 C 26.59375 18.191406 26.386719 18.105469 26.214844 17.929688 C 26.046875 17.757812 25.960938 17.550781 25.960938 17.304688 L 25.960938 14.136719 L 25.699219 14.394531 C 25.527344 14.566406 25.324219 14.65625 25.082031 14.65625 C 24.839844 14.65625 24.636719 14.566406 24.46875 14.394531 L 24.214844 14.136719 L 24.214844 17.304688 C 24.214844 17.550781 24.128906 17.757812 23.957031 17.929688 C 23.785156 18.105469 23.582031 18.191406 23.339844 18.191406 C 23.097656 18.191406 22.894531 18.105469 22.722656 17.929688 C 22.550781 17.757812 22.464844 17.550781 22.464844 17.304688 Z M 15.480469 12 C 15.480469 11.753906 15.566406 11.546875 15.738281 11.371094 C 15.90625 11.199219 16.113281 11.113281 16.355469 11.113281 L 19.847656 11.113281 C 20.089844 11.113281 20.292969 11.199219 20.464844 11.371094 C 20.636719 11.546875 20.71875 11.753906 20.71875 12 L 20.71875 17.304688 C 20.71875 17.550781 20.636719 17.757812 20.464844 17.929688 C 20.292969 18.105469 20.089844 18.191406 19.847656 18.191406 C 19.605469 18.191406 19.398438 18.105469 19.230469 17.929688 C 19.058594 17.757812 18.972656 17.550781 18.972656 17.304688 L 18.972656 16.421875 L 17.226562 16.421875 L 17.226562 17.304688 C 17.226562 17.550781 17.140625 17.757812 16.972656 17.929688 C 16.800781 18.105469 16.59375 18.191406 16.355469 18.191406 C 16.113281 18.191406 15.90625 18.105469 15.738281 17.929688 C 15.566406 17.757812 15.480469 17.550781 15.480469 17.304688 Z M 15.480469 12 "
                                        fillOpacity="1" fillRule="nonzero" />
                                </g>
                                <g clipPath="url(#7389632a45)">
                                    <path fill="#646464"
                                        d="M 9.582031 23.925781 C 9.582031 24.246094 9.613281 24.5625 9.675781 24.875 C 9.738281 25.191406 9.828125 25.496094 9.949219 25.792969 C 10.070312 26.089844 10.21875 26.371094 10.394531 26.636719 C 10.570312 26.902344 10.769531 27.148438 10.992188 27.375 C 11.21875 27.601562 11.460938 27.804688 11.722656 27.984375 C 11.988281 28.160156 12.265625 28.3125 12.558594 28.433594 C 12.847656 28.554688 13.152344 28.648438 13.460938 28.710938 C 13.769531 28.773438 14.085938 28.804688 14.402344 28.804688 L 43.1875 28.804688 C 43.503906 28.804688 43.816406 28.773438 44.125 28.710938 C 44.4375 28.648438 44.738281 28.554688 45.03125 28.433594 C 45.324219 28.3125 45.601562 28.160156 45.863281 27.984375 C 46.125 27.804688 46.371094 27.601562 46.59375 27.375 C 46.816406 27.148438 47.015625 26.902344 47.191406 26.636719 C 47.367188 26.371094 47.515625 26.089844 47.636719 25.792969 C 47.757812 25.496094 47.851562 25.191406 47.914062 24.875 C 47.972656 24.5625 48.003906 24.246094 48.003906 23.925781 L 48.003906 23.496094 L 9.582031 23.496094 Z M 9.582031 23.925781 "
                                        fillOpacity="1" fillRule="nonzero" />
                                </g>
                                <g clipPath="url(#8436c8a106)">
                                    <path fill="#646464"
                                        d="M 43.1875 0.5 L 14.402344 0.5 C 14.085938 0.5 13.769531 0.53125 13.460938 0.59375 C 13.152344 0.65625 12.847656 0.746094 12.558594 0.871094 C 12.265625 0.992188 11.988281 1.144531 11.722656 1.320312 C 11.460938 1.5 11.21875 1.703125 10.992188 1.929688 C 10.769531 2.15625 10.570312 2.402344 10.394531 2.667969 C 10.21875 2.933594 10.070312 3.214844 9.949219 3.511719 C 9.828125 3.808594 9.738281 4.113281 9.675781 4.425781 C 9.613281 4.742188 9.582031 5.058594 9.582031 5.378906 L 9.582031 5.804688 L 48.003906 5.804688 L 48.003906 5.378906 C 48.003906 5.058594 47.972656 4.742188 47.914062 4.425781 C 47.851562 4.113281 47.757812 3.808594 47.636719 3.511719 C 47.515625 3.214844 47.367188 2.933594 47.191406 2.667969 C 47.015625 2.402344 46.816406 2.15625 46.59375 1.929688 C 46.371094 1.703125 46.125 1.5 45.863281 1.320312 C 45.601562 1.144531 45.324219 0.992188 45.03125 0.871094 C 44.738281 0.746094 44.4375 0.65625 44.125 0.59375 C 43.816406 0.53125 43.503906 0.5 43.1875 0.5 Z M 43.1875 0.5 "
                                        fillOpacity="1" fillRule="nonzero" />
                                </g>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="0.81em" viewBox="0 0 576 512"><path d="M482.9 410.3c0 6.8-4.6 11.7-11.2 11.7-6.8 0-11.2-5.2-11.2-11.7 0-6.5 4.4-11.7 11.2-11.7 6.6 0 11.2 5.2 11.2 11.7zm-310.8-11.7c-7.1 0-11.2 5.2-11.2 11.7 0 6.5 4.1 11.7 11.2 11.7 6.5 0 10.9-4.9 10.9-11.7-.1-6.5-4.4-11.7-10.9-11.7zm117.5-.3c-5.4 0-8.7 3.5-9.5 8.7h19.1c-.9-5.7-4.4-8.7-9.6-8.7zm107.8.3c-6.8 0-10.9 5.2-10.9 11.7 0 6.5 4.1 11.7 10.9 11.7 6.8 0 11.2-4.9 11.2-11.7 0-6.5-4.4-11.7-11.2-11.7zm105.9 26.1c0 .3.3.5.3 1.1 0 .3-.3.5-.3 1.1-.3.3-.3.5-.5.8-.3.3-.5.5-1.1.5-.3.3-.5.3-1.1.3-.3 0-.5 0-1.1-.3-.3 0-.5-.3-.8-.5-.3-.3-.5-.5-.5-.8-.3-.5-.3-.8-.3-1.1 0-.5 0-.8.3-1.1 0-.5.3-.8.5-1.1.3-.3.5-.3.8-.5.5-.3.8-.3 1.1-.3.5 0 .8 0 1.1.3.5.3.8.3 1.1.5s.2.6.5 1.1zm-2.2 1.4c.5 0 .5-.3.8-.3.3-.3.3-.5.3-.8 0-.3 0-.5-.3-.8-.3 0-.5-.3-1.1-.3h-1.6v3.5h.8V426h.3l1.1 1.4h.8l-1.1-1.3zM576 81v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V81c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM64 220.6c0 76.5 62.1 138.5 138.5 138.5 27.2 0 53.9-8.2 76.5-23.1-72.9-59.3-72.4-171.2 0-230.5-22.6-15-49.3-23.1-76.5-23.1-76.4-.1-138.5 62-138.5 138.2zm224 108.8c70.5-55 70.2-162.2 0-217.5-70.2 55.3-70.5 162.6 0 217.5zm-142.3 76.3c0-8.7-5.7-14.4-14.7-14.7-4.6 0-9.5 1.4-12.8 6.5-2.4-4.1-6.5-6.5-12.2-6.5-3.8 0-7.6 1.4-10.6 5.4V392h-8.2v36.7h8.2c0-18.9-2.5-30.2 9-30.2 10.2 0 8.2 10.2 8.2 30.2h7.9c0-18.3-2.5-30.2 9-30.2 10.2 0 8.2 10 8.2 30.2h8.2v-23zm44.9-13.7h-7.9v4.4c-2.7-3.3-6.5-5.4-11.7-5.4-10.3 0-18.2 8.2-18.2 19.3 0 11.2 7.9 19.3 18.2 19.3 5.2 0 9-1.9 11.7-5.4v4.6h7.9V392zm40.5 25.6c0-15-22.9-8.2-22.9-15.2 0-5.7 11.9-4.8 18.5-1.1l3.3-6.5c-9.4-6.1-30.2-6-30.2 8.2 0 14.3 22.9 8.3 22.9 15 0 6.3-13.5 5.8-20.7.8l-3.5 6.3c11.2 7.6 32.6 6 32.6-7.5zm35.4 9.3l-2.2-6.8c-3.8 2.1-12.2 4.4-12.2-4.1v-16.6h13.1V392h-13.1v-11.2h-8.2V392h-7.6v7.3h7.6V416c0 17.6 17.3 14.4 22.6 10.9zm13.3-13.4h27.5c0-16.2-7.4-22.6-17.4-22.6-10.6 0-18.2 7.9-18.2 19.3 0 20.5 22.6 23.9 33.8 14.2l-3.8-6c-7.8 6.4-19.6 5.8-21.9-4.9zm59.1-21.5c-4.6-2-11.6-1.8-15.2 4.4V392h-8.2v36.7h8.2V408c0-11.6 9.5-10.1 12.8-8.4l2.4-7.6zm10.6 18.3c0-11.4 11.6-15.1 20.7-8.4l3.8-6.5c-11.6-9.1-32.7-4.1-32.7 15 0 19.8 22.4 23.8 32.7 15l-3.8-6.5c-9.2 6.5-20.7 2.6-20.7-8.6zm66.7-18.3H408v4.4c-8.3-11-29.9-4.8-29.9 13.9 0 19.2 22.4 24.7 29.9 13.9v4.6h8.2V392zm33.7 0c-2.4-1.2-11-2.9-15.2 4.4V392h-7.9v36.7h7.9V408c0-11 9-10.3 12.8-8.4l2.4-7.6zm40.3-14.9h-7.9v19.3c-8.2-10.9-29.9-5.1-29.9 13.9 0 19.4 22.5 24.6 29.9 13.9v4.6h7.9v-51.7zm7.6-75.1v4.6h.8V302h1.9v-.8h-4.6v.8h1.9zm6.6 123.8c0-.5 0-1.1-.3-1.6-.3-.3-.5-.8-.8-1.1-.3-.3-.8-.5-1.1-.8-.5 0-1.1-.3-1.6-.3-.3 0-.8.3-1.4.3-.5.3-.8.5-1.1.8-.5.3-.8.8-.8 1.1-.3.5-.3 1.1-.3 1.6 0 .3 0 .8.3 1.4 0 .3.3.8.8 1.1.3.3.5.5 1.1.8.5.3 1.1.3 1.4.3.5 0 1.1 0 1.6-.3.3-.3.8-.5 1.1-.8.3-.3.5-.8.8-1.1.3-.6.3-1.1.3-1.4zm3.2-124.7h-1.4l-1.6 3.5-1.6-3.5h-1.4v5.4h.8v-4.1l1.6 3.5h1.1l1.4-3.5v4.1h1.1v-5.4zm4.4-80.5c0-76.2-62.1-138.3-138.5-138.3-27.2 0-53.9 8.2-76.5 23.1 72.1 59.3 73.2 171.5 0 230.5 22.6 15 49.5 23.1 76.5 23.1 76.4.1 138.5-61.9 138.5-138.4z" /></svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                                id="Layer_1" x="0px" y="0px" width="100px" height="45px" viewBox="0 0 256 127"
                                enableBackground="new 0 0 256 127" xmlSpace="preserve">
                                <g>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M129.5,16.95c35.165-0.001,70.33-0.005,105.495,0.002   c9.362,0.003,12.081,2.77,12.085,12.277c0.007,23.5,0.014,46.999-0.005,70.499c-0.007,8.456-2.947,11.409-11.405,11.411   c-70.498,0.012-140.996,0.012-211.493-0.001c-8.415-0.001-11.307-2.948-11.313-11.482c-0.019-23.833-0.023-47.666,0.003-71.499   c0.009-8.136,3.052-11.194,11.135-11.198C59.167,16.939,94.333,16.95,129.5,16.95z M145.961,109.759   c-0.66-4.578-1.666-8.42-1.693-12.27c-0.154-21.659-0.16-43.321-0.005-64.981c0.032-4.519,0.954-9.031,1.507-13.917   c-0.719,0-2.193,0-3.668,0c-38.989,0-77.978-0.009-116.968,0.008c-8.63,0.003-10.865,2.278-10.87,10.995   c-0.014,22.827-0.01,45.653-0.002,68.48c0.003,9.485,2.235,11.682,11.866,11.683c38.489,0.005,76.979,0.002,115.469,0.002   C143.223,109.759,144.85,109.759,145.961,109.759z M199.382,89.038c-0.205-0.172-0.41-0.344-0.615-0.515   c0.308-0.127,0.605-0.286,0.924-0.376c6.423-1.804,10.419-5.641,10.727-12.649c0.309-7.001-3.085-11.201-9.604-13.375   c-1.073-0.358-2.341-1.938-2.447-3.056c-0.322-3.372-0.116-6.795-0.116-10.198c2.18,1.004,2.942,2.755,4.278,3.635   c1.398,0.922,3.351,1.267,5.057,1.257c0.378-0.002,1.316-2.692,1.015-3.9c-1.579-6.321-8.096-7.001-12.371-10.264   c-0.371-0.283-1.529,0.262-2.21,0.629c-1.378,0.743-2.586,1.89-4.029,2.408c-5.137,1.847-7.836,5.53-8.165,10.817   c-0.326,5.237,1.554,9.448,6.654,11.72c1.662,0.74,3.313,1.504,4.771,2.167c0,4.901,0,9.58,0,14.259   c-0.446,0.183-0.892,0.364-1.337,0.546c-1.286-2.128-2.258-4.568-3.964-6.277c-1.188-1.189-3.354-1.58-5.149-1.814   c-0.314-0.042-1.56,2.563-1.348,3.767c0.803,4.564,3.574,7.583,7.91,9.498c2.141,0.945,3.822,2.928,5.712,4.44   c0.127,0.667,0.254,1.333,0.381,2C196.764,92.183,198.073,90.61,199.382,89.038z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M57.449,64.629c-4.224,1.055-7.023,0.385-9.283-3.33   c-2.706-4.446-6.182-8.425-9.325-12.605c-0.455,0.104-0.909,0.207-1.364,0.312c0,5.103,0,10.205,0,15.679c-2.773,0-4.675,0-6.932,0   c0-9.04,0-18.094,0-27.238c4.372-1.518,7.595-0.725,10.154,3.401c2.484,4.005,5.566,7.64,8.386,11.438   c0.572-0.117,1.144-0.235,1.715-0.353c0-3.142-0.017-6.283,0.004-9.425c0.039-6.016,0.11-6.067,6.644-5.198   C57.449,46.31,57.449,55.365,57.449,64.629z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M72.799,42.595c0.113,2.128,0.189,3.557,0.234,4.402   c2.638,2.938,8.551-1.709,8.52,4.025c-0.03,5.469-5.461,1.262-8.456,3.799c-0.063,0.771-0.189,2.32-0.357,4.382   c3.387,0.308,6.433,0.585,9.758,0.888c0,1.588,0,2.975,0,4.688c-5.725,0-11.277,0-17.136,0c0-9.248,0-18.158,0-27.887   c4.874,0,9.627-0.118,14.362,0.117c0.786,0.039,2.074,1.624,2.077,2.498c0.003,0.889-1.16,2.35-2.049,2.56   C77.701,42.554,75.506,42.435,72.799,42.595z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M102.119,64.564c-7.339,0.954-7.419,0.893-7.461-5.352   c-0.017-2.487-0.003-4.975-0.004-7.462c0-8.479,0-8.479-8.133-10.165c-0.093-0.539-0.281-1.162-0.289-1.787   c-0.01-0.785,0.127-1.572,0.229-2.66c7.981,0,15.714,0,23.883,0c0,1.506,0,3.001,0,4.478c-8.223,1.667-8.223,1.667-8.224,10.369   C102.119,56.096,102.119,60.206,102.119,64.564z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M29.485,93.064c0-7.43,0-12.824,0-18.841c2.751,0.129,5.195,0.075,7.59,0.39   c6.321,0.831,6.83,1.952,4.289,6.406c0.514,3.347,1.724,7.473,1.098,7.773C38.678,90.608,34.475,91.549,29.485,93.064z    M40.568,86.667c-2.282-1.333-3.433-2.544-4.489-2.466c-0.978,0.072-1.853,1.522-2.773,2.365c0.902,0.861,1.743,2.322,2.722,2.421   C37.082,89.093,38.264,87.922,40.568,86.667z M39.572,79.721c-1.888-1.42-2.794-2.631-3.688-2.622   c-0.854,0.009-2.304,1.234-2.372,2.021c-0.07,0.81,1.097,2.281,1.938,2.462C36.318,81.769,37.446,80.75,39.572,79.721z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M119.526,95.963c3.329-1.513,7.914,0.689,8.177-4.545   c-7.094,0.166-9.123-1.146-9.003-5.642c0.146-5.51,2.711-6.605,13.134-5.261c-0.785,5.238,2.6,11.217-2.795,15.567   C126.57,98.074,123.278,99.121,119.526,95.963z M124.432,89.395c0.483,0.028,0.967,0.057,1.451,0.085   c0.708-1.239,2.057-2.54,1.948-3.703c-0.115-1.222-1.627-2.312-2.528-3.459c-0.819,1.048-2.197,2.041-2.307,3.159   C122.873,86.723,123.903,88.083,124.432,89.395z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M82.778,84.428c2.69-2.145,4.387-3.497,6.004-4.786   c0.31,4.419,0.556,7.934,0.839,11.978c-3.783,2.193-3.074-4.229-6.342-4.425c-0.149,0.731-0.082,1.776-0.559,2.413   c-0.652,0.871-1.718,1.433-2.607,2.127c-0.625-0.81-1.759-1.599-1.792-2.432c-0.18-4.489-0.207-8.994,0.016-13.479   c0.044-0.888,1.413-1.71,2.171-2.563c0.757,0.854,2.058,1.646,2.166,2.576C82.975,78.411,82.778,81.045,82.778,84.428z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M102.213,80.323c3.467-0.201,6.276-0.755,8.942-0.355   c1.376,0.206,3.136,1.903,3.582,3.293c0.63,1.966,0.389,4.292,0.134,6.418c-0.09,0.755-1.307,1.376-2.009,2.059   c-0.58-0.8-1.482-1.531-1.667-2.414c-0.301-1.438,0.164-3.067-0.26-4.441c-0.311-1.005-1.528-1.73-2.342-2.58   c-0.595,0.863-1.262,1.688-1.752,2.607c-0.208,0.392,0.047,1.004-0.072,1.475c-0.489,1.93,1.493,5.356-2.434,5.088   c-0.829-0.058-1.661-3.5-2.05-5.47C101.942,84.262,102.213,82.4,102.213,80.323z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M62.013,80.585c3.433-0.31,5.95-0.787,8.435-0.653   c1.23,0.065,2.746,0.998,3.498,2.01c0.711,0.956,0.991,2.609,0.75,3.813c-0.417,2.075,1.931,5.599-2.261,5.734   c-0.682,0.021-1.424-3.498-2.239-5.336c-0.583-1.313-1.335-2.553-2.012-3.826c-0.753,1.262-1.636,2.469-2.208,3.809   c-0.302,0.705,0.173,1.74-0.125,2.45c-0.473,1.128-1.297,2.108-1.974,3.15c-0.621-1.106-1.659-2.169-1.779-3.328   C61.828,85.806,62.013,83.156,62.013,80.585z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M58.584,91.273c-3.534,0.195-5.771,0.586-7.936,0.342   c-1.383-0.155-2.66-1.252-3.985-1.926c0.738-1.43,1.165-3.226,2.299-4.187c1.141-0.966,2.985-1.101,4.701-2.887   c-1.71-0.493-3.421-0.986-5.131-1.479c-0.015-0.25-0.029-0.5-0.043-0.75c2.455,0,6.511-0.866,7.067,0.161   C57.279,83.733,57.672,87.64,58.584,91.273z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M96.776,92.173c-0.856-0.961-2.269-1.827-2.452-2.903   c-0.383-2.249-0.28-4.626-0.033-6.914c0.088-0.814,1.171-1.521,1.801-2.277c0.699,0.721,1.942,1.401,2,2.171   c0.232,3.076,0.096,6.181,0.096,9.274C97.718,91.74,97.247,91.956,96.776,92.173z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M198.516,82.114c0-4.791,0-8.813,0-12.836c0.368-0.261,0.735-0.522,1.104-0.783   c1.347,1.723,3.408,3.269,3.884,5.204C204.359,77.19,202.765,80.073,198.516,82.114z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M193.405,48.611c0,3.662,0,7.324,0,10.986c-0.378,0.247-0.757,0.495-1.136,0.743   c-1.264-1.979-3.443-3.917-3.538-5.95c-0.098-2.112,1.821-4.318,2.859-6.484C192.195,48.142,192.801,48.376,193.405,48.611z">
                                    </path>
                                </g>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                                id="Layer_1" x="0px" y="0px" width="130px" height="45px" viewBox="0 0 437.143 102.364"
                                enableBackground="new 0 0 437.143 102.364" xmlSpace="preserve">
                                <g>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M310.272,76.15c-4.106,0-8.038,0-12.242,0c0-0.692,0-1.335,0-1.977   c0-10.197,0.001-20.395-0.003-30.591c0-0.789,0.013-1.582-0.059-2.366c-0.285-3.197-1.586-4.764-4.189-5.104   c-2.751-0.36-5.491,1.152-6.372,3.774c-0.473,1.409-0.718,2.958-0.727,4.447c-0.063,9.893-0.032,19.787-0.032,29.681   c0,0.655,0,1.312,0,2.087c-4.146,0-8.12,0-12.335,0c-0.033-0.763-0.095-1.522-0.096-2.282c-0.006-10.258-0.002-20.516-0.008-30.773   c0-0.727-0.004-1.46-0.096-2.178c-0.377-2.93-1.449-4.252-3.752-4.697c-2.488-0.481-5.341,0.635-6.318,2.903   c-0.695,1.616-1.082,3.488-1.101,5.25c-0.101,9.833-0.049,19.666-0.049,29.499c0,0.713,0,1.427,0,2.271c-4.227,0-8.253,0-12.425,0   c-0.031-0.674-0.082-1.264-0.083-1.855c-0.004-14.81,0.021-29.619-0.039-44.43c-0.007-1.592,0.39-2.109,2.021-2.043   c3.203,0.13,6.415,0.038,9.858,0.038c0,1.595,0,3.063,0,4.53c3.452-4,7.611-5.896,12.741-5.751   c5.204,0.146,9.159,2.111,10.882,7.32c0.218-0.042,0.376-0.029,0.405-0.084c3.411-6.448,10.732-9.088,17.52-6.312   c2.702,1.105,4.508,3.125,5.376,5.828c0.622,1.94,1.141,4.013,1.158,6.031c0.109,11.895,0.058,23.793,0.056,35.69   C310.365,75.351,310.317,75.646,310.272,76.15z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M110.38,76.106c-4.242,0-8.216,0-12.287,0c0-16.11,0-32.099,0-48.295   c3.662,0,7.227-0.032,10.789,0.05c0.345,0.008,0.923,0.692,0.963,1.104c0.126,1.292,0.047,2.603,0.047,4.258   c1.188-1.349,1.997-2.473,3.005-3.376c4.039-3.62,11.701-4.383,16.429-1.716c3.119,1.76,4.555,4.609,5.041,8   c0.24,1.675,0.354,3.381,0.359,5.074c0.031,10.925,0.016,21.85,0.016,32.774c0,0.656,0,1.313,0,2.108c-4.121,0-8.095,0-12.333,0   c-0.033-0.72-0.097-1.476-0.097-2.231c-0.007-10.136-0.001-20.271-0.011-30.407c-0.001-0.846-0.042-1.699-0.149-2.537   c-0.391-3.059-1.356-4.199-3.92-4.712c-2.77-0.554-5.68,0.498-6.702,2.82c-0.687,1.558-1.084,3.37-1.101,5.074   c-0.1,9.892-0.049,19.785-0.049,29.679C110.38,74.49,110.38,75.208,110.38,76.106z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M244.37,76.218c-3.957,0-7.531,0.044-11.101-0.055   c-0.451-0.012-1.072-0.688-1.284-1.195c-0.458-1.094-0.7-2.277-1.107-3.689c-1.829,2.822-3.813,5.15-7.065,5.646   c-2.264,0.344-4.592,0.677-6.854,0.51c-4.832-0.356-8.559-3.681-9.491-8.886c-0.565-3.155-0.492-6.519-0.13-9.724   c0.464-4.109,3.021-7.059,6.862-8.484c3.964-1.471,8.08-2.534,12.141-3.739c3.71-1.1,5.019-2.958,4.626-6.683   c-0.333-3.162-2.152-4.809-5.452-4.937c-3.086-0.12-5.364,1.634-5.874,4.562c-0.166,0.952-0.243,1.919-0.373,2.977   c-3.584,0-7.135,0-10.669,0c-1.238-6.958,2.898-13.361,9.804-15.103c5.032-1.269,10.13-1.187,15.146,0.035   c6.257,1.523,9.117,5.353,9.277,12.592c0.174,7.889,0.072,15.783,0.113,23.674C242.96,67.829,242.535,71.987,244.37,76.218z    M230.897,52.6c-1.988,0.694-3.872,1.484-5.828,2.009c-5.75,1.545-8.126,6.617-5.57,12.029c0.684,1.447,1.781,2.25,3.352,2.447   c3.672,0.461,7.624-2.219,7.975-5.889C231.16,59.677,230.897,56.1,230.897,52.6z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M315.459,51.834c0.58-4.011,0.864-8.46,1.917-12.721   c1.878-7.603,6.737-11.648,14.538-12.352c2.988-0.269,6.095-0.146,9.052,0.36c6.307,1.077,10.022,5.229,11.505,11.249   c2.118,8.604,2.247,17.318,0.189,25.949c-1.934,8.111-6.499,12.138-14.767,13.025c-2.973,0.318-6.087,0.148-9.042-0.355   c-6.932-1.181-10.494-5.957-11.81-12.461C316.229,60.509,316.003,56.372,315.459,51.834z M327.974,52.026   c0.083,0.008,0.166,0.016,0.249,0.023c0,1.03-0.089,2.07,0.017,3.09c0.321,3.124,0.52,6.281,1.151,9.346   c0.449,2.174,1.722,4.002,4.23,4.486c3.524,0.68,6.086-1.195,6.972-5.431c1.366-6.528,1.289-13.132,0.526-19.717   c-0.233-2.013-0.769-4.059-1.563-5.92c-1.012-2.369-3.401-3.303-5.909-2.759c-3.155,0.685-4.221,3.185-4.634,5.868   C328.452,44.651,328.301,48.353,327.974,52.026z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M416.07,51.854c-0.634,4.396-0.94,8.84-1.965,13.109   c-1.732,7.227-6.445,11.461-13.96,12.352c-3.895,0.461-7.754,0.391-11.53-0.768c-5.427-1.664-8.384-5.664-9.656-10.907   c-2.092-8.614-2.21-17.329-0.131-25.954c2.051-8.506,7.576-12.819,16.311-13.031c2.473-0.06,4.998,0.008,7.424,0.441   c6.298,1.126,10.105,5.179,11.501,11.225C415.079,42.723,415.418,47.28,416.07,51.854z M403.596,52.011   c-0.111-0.014-0.222-0.027-0.333-0.04c0-0.606,0.065-1.222-0.011-1.818c-0.47-3.713-0.749-7.47-1.537-11.116   c-0.579-2.685-2.716-4.031-5.175-4.057c-2.42-0.025-4.189,1.217-5.225,3.793c-0.381,0.948-0.766,1.962-0.816,2.962   c-0.247,4.955-0.566,9.918-0.489,14.873c0.045,2.868,0.623,5.765,1.28,8.573c0.439,1.878,1.733,3.3,3.811,3.755   c3.45,0.754,6.184-0.917,6.968-4.882C402.853,60.095,403.108,56.029,403.596,52.011z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M176.211,42.164c-3.672,0-7.23,0-10.865,0c-0.217-1.254-0.332-2.518-0.664-3.721   c-0.649-2.345-2.306-3.455-4.922-3.465c-2.602-0.01-5.03,1.484-5.671,3.492c-0.751,2.351-0.045,4.862,2.102,6.031   c1.948,1.061,4.116,1.731,6.211,2.51c1.986,0.737,4.031,1.321,6.002,2.094c7.012,2.75,9.963,7.281,8.759,16.113   c-0.872,6.394-5.063,10.001-11.113,11.539c-4.788,1.219-9.639,1.116-14.423-0.021c-5.676-1.35-9.06-4.934-9.781-10.803   c-0.211-1.724-0.183-3.477-0.27-5.344c3.784,0,7.333,0,10.999,0c0.132,1.211,0.183,2.412,0.407,3.58   c0.674,3.515,3.679,5.408,7.536,4.814c3.642-0.56,5.347-2.816,4.956-6.514c-0.244-2.322-1.875-3.476-3.75-4.293   c-2.107-0.918-4.303-1.635-6.46-2.441c-1.588-0.592-3.204-1.119-4.758-1.791c-6.058-2.617-8.839-7.102-8.515-13.622   c0.313-6.314,3.581-10.64,9.746-12.593c5.159-1.634,10.429-1.648,15.605-0.159C173.819,29.433,176.799,34.415,176.211,42.164z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M202.782,67.798c0,2.662,0.048,5.082-0.049,7.497   c-0.015,0.383-0.67,1.05-1.043,1.06c-3.869,0.105-7.758,0.34-11.606,0.063c-3.835-0.277-5.896-2.47-6.45-6.258   c-0.307-2.092-0.466-4.225-0.471-6.339c-0.037-15.968-0.021-31.936-0.016-47.903c0-0.587,0.066-1.175,0.107-1.854   c4.13,0,8.107,0,12.265,0c0,4.524,0,8.986,0,13.742c2.021,0,3.876,0.059,5.724-0.021c1.19-0.052,1.619,0.355,1.565,1.557   c-0.082,1.817-0.086,3.645,0.001,5.462c0.059,1.24-0.444,1.572-1.598,1.524c-1.804-0.074-3.612-0.02-5.635-0.02   c0,0.827,0,1.476,0,2.124c0,7.893-0.001,15.786,0,23.678c0.002,4.898,0.818,5.711,5.7,5.688   C201.695,67.796,202.113,67.798,202.782,67.798z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M353.091,92.007c0-3.008,0-5.836,0-8.908c0.915,0,1.802,0.032,2.686-0.007 c2.143-0.095,3.438-1.127,3.76-3.237c0.255-1.672,0.358-3.383,0.361-5.076c0.026-14.874,0.016-29.748,0.016-44.623   c0-0.713,0-1.427,0-2.242c4.175,0,8.149,0,12.342,0c0,0.718,0,1.364,0,2.011c0,16.636,0.011,33.271-0.018,49.905   c-0.003,1.447-0.142,2.918-0.429,4.336c-0.676,3.344-2.639,5.67-5.88,6.839C361.765,92.507,357.475,92.142,353.091,92.007z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M90.437,76.14c-4.237,0-8.162,0-12.36,0c0-0.73,0-1.374,0-2.018   c0-14.746,0.028-29.494-0.038-44.24c-0.008-1.691,0.466-2.192,2.134-2.113c2.785,0.132,5.585,0.124,8.372,0.001   c1.55-0.067,1.93,0.467,1.922,1.953c-0.056,11.166-0.029,22.332-0.029,33.499C90.437,67.458,90.437,71.694,90.437,76.14z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M22.001,28.931c4.835,0,9.19,0,13.546,0c3.643,0,7.286-0.03,10.928,0.027   c0.671,0.011,1.538,0.172,1.976,0.605c7.029,6.956,14.003,13.968,21.227,21.205c-0.755,0.068-1.246,0.149-1.738,0.15   c-7.406,0.008-14.813,0.024-22.22-0.023c-0.79-0.004-1.82-0.15-2.327-0.65C36.344,43.308,29.367,36.297,22.001,28.931z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M69.782,55.147c-0.656,0.721-1.002,1.133-1.38,1.512   c-6.393,6.398-12.762,12.822-19.224,19.149c-0.723,0.708-1.974,1.22-2.987,1.231c-7.886,0.101-15.774,0.056-23.943,0.056   c0.388-0.486,0.599-0.813,0.868-1.082c6.564-6.569,13.126-13.143,19.722-19.682c0.522-0.519,1.28-1.128,1.935-1.134   C52.959,55.121,61.146,55.147,69.782,55.147z">
                                    </path>
                                </g>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                                id="Layer_1" x="0px" y="0px" width="100px" height="50px" viewBox="0 0 304.571 102.364"
                                enableBackground="new 0 0 304.571 102.364" xmlSpace="preserve">
                                <g>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M295.456,94.858c-1.44,0.48-2.861,1.284-4.326,1.374   c-3.347,0.208-6.714,0.07-10.073,0.065c-3.391-0.006-4.234-0.832-4.236-4.239c-0.009-15.756,0.003-31.512-0.009-47.268   c-0.003-4.221-1.894-6.027-6.027-5.839c-3.356,0.153-5.071,1.918-5.078,5.36c-0.02,11.197-0.008,22.394-0.008,33.591   c0,4.958,0.017,9.917-0.006,14.876c-0.013,2.723-0.869,3.579-3.568,3.594c-3.759,0.021-7.518,0.017-11.276,0.002   c-2.883-0.012-3.756-0.773-3.774-3.653c-0.069-10.477-0.072-20.953-0.091-31.43c-0.011-5.678,0.013-11.356-0.008-17.035   c-0.013-3.536-1.717-5.138-5.396-5.152c-3.884-0.015-5.627,1.547-5.63,5.164c-0.016,15.836-0.006,31.672-0.008,47.507   c0,3.917-0.621,4.521-4.625,4.522c-3.438,0.002-6.878,0.018-10.316-0.005c-2.703-0.018-3.684-0.915-3.686-3.54   c-0.019-22.794-0.018-45.588,0-68.381c0.002-2.562,0.937-3.474,3.464-3.498c3.679-0.034,7.357-0.015,11.037-0.008   c3.172,0.006,3.641,0.389,4.348,3.51c9.075-6.019,17.807-5.558,26.28,1.511c3.325-2.995,7.097-5.08,11.651-5.494   c9.771-0.89,17.763,4.363,20.806,13.698c0.141,0.432,0.37,0.835,0.558,1.252C295.456,55.182,295.456,75.021,295.456,94.858z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M7.48,22.385c1.45-0.48,2.894-1.353,4.351-1.375   c8.555-0.132,17.113-0.085,25.67-0.06c11.496,0.035,18.387,6.913,18.361,18.395c-0.015,6.711,0.264,13.464-0.374,20.124   c-0.85,8.862-7.708,14.558-16.669,14.665c-4.139,0.05-8.278,0.008-12.7,0.008c0,4.357,0,8.489,0,12.622c0,1.999,0.036,4-0.01,5.998   c-0.063,2.721-0.942,3.598-3.598,3.612c-3.839,0.021-7.683,0.124-11.513-0.064c-1.194-0.059-2.347-0.943-3.519-1.45   C7.48,70.701,7.48,46.542,7.48,22.385z M26.217,55.417c2.787,0,5.329,0.048,7.868-0.017c1.909-0.048,2.971-1.221,3.034-3.036   c0.11-3.188,0.08-6.383,0.012-9.572c-0.037-1.739-1.045-2.951-2.768-3.055c-2.676-0.161-5.368-0.043-8.146-0.043   C26.217,45.03,26.217,50.108,26.217,55.417z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M109.153,64.1c0,7.919,0.007,15.837-0.002,23.755   c-0.007,5.385-2.921,8.346-8.264,8.359c-7.678,0.021-15.356,0.039-23.035-0.003c-10.303-0.055-17.242-6.686-17.571-16.947   c-0.176-5.512-0.174-11.039-0.002-16.551c0.277-8.913,6.532-15.681,15.412-16.802c2.449-0.31,4.939-0.373,7.412-0.393   c6.529-0.052,7.094-0.27,6.992-3.449c-0.09-2.78-0.396-3.607-7.168-3.388c-3.755,0.122-7.518,0.036-11.276,0.018   c-2.976-0.015-3.909-0.912-3.931-3.815c-0.027-3.519,0.022-7.039-0.015-10.557c-0.021-2.067,1.002-3.265,2.988-3.266   c7.114-0.004,14.262-0.298,21.334,0.287c11.479,0.949,17.057,7.424,17.119,18.999C109.187,48.264,109.153,56.182,109.153,64.1z    M79.078,71.168c0,1.673-0.059,3.348,0.013,5.018c0.111,2.53,1.26,3.217,4.704,3.335c5.41,0.186,6.432-0.502,6.591-3.357   c0.186-3.335,0.078-6.688,0.028-10.033c-0.027-1.866-1.032-3.007-2.927-3.104c-1.826-0.094-3.664-0.107-5.489-0.007   c-1.891,0.104-2.857,1.266-2.909,3.13C79.042,67.821,79.079,69.495,79.078,71.168z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M164.348,51.55c0,8.556,0.012,17.111-0.003,25.667   c-0.02,11.583-7.67,19.277-19.217,19.32c-6.557,0.023-13.114,0.015-19.67-0.001c-3.229-0.008-3.969-0.746-3.986-3.946   c-0.019-3.679-0.033-7.356,0.007-11.034c0.029-2.751,0.856-3.557,3.611-3.569c4.877-0.022,9.755-0.005,14.632-0.009   c0.719-0.001,1.441,0.01,2.157-0.046c2.842-0.22,3.985-1.159,3.898-3.164c-0.085-1.95-1.362-2.817-4.187-2.868   c-3.514-0.063-7.087,0.242-10.531-0.286c-9.307-1.43-15.119-8.503-15.309-18.576c-0.179-9.431-0.061-18.869-0.026-28.304   c0.01-2.792,1.005-3.751,3.767-3.779c3.598-0.036,7.196-0.022,10.794-0.005c3.192,0.015,4.114,0.889,4.132,4.161   c0.042,7.755,0.012,15.511,0.016,23.267c0.002,4.382,0.585,4.954,5.011,4.962c6.102,0.011,6.265-0.154,6.265-6.366   c0-7.355-0.007-14.709,0.004-22.064c0.004-3.057,0.908-3.944,4.023-3.96c3.438-0.018,6.876-0.012,10.314-0.002   c3.404,0.011,4.292,0.875,4.295,4.217C164.354,33.959,164.348,42.755,164.348,51.55z">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M182.105,39.663c-2.557,0-4.785,0.028-7.012-0.007   c-2.568-0.041-3.516-0.942-3.537-3.423c-0.035-3.997,0.015-7.993-0.019-11.989c-0.019-2.219,1.145-3.301,3.229-3.271   c6.856,0.098,11.821-2.995,15.627-8.574c1.396-2.046,3.314-3.92,5.386-5.27c2.538-1.652,4.517-0.292,4.555,2.766   c0.044,3.583,0.01,7.167,0.01,11.052c2.223,0,4.273-0.022,6.322,0.005c2.813,0.037,3.807,0.979,3.828,3.692   c0.03,3.836,0.038,7.673-0.004,11.51c-0.027,2.456-1.046,3.449-3.525,3.501c-2.068,0.043-4.139,0.009-6.542,0.009   c0,0.972,0,1.815,0,2.659c0,16.786,0.002,33.572-0.001,50.357c0,3.474-0.698,4.165-4.224,4.178   c-3.437,0.013-6.874,0.023-10.312-0.004c-2.995-0.023-3.777-0.83-3.778-3.881c-0.007-16.706-0.003-33.412-0.003-50.118   C182.105,41.906,182.105,40.959,182.105,39.663z">
                                    </path>
                                </g>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="40px" fill="#072654"
                                viewBox="0 0 1896 401">
                                <path fill="#333" d="m122.63 105.7-15.75 57.97 90.15-58.3-58.96 219.98 59.88.05L285.05.48">
                                </path>
                                <path
                                    d="M25.6 232.92.8 325.4h122.73l50.22-188.13L25.6 232.92m426.32-81.42c-3 11.15-8.78 19.34-17.4 24.57-8.6 5.22-20.67 7.84-36.25 7.84h-49.5l17.38-64.8h49.5c15.56 0 26.25 2.6 32.05 7.9 5.8 5.3 7.2 13.4 4.22 24.6m51.25-1.4c6.3-23.4 3.7-41.4-7.82-54-11.5-12.5-31.68-18.8-60.48-18.8H324.4l-66.5 248.1h53.67l26.8-100h35.2c7.9 0 14.12 1.3 18.66 3.8 4.55 2.6 7.22 7.1 8.04 13.6l9.58 82.6h57.5l-9.32-77c-1.9-17.2-9.77-27.3-23.6-30.3 17.63-5.1 32.4-13.6 44.3-25.4a92.6 92.6 0 0 0 24.44-42.5m130.46 86.4c-4.5 16.8-11.4 29.5-20.73 38.4-9.34 8.9-20.5 13.3-33.52 13.3-13.26 0-22.25-4.3-27-13-4.76-8.7-4.92-21.3-.5-37.8 4.42-16.5 11.47-29.4 21.17-38.7 9.7-9.3 21.04-13.95 34.06-13.95 13 0 21.9 4.5 26.4 13.43 4.6 8.97 4.7 21.8.2 38.5zm23.52-87.8-6.72 25.1c-2.9-9-8.53-16.2-16.85-21.6-8.34-5.3-18.66-8-30.97-8-15.1 0-29.6 3.9-43.5 11.7-13.9 7.8-26.1 18.8-36.5 33-10.4 14.2-18 30.3-22.9 48.4-4.8 18.2-5.8 34.1-2.9 47.9 3 13.9 9.3 24.5 19 31.9 9.8 7.5 22.3 11.2 37.6 11.2a82.4 82.4 0 0 0 35.2-7.7 82.11 82.11 0 0 0 28.4-21.2l-7 26.16h51.9L709.3 149h-52zm238.65 0H744.87l-10.55 39.4h87.82l-116.1 100.3-9.92 37h155.8l10.55-39.4h-94.1l117.88-101.8m142.4 52c-4.67 17.4-11.6 30.48-20.75 39-9.15 8.6-20.23 12.9-33.24 12.9-27.2 0-36.14-17.3-26.86-51.9 4.6-17.2 11.56-30.13 20.86-38.84 9.3-8.74 20.57-13.1 33.82-13.1 13 0 21.78 4.33 26.3 13.05 4.52 8.7 4.48 21.67-.13 38.87m30.38-80.83c-11.95-7.44-27.2-11.16-45.8-11.16-18.83 0-36.26 3.7-52.3 11.1a113.09 113.09 0 0 0-41 32.06c-11.3 13.9-19.43 30.2-24.42 48.8-4.9 18.53-5.5 34.8-1.7 48.73 3.8 13.9 11.8 24.6 23.8 32 12.1 7.46 27.5 11.17 46.4 11.17 18.6 0 35.9-3.74 51.8-11.18 15.9-7.48 29.5-18.1 40.8-32.1 11.3-13.94 19.4-30.2 24.4-48.8 5-18.6 5.6-34.84 1.8-48.8-3.8-13.9-11.7-24.6-23.6-32.05m185.1 40.8 13.3-48.1c-4.5-2.3-10.4-3.5-17.8-3.5-11.9 0-23.3 2.94-34.3 8.9-9.46 5.06-17.5 12.2-24.3 21.14l6.9-25.9-15.07.06h-37l-47.7 176.7h52.63l24.75-92.37c3.6-13.43 10.08-24 19.43-31.5 9.3-7.53 20.9-11.3 34.9-11.3 8.6 0 16.6 1.97 24.2 5.9m146.5 41.1c-4.5 16.5-11.3 29.1-20.6 37.8-9.3 8.74-20.5 13.1-33.5 13.1s-21.9-4.4-26.6-13.2c-4.8-8.85-4.9-21.6-.4-38.36 4.5-16.75 11.4-29.6 20.9-38.5 9.5-8.97 20.7-13.45 33.7-13.45 12.8 0 21.4 4.6 26 13.9 4.6 9.3 4.7 22.2.28 38.7m36.8-81.4c-9.75-7.8-22.2-11.7-37.3-11.7-13.23 0-25.84 3-37.8 9.06-11.95 6.05-21.65 14.3-29.1 24.74l.18-1.2 8.83-28.1h-51.4l-13.1 48.9-.4 1.7-54 201.44h52.7l27.2-101.4c2.7 9.02 8.2 16.1 16.6 21.22 8.4 5.1 18.77 7.63 31.1 7.63 15.3 0 29.9-3.7 43.75-11.1 13.9-7.42 25.9-18.1 36.1-31.9 10.2-13.8 17.77-29.8 22.6-47.9 4.9-18.13 5.9-34.3 3.1-48.45-2.85-14.17-9.16-25.14-18.9-32.9m174.65 80.65c-4.5 16.7-11.4 29.5-20.7 38.3-9.3 8.86-20.5 13.27-33.5 13.27-13.3 0-22.3-4.3-27-13-4.8-8.7-4.9-21.3-.5-37.8 4.4-16.5 11.42-29.4 21.12-38.7 9.7-9.3 21.05-13.94 34.07-13.94 13 0 21.8 4.5 26.4 13.4 4.6 8.93 4.63 21.76.15 38.5zm23.5-87.85-6.73 25.1c-2.9-9.05-8.5-16.25-16.8-21.6-8.4-5.34-18.7-8-31-8-15.1 0-29.68 3.9-43.6 11.7-13.9 7.8-26.1 18.74-36.5 32.9-10.4 14.16-18 30.3-22.9 48.4-4.85 18.17-5.8 34.1-2.9 47.96 2.93 13.8 9.24 24.46 19 31.9 9.74 7.4 22.3 11.14 37.6 11.14 12.3 0 24.05-2.56 35.2-7.7a82.3 82.3 0 0 0 28.33-21.23l-7 26.18h51.9l47.38-176.7h-51.9zm269.87.06.03-.05h-31.9c-1.02 0-1.92.05-2.85.07h-16.55l-8.5 11.8-2.1 2.8-.9 1.4-67.25 93.68-13.9-109.7h-55.08l27.9 166.7-61.6 85.3h54.9l14.9-21.13c.42-.62.8-1.14 1.3-1.8l17.4-24.7.5-.7 77.93-110.5 65.7-93 .1-.06h-.03z">
                                </path>
                            </svg>
                        </li>
                        <li>
                            <Image src={comodo} />
                        </li>
                    </div>
                    <div className="copyright">Copyright © 2017 ESTARTUP BUSINESS MANAGEMENT HUB PRIVATE LIMITED. All Rights
                        Reserved</div>
                </div>
            </section>
            <div className="overlay" >
                <div className="popup">
                    <i className="fa fa-times close" aria-hidden="true"></i>
                    <form action="">
                        <h2>Contact Support</h2>
                        <div className="box_a">
                            <label htmlFor='name'>Name</label><br />
                            <input type="text" name="name" id="name" value={name} onChange={handleText} required />
                        </div>
                        <div className="box_a">
                            <label htmlFor='mobile'>Mobile</label><br />
                            <input type="text" name="mobile" id="mobile" value={mobile} onChange={handleText} required />
                        </div>
                        <div className="box_a">
                            <label htmlFor='email'>Email</label><br />
                            <input type="text" name="email" id="email" value={email} onChange={handleText} required />
                        </div>
                        <div className="box_a">
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                    <div className="form_right">
                        {/* <h2>Enquiry Now!</h2> */}
                        <h2>Facing Trouble
                            Filing
                            Registration Form?</h2>
                    </div>
                </div>
            </div>
            <div className="feedback_overlay" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="feedback">
                    <h2>FEEDBACK FORM</h2>
                    <span className="close_popup" onClick={() => setShowModal(false)}>x</span>
                    <h5 className="rate_t">RATE OUR SERVICES </h5>
                    <form className="enquiry-form" onSubmit={sendFeedback}>
                        <div className="stars" id="xyz">
                            {
                                [...Array(5)].map((_, idx) => {
                                    return (
                                        <label style={{ cursor: 'pointer' }} >
                                            <input type='radio' id='stars' className='star' name='rating' value={ratingNumber} onClick={() => setRatingNumber(idx + 1)} />
                                            {
                                                ratingNumber <= idx ? <AiOutlineStar size={40} /> : <AiFillStar size={40} fill='#fcc813' />
                                            }
                                        </label>
                                    )
                                })
                            }
                        </div>
                        <div className="form_in">
                            <p>We appreciate your suggestions & feedback. Help us to improve our services.</p>
                            <div className="row row_1">
                                <div className="col-sm-6">
                                    <label htmlFor='name'></label>
                                    <input type="text" id='name' required name="name" placeholder="Name" maxLength="100" value={name} onChange={handleText} />
                                </div>
                                <div className="col-sm-6">
                                    <input type="tel" required name="mobile" placeholder="Mobile Number"
                                        maxLength="10" value={mobile} onChange={handleText} />
                                </div>

                            </div>
                            <div className="row row_1">
                                <div className="col-sm-12">
                                    <input type="email" required name="email" placeholder="Email" maxLength="100" value={email} onChange={handleText} />
                                </div>

                            </div>
                            <textarea rows="2" name="message" required
                                placeholder="Share your opinion about us to serve you better" maxLength="500" value={message} onChange={handleText} ></textarea>
                            <button type="submit" name="FeedbackSuggestion" value="Feedback Suggestion">
                                {!buttonLoading ? <span
                                    id="send_t">Submit</span> :
                                    <div className='spinner' id="loader1"><span className='bounce1'></span><span
                                        className='bounce2'></span><span className='bounce3'></span></div>
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Footer