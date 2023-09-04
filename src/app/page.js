"use client"

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import testimonialPic1 from "../assets/images/r1.webp"
import testimonialPic2 from "../assets/images/r2.webp"
import testimonialPic3 from "../assets/images/r3.webp"
import testimonialPic4 from "../assets/images/r4.webp"
import gicon from "../assets/images/g_icon.webp"
import videoPhoto from "../assets/images/video-bg1.webp"

import Typewriter from 'typewriter-effect';

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/style.css"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlay, faPieChart } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation';


function Index() {

  const router = useRouter()

  const textTyped = useRef(null)

  const [buttonLoading, setButtonLoading] = useState(false)

  const [showModal, setShowModal] = useState(false)

  const [viewMore, setViewMore] = useState(false)

  const [checked, setChecked] = useState(true)

  const [index, setIndex] = useState(0);

  const [text, setText] = useState({
    name: "",
    email: "",
    mobile: "",
  })

  const { name, email, mobile } = text

  const handleText = e => {
    if (mobile.length > 10) {
      alert("number can't be greater than 10 digits")
      return setText({
        mobile: mobile.slice(0, -1)
      })
    }
    setText({ ...text, [e.target.name]: e.target.value })
  }

  const length = 5

  const handlePrevious = () => {
    const newIndex = index - 1
    setIndex(newIndex < 0 ? length - 1 : newIndex)
  }

  const handleNext = () => {
    const newIndex = index + 1
    setIndex(newIndex >= length ? 0 : newIndex)
  }

  const fetchContactUs = (e) => {
    e.preventDefault()
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
      formdata.append("message", "");
      formdata.append("page_name", "index");

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
              name: '',
              email: '',
              mobile: ''
            })
            setButtonLoading(false)
            return router.push('/thank-you')
          }
          // console.log(result)
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {

    const interval = setInterval(handleNext, 3000)

    return () => clearInterval(interval)
  }, [index])

  return (
    <>
      <section className="wow fadeIn example no-padding no-transition slider-top">
        <div style={{ minHeight: "50px" }}>
          <div id="slider1_container" style={{ position: "relative", margin: "0 auto", top: "0px", left: "0px", width: "100%", height: "500px", overflow: "hidden" }}>
            <div data-u="slides"
              style={{ position: "absolute", left: "0px", top: "0px", width: "100%", height: "500px", overflow: "hidden" }}>
              <div className="img_a">
                <div className="above_t">
                  <div id="app">
                    <h1>E-Startup India is Best Known <br />
                      <div style={{ display: 'flex' }}>for&nbsp;
                        <Typewriter
                          options={{
                            strings: ['Company Incorporation', 'Business Registration', 'Business License', 'Compliances', 'CA Consultancy'],
                            autoStart: true,
                            loop: true,
                          }}
                        /></div></h1>

                  </div>
                  {/* <h1>E-Startup India is Best Known <br />for <span className="ityped"></span></h1> */}
                  <button className="arngcall" data-toggle="modal" data-target="#bannerpopup" id="modalOpen" onClick={() => setShowModal(true)}>ARRANGE
                    CALL</button>

                  <a href="https://tawk.to/chat/57453277f633cc8d73fffb0a/default" target="_blank" className="lchat">LIVE
                    CHAT</a><br />
                  <div className="logo_g">
                    <div className="google_logo">
                      <a href="https://play.google.com/store/apps/details?id=com.e_startupindia.e_startup" target="_blank">
                        <img src="https://www.e-startupindia.com/theme/default/images/google_media_logo.webp"
                          className="header-image" alt="app download" data-lazyload-replaced="true" />
                      </a>
                      <p>4.7 of 5</p>
                    </div>
                    <a href="https://play.google.com/store/apps/details?id=com.e_startupindia.e_startup" target="_blank">
                      <img src="https://www.e-startupindia.com/theme/default/images/google-play1.webp" className="image-margin"
                        alt="app download" data-lazyload-replaced="true" style={{ width: "22%", zIndex: "2", marginTop: "1%" }} /></a>
                  </div>
                </div>
                {/* <script type="text/javascript">
                  ityped.init(document.querySelector("#ityped"), {
                    strings: ['Company Incorporation', 'Business Registration', 'Business License', 'Compliances', 'CA Consultancy']
              })
                </script> */}
                <img data-u="image" src="https://www.e-startupindia.com/theme/default/images/ban.webp" className="slider"
                  data-lazyload-replaced="true" />
                <div className="img_slide">
                  <div className="inner_img">
                    <div className="slide">
                      <div style={{ backgroundImage: "url(https://www.e-startupindia.com/theme/default/images/b1.webp)" }}></div>
                      <div style={{ backgroundImage: "url(https://www.e-startupindia.com/theme/default/images/b21.webp)" }}></div>
                      <div style={{ backgroundImage: "url(https://www.e-startupindia.com/theme/default/images/b3.webp)" }}></div>
                      <div style={{ backgroundImage: "url(https://www.e-startupindia.com/theme/default/images/b1.webp)" }}></div>
                      <div style={{ backgroundImage: "url(https://www.e-startupindia.com/theme/default/images/b21.webp)" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="heading">
          <h2>How E-Startup India can help your Business?</h2>
          <h3>We believe in helping businesses at 360* angles so you can focus on your core operations business.</h3>
        </div>
        <div className="services_a row">
          <div className="col-md-8">
            <div className="boxes">
              <span className="fa fa-pie-chart"> </span>
              <h3>Company Formation</h3>
              <p>We can incorporate all kinds of entities required to set up the business such as private limited companies,
                OPC, LLP, Partnership Firm, and many more...</p>
            </div>
            <div className="boxes">
              <img src="https://www.e-startupindia.com/theme/default/images/registration.webp" style={{ width: "18%" }} className="show_1" data-lazyload-replaced="true" />
              <img src="https://www.e-startupindia.com/theme/default/images/registration1.webp" style={{ width: "18%" }}
                className="show_2" data-lazyload-replaced="true" />
              <h3>Business Registration &amp; Licensing</h3>
              <p>We can secure all kinds of licenses / registrations required for running different kinds of business
                legally and hassle free.</p>
            </div>
            <div className="boxes">
              <span className="fa fa-suitcase"> </span>
              <h3>Accounting &amp; Tax Compliances</h3>
              <p>We provide Virtual CFO services which includes not only accounting but billing software, preparation of
                Balance Sheet , P&amp;L Statement, Tax Return filings, ROC filing and many more...</p>
            </div>
            <div className="boxes">
              <img src="https://www.e-startupindia.com/theme/default/images/marketing.webp" style={{ width: "31%" }}
                className="show_1" data-lazyload-replaced="true" />
              <img src="https://www.e-startupindia.com/theme/default/images/marketing1.webp" style={{ width: "31%" }}
                className="show_2" data-lazyload-replaced="true" />
              <h3>Branding &amp; Marketing</h3>
              <p>Logo designing, Trademark, Website Development, Digital Marketing, Do all such activities to create Online
                Business Presence.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="right_img">
              <img src="https://www.e-startupindia.com/theme/default/images/01.webp" />
            </div>
          </div>
        </div>
      </div>
      <div className="home-service h-margin">
        <div className="container">
          <div className="heading">
            <h2>Our Services</h2>
            <h3>Setup &amp; Delivered 2,00,000 + New Companies and Business Licenses for MSMEs in India and continuing…</h3>
          </div>
          <div className="row" style={{ marginRight: "0px", marginLeft: "0px" }}>
            <div className="col-sm-4 ">
              <a href="https://www.e-startupindia.com/company-formation.html" className="home-service-box"
                style={{ textDecoration: "none" }}>
                <div className="home-service-content box_a">
                  <h3><span><i className="fa fa-pencil" aria-hidden="true"></i></span>Company Incorporation</h3>
                  <p>The company incorporation is the process that is basically used to form a corporate entity or the
                    company. The entity can be a Private limited company, One person company, LLP, Partnership firm.</p>
                </div>
              </a>
            </div>
            <div className="col-sm-4">
              <a href="https://www.e-startupindia.com/gst.html" className="home-service-box" style={{ textDecoration: "none" }}>
                <div className="home-service-content box_a">
                  <h3><span><i className="fa fa-money" aria-hidden="true"></i></span>GST Registration</h3>
                  <p>GST Registration is required for firms that have a turnover exceeding INR 20 lakh. Also, the limit is
                    10 lakh in northern hilly states.</p>
                </div>
              </a>
            </div>
            <div className="col-sm-4">
              <a href="https://www.e-startupindia.com/iso-certification.html" className="home-service-box"
                style={{ textDecoration: "none" }}>
                <div className="home-service-content box_a">
                  <h3><span><img src="https://www.e-startupindia.com/theme/default/images/iso.png"
                    className="img-responsive img_2" data-lazyload-replaced="true" /></span> ISO Certification</h3>
                  <p>The ISO certificate helps to enhance the credibility and authority of your company as well as the
                    overall effectiveness of the company.</p>
                </div>
              </a>
            </div>
            <div className="col-sm-4">
              <a href="https://www.e-startupindia.com/trademark.html" className="home-service-box"
                style={{ textDecoration: "none" }}>
                <div className="home-service-content box_a">
                  <h3><span><i className="fa fa-trademark"></i></span>Trademark registration</h3>
                  <p>A trademark registration is the process that proves ownership over the brand, logo, or name. It also
                    protects your brand from any illegal use by a third party.</p>
                </div>
              </a>
            </div>
            <div className="col-sm-4">
              <a href="https://www.e-startupindia.com/patent.html" className="home-service-box" style={{ textDecoration: "none" }}>
                <div className="home-service-content box_a">
                  <h3><span><i className="fa fa-pencil" aria-hidden="true"></i></span>Patent</h3>
                  <p>A patent gives you the right to prevent third parties from copying, using, selling, or importing your
                    discovery without your approval. </p>
                </div>
              </a>
            </div>
            <div className="col-sm-4">
              <a href="https://www.e-startupindia.com/copyright.html" className="home-service-box"
                style={{ textDecoration: "none" }}>
                <div className="home-service-content box_a">
                  <h3><span><i className="fa fa-copyright"></i></span>Copyright</h3>
                  <p>Copyright is the legal right of the owner of intellectual property which means that the creator of
                    products and anyone they give permission to are the only ones with the exclusive right to reproduce the
                    work.</p>
                </div>
              </a>
            </div>
            <div className={`col-sm-4 ${viewMore ? "" : "show_div"}`}>
              <a href="https://www.e-startupindia.com/esi-registration.html" className="home-service-box"
                style={{ textDecoration: "none" }}>
                <div className="home-service-content box_a">
                  <h3><span>
                    <img src="https://www.e-startupindia.com/theme/default/images/esic.webp" className="img-responsive img_2"
                      style={{ width: "auto!important" }} data-lazyload-replaced="true" /></span>ESIC Registration</h3>
                  <p>The ESIC registration provides financial protection to members in event of a sudden health-related
                    circumstance. The program also provides health, disability, maternity privileges, unemployment benefits,
                    etc.</p>
                </div>
              </a>
            </div>
            <div className={`col-sm-4 ${viewMore ? "" : "show_div"}`}>
              <a href="https://www.e-startupindia.com/pf-registration.html" className="home-service-box"
                style={{ textDecoration: "none" }}>
                <div className="home-service-content box_a">
                  <h3><span><img src="https://www.e-startupindia.com/theme/default/images/pf.png"
                    className="img-responsive img_2" style={{ width: "auto!important" }} data-lazyload-replaced="true" /></span>PF
                    registration</h3>
                  <p>The Employee Pension Fund is a social security scheme which helps employees save a small portion of
                    their salary for future benefits. All companies must offer their employees a EPF or Employee Provident
                    Fund that is similar to a pension fund.</p>
                </div>
              </a>
            </div>
            <div className={`col-sm-4 ${viewMore ? "" : "show_div"}`}>
              <a href="https://www.e-startupindia.com/fssai-registration.html" className="home-service-box"
                style={{ textDecoration: "none" }}>
                <div className="home-service-content box_a">
                  <h3 className="img_sh"><span>
                    <img src="https://www.e-startupindia.com/theme/default/images/fssai-logo.webp" />

                  </span>Fssai registration</h3>
                  <p>FSSAI registration is necessary for All the manufacturers, restaurants, and as well as traders who are
                    involved in the food business. This ensures the safety of food products provided or manufactured by
                    different companies in India. </p>
                </div>
              </a>
            </div>
            <div className={`col-sm-4 ${viewMore ? "" : "show_div"}`}>
              <a href="https://www.e-startupindia.com/income-tax-return-filing.html" className="home-service-box"
                style={{ textDecoration: "none" }}>
                <div className="home-service-content box_a">
                  <h3><span><img src="https://www.e-startupindia.com/theme/default/images/income-tax.png"
                    className="img-responsive img_2" style={{ marginTop: "10px", width: "33px" }}
                    data-lazyload-replaced="true" /></span>Income tax return</h3>
                  <p>Income tax return is required for the people whose gross income exceeds the tax exemption limit.</p>
                </div>
              </a>
            </div>
            <div className={`col-sm-4 ${viewMore ? "" : "show_div"}`}>
              <a href="https://www.e-startupindia.com/barcode-registration.html" className="home-service-box"
                style={{ textDecoration: "none" }}>
                <div className="home-service-content box_a">
                  <h3><span><i className="fa fa-barcode" aria-hidden="true"></i></span>Barcode registration</h3>
                  <p>The barcode registration is needed to encode product details like product numbers, serial numbers, and
                    batch numbers instantly which also allows identifying product details easily.</p>
                </div>
              </a>
            </div>
            <div className={`col-sm-4 ${viewMore ? "" : "show_div"}`}>
              <a href="https://www.e-startupindia.com/bookkeeping-and-accounting.html" className="home-service-box"
                style={{ textDecoration: "none" }}>
                <div className="home-service-content box_a">
                  <h3><span><img src="https://www.e-startupindia.com/theme/default/images/accounting.png"
                    className="img-responsive img_2" style={{ width: "auto!important" }}
                    data-lazyload-replaced="true" /></span>Accounting</h3>
                  <p>The Accounting is the systematic process of accounting, analysing, and interpretation of financial
                    operations. Each &amp; Every company, large or small, is responsible for providing its accounting
                    records to the Department of Income Tax.</p>
                </div>
              </a>
            </div>
            <div className={`col-sm-4 ${viewMore ? "" : "show_div"}`}>
              <a href="https://www.e-startupindia.com/import-export-code.html" className="home-service-box"
                style={{ textDecoration: "none" }}>
                <div className="home-service-content box_a">
                  <h3><span><img src="https://www.e-startupindia.com/theme/default/images/iec.webp"
                    className="img-responsive img_2" style={{ marginTop: "10px", width: "16%" }} data-lazyload-replaced="true" /></span>IEC Code</h3>
                  <p>IEC code is required at the time someone is about to kick-start his import/export business in the
                    country and is a key identification number that allows export from India or Import to India.</p>
                </div>
              </a>
            </div>
            <div className="clear"></div>
            <center>
              <div className="">
                <button type="button" id="loadMore" className=" contact-us-btn" onClick={() => setViewMore(!viewMore)}>
                  <h4>{!viewMore ? "View More" : "Hide"}<i className="fa fa-angle-double-right" aria-hidden="true"></i></h4>
                </button>
              </div>
            </center>
          </div>
        </div>
      </div>
      <div className="video_Section">
        <div className="video_h" style={{ backgroundImage: `url(${videoPhoto.src})` }}>
          <div className="v_h">
            <h3>Our Work Process as Video</h3>
            <p>Watch the video to learn how we work for you….</p>
            <a href="https://www.youtube.com/watch?v=caYeIPII4rQ" target="_blank">
              <span id="click_v" data-cf-modified-8ca156bfad9bb0971de7919b->
                <FontAwesomeIcon icon={faPlay} color='#fff'/>
                {/* <i className="fa fa-play" aria-hidden="true"
                style={{ color: "#fff" }}> 
                  </i>*/}
                  </span> </a>
          </div>
          <div id="light">
          </div>
        </div>

        <div className="content_h">
          <div className="heading">
            <h4>Delivering your Expectations</h4>
            <h3>With 15+ Years combined experience and continuously serving &amp; understanding MSMEs needs, we developed a
              strong system to deliver you the error-free services matching your expectations.</h3>
          </div>
          <div className="top">
            <div className="pro">
              <i className="fa fa-cloud-upload"></i>
              <p>Upload Documents via Mobile App</p>
            </div>
            <div className="pro">
              <i className="fa fa-comments" aria-hidden="true"></i>
              <p>Direct Chat/Talk to Working Team</p>
            </div>
            <div className="pro">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <p>Track Order Status Anytime, Anywhere</p>
            </div>
            <div className="pro" style={{ height: "70px" }}>
              <i className="fa fa-inr" aria-hidden="true" style={{ fontSize: "25px" }}></i>
              <p>Pay Online Safely</p>
            </div>
          </div>
        </div>
        <div className="clear"></div>
      </div>
      <div className="testi container">
        <h1>WHAT OUR CLIENTS SAY ABOUT US</h1>
        <div id="carouselTestimonial" className="carousel carousel-testimonial slide" data-ride="carousel">
          {/* <ol className="carousel-indicators">
            <li data-target="#carouselTestimonial" data-slide-to="0"></li>
            <li data-target="#carouselTestimonial" data-slide-to="1"></li>
            <li data-target="#carouselTestimonial" data-slide-to="2"></li>
          </ol> */}
          <div className="carousel-inner">
            <div className={`carousel-item text-center ${index === 0 ? 'active' : ""}`}>
              <div className="carousel-testimonial-img p-1 rounded-circle m-auto">
                <Image className="d-block rounded-circle" src={testimonialPic2} alt="First slide" />
              </div>
              <h5 className="mt-4 mb-0"><strong className="text-warning text-uppercase">Harjeet Khalsa</strong></h5>
              {/* <h6 className="text-dark m-0">Web Developer</h6> */}
              <p className="m-0 pt-3">The Service is Awesome.. Got my job done within my expected time limits.
                The team is excellent in follow up and understanding. I must personally appriciate Ms Preeti and Mr Tarun Kumar for their excellent services.</p>
            </div>
            <div className={`carousel-item text-center ${index === 1 ? 'active' : ""}`}>
              <div className="carousel-testimonial-img p-1 rounded-circle m-auto">
                <Image className="d-block rounded-circle" src={testimonialPic4} alt="First slide" />
              </div>
              <h5 className="mt-4 mb-0"><strong className="text-warning text-uppercase">LakshmiRam J</strong></h5>
              {/* <h6 className="text-dark m-0">Web Designer</h6> */}
              <p className="m-0 pt-3">It's very good website for all the business approvals. The team were excellent and updating daily on whatsapp or over phones. Excellent service</p>
            </div>
            <div className={`carousel-item text-center ${index === 2 ? 'active' : ""}`}>
              <div className="carousel-testimonial-img p-1 rounded-circle m-auto">
                <Image className="d-block rounded-circle" src={testimonialPic3} alt="First slide" />
              </div>
              <h5 className="mt-4 mb-0"><strong className="text-warning text-uppercase">Sriram SI</strong></h5>
              {/* <h6 className="text-dark m-0">Seo Analyst</h6> */}
              <p className="m-0 pt-3">E Startup provides excellent service using technology to track, update and process their services. I did a simple GST registration, though I had lot of issues, it was done efficiently. The contact person ANU was superb in helping in providing the solution. I definitely recommend E- Startup for their professionalism.</p>
            </div>
            <div className={`carousel-item text-center ${index === 3 ? 'active' : ""}`}>
              <div className="carousel-testimonial-img p-1  rounded-circle m-auto">
                <Image className="d-block rounded-circle" src={testimonialPic1} alt="First slide" />
              </div>
              <h5 className="mt-4 mb-0"><strong className="text-warning text-uppercase">KBN ENTERPRISES</strong></h5>
              {/* <h6 className="text-dark m-0">Seo Analyst</h6> */}
              <p className="m-0 pt-3">One of the must greatest Supporting company For running Business Documents.i have Very Good Experience. The E-Startup India Company Team As given Very good Support For K B N Enterprises. And Ms. Anita Diwakar & Mr. Sachin The Both peoples are Very Supportive Persons.</p>
            </div>
            <div className={`carousel-item text-center ${index === 4 ? 'active' : ""}`}>
              <div className="carousel-testimonial-img p-1 rounded-circle m-auto">
                <Image className="d-block rounded-circle" src={gicon} alt="First slide" />
              </div>
              <p className="m-0 pt-3"> For more review connect with us.</p>
              <Link href="/customer-reviews" className="btn_review my-3">More Review</Link>
              {/* <h6 className="text-dark m-0">Seo Analyst</h6> */}
            </div>
          </div>
          <a className="carousel-control-prev" role="button" data-slide="prev">
            <i className="fa fa-chevron-left" aria-hidden="true" onClick={handlePrevious}></i>
          </a>
          <a className="carousel-control-next" role="button" data-slide="next">
            <i className="fa fa-chevron-right" aria-hidden="true" onClick={handleNext}></i>
          </a>
        </div>
      </div>
      <div className="homepagemodal" style={{ display: showModal ? 'block' : 'none', zIndex: 10 }}>
        <h1>Want expert to call you ? <span id="homepagemodal_Close" onClick={() => setShowModal(false)}>x</span></h1>
        <form className="enquiry-form" onSubmit={fetchContactUs}>
          <input type="text" name="name" placeholder="Name" maxLength="100" required value={name} onChange={handleText} />
          <input type="number" name="mobile" placeholder="Mobile Number" maxLength="10" required value={mobile.substring(0, 10)} onChange={handleText} />
          <input type="email" name="email" placeholder="Email" maxLength="50" required value={email} onChange={handleText} />
          <div className="in_put">
            <p className="what_in"><input style={{ cursor: 'pointer' }} type="checkbox" checked={checked} onChange={() => setChecked(!checked)} /> Send updates on Whatsapp</p>
            <span className="what_noti">I agree to <Link href="/terms-and-conditions" target="_blank" rel='noopener noreferrer'>terms</Link> and <Link
              href="/privacy-policy" target="_blank" rel='noopener noreferrer'>privacy policy</Link></span>
          </div>
          <button type="submit" name="WantExpertToCallYou" value="WantExpertToCallYou">
            {
              !buttonLoading ?
                <span id="send_t" style={{ color: "#fcc813" }}>Submit</span> : <div className='spinner' id="loader1"><span className='bounce1'></span><span className='bounce2'></span><span className='bounce3'></span></div>
            }
          </button>
        </form>
        <p>Call Support : <a href="tel:+918881069069"> 8881069069 </a>( Mon- Sat , From 10 AM to 6 PM )</p>
      </div>
    </>
  )
}

export default Index

