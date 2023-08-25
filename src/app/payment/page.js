"use client"

import React, { useState } from 'react'
import logo from "../../assets/images/e-startup.webp"
import mobile from "../../assets/images/mobilev.png"
import download from "../../assets/images/download.png"
import google from "../../assets/images/google-play-icon.png"

import { useRouter } from 'next/navigation'
import Image from 'next/image'

import "bootstrap/dist/css/bootstrap.min.css"

function page() {

    const router = useRouter()

    const [buttonLoading, setButtonLoading] = useState(false)

    const [loading, setLoading] = useState(false)

    const [text, setText] = useState({
        amount: "",
        email: "",
        mobile: "",

    })

    const fetchCreateOrder = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            setButtonLoading(true)
            const auth = localStorage.getItem('auth')
            const parseData = JSON.parse(auth)

            const myHeaders = new Headers();
            myHeaders.append("Cookie", "PHPSESSID=b4th9dktt364lh1b1n9l32df27");

            const requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(`https://e-startupindia.com/lib/app/AHFI678SHJF23309FS/order/create-order-w/${parseData.user_id}/04/`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    setLoading(false)
                    setButtonLoading(false)
                    if (result?.status) {
                        try {
                            var options = {
                                "key": "rzp_test_B9ekt06pNNhrac", // Enter the Key ID generated from the Dashboard
                                "amount": result?.txn_details?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                                "currency": "INR",
                                "name": "E-startup", //your business name
                                "description": "Payment Page",
                                "image": logo,
                                "order_id": result?.txn_details?.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                                "handler": function (response) {
                                    try {
                                        const myHeaders = new Headers();
                                        myHeaders.append("Cookie", "PHPSESSID=1umelcn801iobt7m98g43ph1s5");

                                        const formdata = new FormData();
                                        formdata.append("amount", result?.txn_details?.amount);
                                        formdata.append("order_id", result?.order_id);
                                        formdata.append("transaction_id", response.razorpay_payment_id);

                                        const requestOptions = {
                                            method: 'POST',
                                            headers: myHeaders,
                                            body: formdata,
                                            redirect: 'follow'
                                        };

                                        fetch("https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/order/razorpay-payment-w/", requestOptions)
                                            .then(response => response.json())
                                            .then(result => {
                                                if (result.status) {
                                                    router.push('/thank-you')
                                                    return window.scrollTo(0, 0)
                                                }
                                            })
                                            .catch(error => console.log('error', error));
                                    } catch (error) {
                                        console.log(error)
                                    }
                                },
                                "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                                    "name": parseData?.name, //your customer's name
                                    "email": parseData?.email,
                                    "contact": parseData?.mobile  //Provide the customer's phone number for better conversion rates 
                                },
                                "notes": {
                                    "address": "Razorpay Corporate Office"
                                },
                                "theme": {
                                    "color": "#3399cc"
                                }
                            };
                            const rzp1 = new Razorpay(options);
                            rzp1.on('payment.failed', (response) => {
                                console.log('error', response)
                            })

                            rzp1.open();

                        } catch (error) {
                            console.log(error)
                        }
                    }
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div id="paymentpage-container" style={{ position: 'relative' }}>
                <div id="desktop-container">
                    <div className="content-container">
                        <div className="content">
                            <div id="header-details">
                                <div id="header-logo"><Image alt="merchant-logo" src={logo} width={400} height={180} />
                                </div>
                            </div>
                            <div data-view-id="1" id="main-view" className="slider-view">
                                <div className="title"><a slot="before" href="#" className="back-btn" type="button"></a>
                                    PAYMENT DETAILS
                                    <div className="title-underline"></div>
                                </div>
                                <div id="form-section" className="">
                                    <form className="UI-form " onSubmit={fetchCreateOrder}>
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