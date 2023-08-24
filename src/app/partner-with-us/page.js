"use client"
import React, {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'


function page() {

    const [buttonLoading, setButtonLoading] = useState(false)

    const [text, setText] = useState({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
    })

    const { email, message, name, mobile, subject } = text

    const handleText = e => {
        if (mobile.length > 10) {
            alert("number can't be greater than 10 digits")
            return setText({
                mobile: mobile.slice(0, -1)
            })
        }
        setText({ ...text, [e.target.name]: e.target.value })
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
            formdata.append("subject", subject);
            formdata.append("message", message);
            formdata.append("page_name", "partner-with-us");

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/order/contact-message/", requestOptions)
                .then(response => response.json())
                .then(result => {
                    setButtonLoading(false)
                    if (result.status) {
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
            <section class="steps-container">
                <div class="partners_ban partners_ban1">
                    <div class="container">
                        <div class="baner_p">
                            <h2>Join Partnership with <br />E-Startup India</h2>
                            <p>E-Startup India caters to micro and small businesses in India. Helping startups to start their business in
                                any sector and industry. If you deal in B2B products, the E-Startup India partnership can be your business
                                growth enabler. </p>
                            <a href="#contactus">Become Partner</a>
                        </div>
                        <div class="baner_img">
                            <img src="https://www.e-startupindia.com/theme/template/img/1a.png" data-lazyload-replaced="true" />
                        </div>
                    </div>
                </div>
                <div class="container">
                    <h1 class="hd">OUR PARTNERS</h1>
                    <div class="main1">
                        <h3 class="hbg">partners</h3>
                        <div class="partner-box">
                            <div class="partner-img">
                                <img src="https://www.e-startupindia.com/theme/template/img/instabill_banking.webp"
                                    data-lazyload-replaced="true" />
                            </div>
                            <div class="about_partner">
                                <span>1</span>
                                <div class="part_r">
                                    <h3>Instabill</h3>
                                    <p>Instabill is a GST Invoicing tool by which GST Registered businesses can create, and share Tax Invoices
                                        with their customers. E-Startup India helping Instabill acquire GST Registered Business owners.</p>
                                </div>
                            </div>
                        </div>
                        <div class="partner-box bott">
                            <div class="partner-img">
                                <img src="https://www.e-startupindia.com/theme/template/img/Logo_Axis_Bank.png"
                                    data-lazyload-replaced="true" />
                            </div>
                            <div class="about_partner">
                                <span class="a">2</span>
                                <div class="part_r">
                                    <h3>Axis Bank</h3>
                                    <p>Axis Bank endorses E-Startup India's legal and professional services to Axis Bank’s NRI clients for
                                        their client legal and tax compliances.</p>
                                </div>
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="partner-box bott">
                            <div class="partner-img">
                                <img src="https://www.e-startupindia.com/theme/default/images/ng_media_logo.webp"
                                    data-lazyload-replaced="true" />
                            </div>
                            <div class="about_partner">
                                <span class="b">3</span>
                                <div class="part_r">
                                    <h3>Neo Growth</h3>
                                    <p>Neo-Growth is NBFC Company that offers various Loan products. E-Startup India extends loan requirements
                                        of their MSME clients to Neo Growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="partner-box bott1">
                            <div class="partner-img">
                                <img src="https://www.e-startupindia.com/theme/default/images/icici_bank_media_logo.webp"
                                    data-lazyload-replaced="true" />
                            </div>
                            <div class="about_partner">
                                <span class="c">4</span>
                                <div class="part_r">
                                    <h3>ICICI Bank</h3>
                                    <p>ICICI is the leading Bank in India. E-Startup India gives a seamless experience to businesses that
                                        require current bank accounts anywhere across India.</p>
                                </div>
                            </div>
                        </div>
                        <div class="partner-box bott2">
                            <div class="partner-img">
                                <img src="https://www.e-startupindia.com/theme/template/img/aws.png" data-lazyload-replaced="true" />
                            </div>
                            <div class="about_partner">
                                <span class="d">5</span>
                                <div class="part_r">
                                    <h3>AWS</h3>
                                    <p>AWS is one of the Top hosting and service providers. E-Startup India helps startups onboard their
                                        website, applications, and other online platforms on AWS servers.</p>
                                </div>
                            </div>
                        </div>
                        <div class="partner-box bott1" style={{ width: "43%" }}>
                            <div class="partner-img">
                                <img src="https://www.e-startupindia.com/theme/default/images/razorpay.png" data-lazyload-replaced="true" />
                            </div>
                            <div class="about_partner">
                                <span class="c">6</span>
                                <div class="part_r">
                                    <h3>Razorpay</h3>
                                    <p>Razorpay is leading Payment Gateway fintech company. Razorpay recently launched its new product,
                                        Current Bank Account and Corporate Credit Card. E-Startup India helping Razorpay acquire customers for
                                        their new products.</p>
                                </div>
                            </div>
                        </div>
                        <div class="partner-box bott" style={{ marginTop: "-5%" }}>
                            <div class="partner-img">
                                <img src="https://www.e-startupindia.com/theme/template/img/Payoneer.png" data-lazyload-replaced="true" />
                            </div>
                            <div class="about_partner">
                                <span class="d">7</span>
                                <div class="part_r">
                                    <h3>Payoneer </h3>
                                    <p>Payoneer is neo bank provides cross-border remittance solutions for businesses. E-Startup India help to
                                        open bank account globally which help startups to send &amp; collect payments internationally.</p>
                                </div>
                            </div>
                        </div>
                        <div class="partner-box bott1" style={{ width: "43%", marginTop: "1%" }}>
                            <div class="partner-img">
                                <img src="https://www.e-startupindia.com/theme/default/images/mercury-logo-horizontal-_1_.webp"
                                    data-lazyload-replaced="true" />
                            </div>
                            <div class="about_partner">
                                <span class="c">8</span>
                                <div class="part_r">
                                    <h3>Mercury</h3>
                                    <p>Mercury is a financial technology company, not a bank. Banking services provided by Choice Financial
                                        Group and Evolve Bank &amp; Trust, Members FDIC. E-Startup India helps open bank account for companies
                                        incorporated outside India</p>
                                </div>
                            </div>
                        </div>
                        <div class="partner-box bott" style={{ marginTop: "-5%" }}>
                            <div class="partner-img">
                                <img src="https://www.e-startupindia.com/theme/template/img/equitas.webp" data-lazyload-replaced="true" />
                            </div>
                            <div class="about_partner">
                                <span class="d">9</span>
                                <div class="part_r">
                                    <h3>Equitas</h3>
                                    <p>Equitas a new age bank in India. E-Startup India helps to open current bank account for small business
                                        at minimum amount opening cheque.</p>
                                </div>
                            </div>
                        </div>
                        <div class="partner-box bott1" style={{ width: "43%", marginTop: "1%" }}>
                            <div class="partner-img">
                                <img src="https://www.e-startupindia.com/theme/template/img/idfc.webp" data-lazyload-replaced="true" />
                            </div>
                            <div class="about_partner">
                                <span class="c">10</span>
                                <div class="part_r">
                                    <h3>IDFC</h3>
                                    <p>IDFC First Bank is leading Bank of India. E-Startup India clients exclusively enjoy to open current
                                        bank a/c in IDFC bank at 0 balance.</p>
                                </div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </section>
            <div class="become_p" id="contactus">
                <div class="container">
                    <div class="inner_partnere">
                        <h1>Connect with our team
                            and
                            Explore the Possibilities of Partnering</h1>
                        <form onSubmit={fetchContactUs}>
                            <div class="partner_f">
                                <label htmlFor='name'>Name</label>
                                <input type="text" name="name" id='name' value={name} onChange={handleText} required />
                            </div>
                            <div class="partner_f">
                                <label htmlFor='email'>Email</label>
                                <input type="email" name="email" id='email' value={email} onChange={handleText} required />
                            </div>
                            <div class="partner_f">
                                <label htmlFor='mobile'> Mobile Number</label>
                                <input type="number" name="mobile" id='mobile' value={mobile.substring(0, 10)} onChange={handleText} required />
                            </div>
                            <div class="partner_f">
                                <label htmlFor='message'> Message</label>
                                <textarea rows="2" id='message' name='message' value={message} onChange={handleText}></textarea>
                            </div>
                            <button type='submit'>
                                {
                                    !buttonLoading ? <span id="send_t">Submit</span> : <div class='spinner' id="loader1"> <span class='bounce1'></span><span class='bounce2'></span><span
                                        class='bounce3'></span></div>
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page