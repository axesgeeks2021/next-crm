"use client"

import React, { useState } from 'react'

import pic1 from "../../assets/images/about_pic.png"
import aboutPic2 from "../../assets/images/about_pic2.png"
import eteam from "../../assets/images/eteam.jpg"
// import { Helmet, HelmetProvider } from 'react-helmet-async'

import Link from 'next/link'
import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/style.css"

function About() {

    const [buttonLoading, setButtonLoading] = useState(false)

    const [text, setText] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
        subject: ""
    })

    const { email, message, name, mobile, subject } = text

    const handleText = e => {
        setText({ ...text, [e.target.name]: e.target.value })
    }


    const fetchContactUs = (e) => {
        e.preventDefault()
        try {
            setButtonLoading(false)
            const myHeaders = new Headers();
            myHeaders.append("Cookie", "PHPSESSID=bmgfbspjccp452g2nshfq4bt34");

            const formdata = new FormData();
            formdata.append("page_id", "");
            formdata.append("name", name);
            formdata.append("email", email);
            formdata.append("mobile", mobile);
            formdata.append("subject", subject);
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
                        setText({
                            name: "",
                            message: "",
                            subject: "",
                            mobile: "",
                            email: ""
                        })
                        setButtonLoading(true)
                        return navigate('/thank-you')
                    }
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            {/* <HelmetProvider>
                <Helmet>
                    <title>About Us</title>
                    <meta name='description' content={html?.data?.meta_description} />
          <meta name='keywords' content={html?.data?.meta_keyword} />
          <meta name='title' content={html?.data?.meta_title} />
                </Helmet>
            </HelmetProvider> */}
            <div className="container-fluid">
                <div className="about_des">
                    <div className="about_l">
                        <h1>HELPING STARTUPS <br />TO RUN <span>BUSINESSES</span> <br />LEGALLY & <br />HASSLE FREE
                        </h1>
                        <span>We are a team of CA, CS, Lawyer, finance, corporate professionals assisting startups in company
                            formation, business licenses, compliances, growth acceleration. </span>
                    </div>
                    <div className="about_r">
                        <Image src={pic1} alt="" />
                    </div>

                </div>
            </div>
            <br />
            <div className="marquee">
                <div className="marquee__content">
                    <ul className="list-inline">
                        <li><i aria-hidden="true" className="fa fa-arrow-right"></i> Company Incorporation</li>
                        <li><i aria-hidden="true" className="fa fa-arrow-right"></i> Business Licenses</li>
                        <li><i aria-hidden="true" className="fa fa-arrow-right"></i> Protecting Brands & Logo</li>
                        <li><i aria-hidden="true" className="fa fa-arrow-right"></i> Accounting & Compliances</li>
                        <li><i aria-hidden="true" className="fa fa-arrow-right"></i> VCFO</li>
                        <li><i aria-hidden="true" className="fa fa-arrow-right"></i> Import Export</li>
                    </ul>
                    <ul className="list-inline">
                        <li><i aria-hidden="true" className="fa fa-arrow-right"></i> Company Incorporation</li>
                        <li><i aria-hidden="true" className="fa fa-arrow-right"></i> Business Licenses</li>
                        <li><i aria-hidden="true" className="fa fa-arrow-right"></i> Protecting Brands & Logo</li>
                        <li><i aria-hidden="true" className="fa fa-arrow-right"></i> Accounting & Compliances</li>
                        <li><i aria-hidden="true" className="fa fa-arrow-right"></i> VCFO</li>
                        <li><i aria-hidden="true" className="fa fa-arrow-right"></i> Import Export</li>
                    </ul>
                    <ul className="list-inline">
                        <li><i aria-hidden="true" className="fa fa-arrow-right"></i> Company Incorporation</li>
                        <li><i aria-hidden="true" className="fa fa-arrow-right"></i> Business Licenses</li>
                        <li><i aria-hidden="true" className="fa fa-arrow-right"></i> Protecting Brands & Logo</li>
                        <li><i aria-hidden="true" className="fa fa-arrow-right"></i> Accounting & Compliances</li>
                        <li><i aria-hidden="true" className="fa fa-arrow-right"></i> VCFO</li>
                        <li><i aria-hidden="true" className="fa fa-arrow-right"></i> Import Export</li>
                    </ul>
                </div>
            </div>
            <div className="container">

                <div className="row count">
                    <h1>OUR MILESTONE & COUNTING……..</h1>
                    <p>Our aim is to cater all ranges of micro, small and medium enterprises from different sectors.</p>
                    <div className="four col-md-4">
                        <div className="counter-box">

                            <span className="counter">5 </span><span>Lac</span>
                            <sup className="super">+</sup>
                            <h3>CONSULTANCY</h3>
                            <p>Guided new startups how to start businesses without an hassle</p>
                        </div>
                    </div>
                    <div className="four col-md-4">
                        <div className="counter-box bord">
                            <span className="counter">1 </span><span>Lac</span> <sup className="super">+</sup>
                            <h3>HAPPY CLIENTS</h3>
                            <p>Assisted business in company incorporation, business registration, etc</p>
                        </div>
                    </div>
                    <div className="four col-md-4">
                        <div className="counter-box">
                            <span className="counter">100 </span><span></span> <sup className="super">+</sup>
                            <h3>EXPERT STAFF</h3>
                            <p>Trained and Qualified team of professional to serve businesses error free</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="WHY">
                <div className="container">
                    <div className="why_l">
                        <Image src={aboutPic2} alt="" />
                    </div>
                    <div className="why_r">
                        <h1>WE PRACTICE ONLINE, FAST & COST EFFECTIVE</h1>
                        <p>E-Startup India is a team of highly qualified professionals who are driving towards integration of
                            technology with traditional professional practices to cater the need of MSMEs in the fast moving and
                            cost effective world. </p>
                        <div className="butn">
                            <Link href="/">GET START - NOW <div className="icon style-color"><i aria-hidden="true"
                                className="fa fa-arrow-right"></i></div></Link>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>

            {/* <!-- <div class="three_di">
                            <div class="container">

                                <div class="box_01">
                                    <p>Government of India is emphasizing on information technology and digital payments & we committed to them.</p>
                                </div>
                                <div class="box_01 pj">
                                    <p>Our dedicated E-commerce portal helps to choose from variety of online services that suits your business requirement.</p>
                                </div>
                                <div class="box_01">
                                    <p>Boundaries make differences but internet don't. In today era only a player can win the race who use digital tools.</p>
                                </div>
                            </div>
                        </div>--> */}
            <div className="Virtual">
                <Image src={eteam} style={{ width: "100%" }} />
                <div className="container">
                    <h1>CONNECT WITH US TO MAKE STARTUPS DREAM TRUE!</h1>
                    <Link className="v_l" href="/careers" onClick={() => window.scrollTo(0, 0)}>
                        <h3>As a Team</h3>
                        <p>Join us as a <span>Team</span> to serve need of startups</p>
                        {/* <!--  <Image src="img/4845485.png" alt="">
                                            <div class="parent">
                                                <div class="ic_on"><i aria-hidden="true" class="fa fa-arrow-right"></i></div>
                                                <p>Read More — Now</p>
                                            </div> --> */}
                    </Link>
                    <Link className="v_l" href="/partner-with-us" onClick={() => window.scrollTo(0, 0)}>
                        <h3>As a Partner</h3>
                        <p><span>Partner</span> with us to add value for startups with your product / solution</p>
                        {/* <!--  <Image src="img/4845485.png" alt="">
                                            <div class="parent">
                                                <div class="ic_on"><i aria-hidden="true" class="fa fa-arrow-right"></i></div>
                                                <p>Read More — Now</p>
                                            </div> --> */}
                    </Link>
                    <Link className="v_l" href="/" onClick={() => window.scrollTo(0, 0)}>
                        <h3>As a Startup</h3>
                        <p>Consult our experts to take your <span>startups</span> to new heights.</p>
                        {/* <!--  <Image src="img/4845485.png" alt="">
                                            <div class="parent">
                                                <div class="ic_on"><i aria-hidden="true" class="fa fa-arrow-right"></i></div>
                                                <p>Read More — Now</p>
                                            </div> --> */}
                    </Link>
                    <div className="clear"></div>
                </div>
            </div>
            {/* <div className="contact_f">
                <div className="container">

                    <h1><span>Tomorrow can't<br /> wait.</span> Get in touch<br /> today</h1>
                    <form action="" method="post" name="contactus" id="contactus" novalidate="novalidate" onSubmit={fetchContactUs}>
                        <input type="text" name="name" placeholder="Name*" value={name} onChange={handleText} required />
                        <input type="email" name="email" placeholder="Email Address*" value={email} onChange={handleText} required />
                        <input type="text" name="mobile" placeholder="Mobile Number*" value={mobile} onChange={handleText} required />
                        <input type="text" name="subject" placeholder="Subject" value={subject} onChange={handleText} required /><br />
                        <textarea name="message" placeholder="Message*" value={message} onChange={handleText} required rows="3"></textarea>
                        <button type="submit" name="contact_us" id="contactsubmit">
                            {
                                !buttonLoading ? <span id="send_t">Send</span> :
                                    <div className='spinner' id="loader1"><span className='bounce1'></span><span className='bounce2'></span><span
                                        className='bounce3'></span></div>
                            }
                        </button>
                        <div className="clear"></div>
                    </form>
                </div>
            </div> */}
        </>
    )
}
export default About