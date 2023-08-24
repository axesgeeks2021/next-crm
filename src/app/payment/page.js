"use client"

import React, {useState} from 'react'
import logo from "../../assets/images/e-startup.webp"
import mobile from "../../assets/images/mobilev.png"
import download from "../../assets/images/download.png"
import google from "../../assets/images/google-play-icon.png"

import Image from 'next/image'

import "bootstrap/dist/css/bootstrap.min.css"

function page() {

    const [buttonLoading, setButtonLoading] = useState(false)

    return (
        <>
            <div id="paymentpage-container" style={{ position: 'relative' }}>
                <div id="desktop-container">
                    <div className="content-container">
                        <div className="content">
                            <div id="header-details">
                                <div id="header-logo"><Image alt="merchant-logo" src={logo} style={{ width: "200px" }} />
                                </div>
                            </div>
                            <div data-view-id="1" id="main-view" className="slider-view">
                                <div className="title"><a slot="before" href="#" className="back-btn" type="button"></a>
                                    PAYMENT DETAILS
                                    <div className="title-underline"></div>
                                </div>
                                <div id="form-section" className="">
                                    <form className="UI-form " noValidate="">
                                        <div>
                                            <div>
                                                <div className="Field Field--required Field--amount Field--currency-1">
                                                    <div className="Field-label">Amount
                                                    </div>
                                                    <div className="Field-content">
                                                        <div className="Field-wrapper"><span
                                                            className="Field-addon Field-addon--before"><span
                                                                slot="addonBefore">
                                                                <b className="currency-symbol">₹</b></span></span>
                                                            <input className="Field-el" type="number" placeholder="Enter Amount"
                                                                required="" />
                                                            <span className="Field-addon Field-addon--after"><span slot="addonAfter"
                                                                style={{ color: "red", fontSize: "12px" }}></span></span>
                                                        </div>
                                                        <div className="Field-error"></div>
                                                        <div className="Field-description"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="Field Field--required">
                                                <div className="Field-label">Email
                                                </div>
                                                <div className="Field-content">
                                                    <div className="Field-wrapper"><span className="Field-addon "></span>
                                                        <input className="Field-el" name="email" required="" type="text" />
                                                        <span className="Field-addon "></span>
                                                    </div>
                                                    <div className="Field-error"></div>
                                                    <div className="Field-description"></div>
                                                </div>
                                            </div>
                                            <div className="Field Field--required">
                                                <div className="Field-label">Mobile
                                                </div>
                                                <div className="Field-content">
                                                    <div className="Field-wrapper"><span className="Field-addon "></span>
                                                        <input className="Field-el" name="phone" required="" type="tel"
                                                            minLength="8" />
                                                        <span className="Field-addon "></span>
                                                    </div>
                                                    <div className="Field-error"></div>
                                                    <div className="Field-description"></div>
                                                </div>
                                            </div>
                                            <div className="Field">
                                                <div className="Field-label">GSTIN if any
                                                    <div className="text-optional">(Optional)</div>
                                                </div>
                                                <div className="Field-content">
                                                    <div className="Field-wrapper"><span className="Field-addon "></span>
                                                        <input className="Field-el" name="gstin_if_any" type="text" />
                                                        <span className="Field-addon "></span>
                                                    </div>
                                                    <div className="Field-error"></div>
                                                    <div className="Field-description">Required for GST Tax Invoice. If not provided
                                                        ITC shall not be available</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div slot="after">
                                            <div id="form-footer" className="">
                                                <div className="form-footer-payment"><Image id="fin-logo" alt="pay-methods"
                                                    src="https://cdn.razorpay.com/static/assets/pay_methods_branding.png"
                                                    width="180" height="10" />
                                                    <button type="submit" className="btn btn--gradient">
                                                        {
                                                            !buttonLoading ?
                                                                <span id="send_t">Pay
                                                                    Now</span> :
                                                                <div className='spinner' id="loader1"><span className='bounce1'></span><span
                                                                    className='bounce2'></span><span className='bounce3'></span></div>
                                                        }
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="infoa">
                                <div className="title title--big">
                                    PAY ONLINE
                                    <div className="title-underline"></div>
                                </div>
                                <h2>Download E-Startup App and get realtime update on your order status.</h2>
                                <Image src={mobile} className="img_1a" style={{ width: "134px", marginTop: "3%", marginRight: "2%" }} />
                                <a href="">
                                    <Image src={download} className="img_2a" style={{ position: "absolute", width: "105px", marginTop: "5%" }} />
                                    <Image src={google} className="img_3a" style={{ width: "115px", marginTop: "12%" }} /></a>
                                <div className="social_ioc">
                                    <h2>Follow Us</h2>
                                    <ul>
                                        <li ><a to="https://twitter.com/e_STARTUP_India" target="_blank"><i
                                            className="fa fa-twitter"></i></a></li>
                                        <li><a href="https://www.facebook.com/estartupindia" target="_blank"><i
                                            className="fa fa-facebook"></i></a></li>
                                        <li><a href=" https://www.instagram.com/estartupindia1/   " target="_blank"><i
                                            className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href=" https://www.linkedin.com/company/e-startupindia" target="_blank"><i
                                            className="fa fa-linkedin"></i></a></li>
                                        <li><a href="https://www.youtube.com/channel/UC9Y3XVrwcKSPfyk8lGdWNMA/videos"
                                            target="_blank"><i className="fa fa-youtube"></i></a></li>
                                        <li><a href="https://t.me/estartupindia" target="_blank"><i className="fa fa-telegram"
                                            aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page