"use client"
import React, { useState, useEffect } from 'react'

import logo from "../../assets/images/e-startup_logo.webp"

import { useRouter } from 'next/navigation'
import { toast } from "react-toastify"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faStar, faArrowLeft, faUser, faEnvelope, faMobile, faInr } from "@fortawesome/free-solid-svg-icons"

function PackagesDetails(props) {

  const router = useRouter()

  const [packagesDetails, setPackagesDetails] = useState([])
  const [loginForm, setLoginForm] = useState(false)
  const [forgetForm, setForgetForm] = useState(false)
  const [signUpForm, setSignUpForm] = useState(false)
  const [buttonLoading, setButtonLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const [packageIndex, setPackageIndex] = useState({
    index: -1,
    id: null,
    amount: 1009,
  })

  const [text, setText] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    username: "",
    forgetEmail: ""
  })

  const { email, mobile, name, password, username, forgetEmail } = text

  const handleText = e => {
    if (mobile.length > 10) {
      alert("number can't be greater than 10 digits")
      return setText({
        mobile: mobile.slice(0, -1)
      })
    }
    setText({ ...text, [e.target.name]: e.target.value })
  }

  const fetchPackages = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Cookie", "PHPSESSID=urud542qqos27p0r7b4c21c554");

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      const url = `https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/package/package-list/${props.service.data.page_id}/`;

      const res = await fetch(url, requestOptions)
      const data = await res.json()
      setPackagesDetails(data)
      // console.log("packages",data)
      return data

    } catch (error) {
      console.log(error)
    }
  }

  const fetchCreateOrder = async () => {

    try {
      const auth = localStorage.getItem('auth')
      const parseData = JSON.parse(auth)

      const myHeaders = new Headers();
      myHeaders.append("Cookie", "PHPSESSID=b4th9dktt364lh1b1n9l32df27");

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`https://e-startupindia.com/lib/app/AHFI678SHJF23309FS/order/create-order-w/${parseData.user_id}/${packageIndex.id}/`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result?.status) {
            try {
              var options = {
                "key": "rzp_test_B9ekt06pNNhrac", // Enter the Key ID generated from the Dashboard
                "amount": result?.txn_details?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "E-startup", //your business name
                "description": props.service.data?.slug,
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

  const signUp = (e) => {
    e.preventDefault()
    try {
      setButtonLoading(true)
      const myHeaders = new Headers();
      myHeaders.append("Cookie", "PHPSESSID=sshqppusshc51f54dmtjcc5n95");

      const formdata = new FormData();
      formdata.append("email_address", email);
      formdata.append("password", password);
      formdata.append("user_name", name);
      formdata.append("mobile_number", mobile);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      fetch(`https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/profile/signup/`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.status === true) {
            localStorage.setItem('auth', JSON.stringify(result.detais))
            fetchCreateLead(result?.detais?.name,result?.detais?.mobile, result?.detais?.email )
            const OrderData = fetchCreateOrder()
            setButtonLoading(false)
          }
          if (result.status === false) {
            setButtonLoading(false)
            return toast.warn(result.error)
          }
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error)
    }
  }

  const login = (e) => {
    e.preventDefault()
    try {
      setButtonLoading(true)
      const myHeaders = new Headers();
      myHeaders.append("Cookie", "PHPSESSID=mj6c6i5mcnv328sgb4gl1dh5e5");

      const formdata = new FormData();
      formdata.append("email_address", email);
      formdata.append("password", password);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      fetch(`https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/profile/signin/`, requestOptions)
        .then(response => response.json())
        .then(result => {
          // const loadingId = toast.loading('Please wait...')

          if (result.status === false) {
            setButtonLoading(false)
            return toast.warn(result.error)
            // return toast.update(loadingId, { render: result.error, isLoading: false, type: "error", autoClose: true })
          }

          if (result.status === true) {
            // toast.update(loadingId, { isLoading: false, autoClose: true })
            localStorage.setItem('auth', JSON.stringify(result.detais))

            fetchCreateLead(result?.detais?.name,result?.detais?.mobile, result?.detais?.email )

            const OrderData = fetchCreateOrder()
            setButtonLoading(false)
          }
          // console.log(result)
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error)
    }
  }

  const emailSendForVerify = (e) => {
    e.preventDefault()
    try {
      setButtonLoading(true)
      const myHeaders = new Headers();
      myHeaders.append("Cookie", "PHPSESSID=2ajlhfv1d3thp1f53kff2ndsb2");

      const formdata = new FormData();
      formdata.append("email_address", forgetEmail);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      fetch("https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/profile/validate-email/", requestOptions)
        .then(response => response.json())
        .then(result => {
          setButtonLoading(false)
          if (result.status) {
            setText({
              forgetEmail: ""
            })
            return toast.success(result.message)
          }

          if (!result.status) {
            return toast.warn(result.error)
          }

        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error)
    }
  }

  
  const fetchCreateLead = (name, mobile, email) => {
    try {
      setButtonLoading(true)
      const myHeaders = new Headers();
      myHeaders.append("Cookie", "PHPSESSID=4ub1np3ef9h7rtt1t56vs9ei43");

      const formdata = new FormData();
      formdata.append("ClientName", name);
      formdata.append("ClientMobile", mobile);
      formdata.append("ClientMessage", "");
      formdata.append("LeadSource", "36");
      formdata.append("LeadHost", "localhost");
      formdata.append("LeadService", props?.service?.data?.service_id);
      formdata.append("ClientEmail", email);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      fetch("https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/order/create-lead-w/", requestOptions)
        .then(response => response.json())
        .then(result => {
          setButtonLoading(false)
          console.log(result)
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error)
    }
  }

  const showForgetForm = () => {
    setForgetForm(false)
    setLoginForm(true)
    setSignUpForm(false)
  }

  const showSIgnUpForm = () => {
    setForgetForm(true)
    setLoginForm(true)
    setSignUpForm(true)
  }

  const showLoginForm = () => {
    setLoginForm(false)
    setForgetForm(true)
    setSignUpForm(false)
  }

  useEffect(() => {
    const subscribe = fetchPackages()

    return () => subscribe
  }, [])
  return (
    <>
      <section className="pacakage" id="e-startup_package">
        <div className="container">
          {packagesDetails?.detais?.length > 0 ?
            <h5 className="custom-text"><span>PACKAGES</span></h5>
            : null}
          <div className="row package_display">
            {
              packagesDetails?.detais?.map((ele, idx) => {
                if (ele?.amount === "0") {
                  return null
                }

                return (
                  <div className="col-sm-4" key={idx}>
                    <div className="card basic row">
                      <div className={`card-front ${packageIndex.index === idx ? 'flip' : ''}`}>
                        <div className="pacakage-box text-center">
                          <div className="pacakage-header">
                            <h3>{ele?.title}</h3>
                            <p>
                              {
                                [...Array(idx + 1)].map((_, idx) => {
                                  return (
                                    <FontAwesomeIcon icon={faStar} key={idx} />
                                  )
                                })
                              }
                            </p>
                          </div>
                          <div className="pacakage-price">
                            <h3>
                              <FontAwesomeIcon icon={faInr} /> {ele?.amount} <br /><small><i>Plus
                                taxes</i></small></h3>
                          </div>
                          <div className="pacakage-content" dangerouslySetInnerHTML={{ __html: ele?.description }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '6px' }}>
                          </div>
                          <button className="marginT40 basic-btn" onClick={() => setPackageIndex({
                            index: idx,
                            id: ele?.package_id,
                            amount: ele?.amount
                          })
                          }>LET's START</button>
                        </div>
                      </div>
                      <div className={`card-back ${packageIndex.index === idx ? 'flip' : ''}`}>
                        <FontAwesomeIcon className="fa fa-arrow-left gob" color='white' icon={faArrowLeft} onClick={() => setPackageIndex({
                          index: -1,
                          id: null,
                          amount: 0
                        })} />
                        {/*<i className="fa fa-arrow-left gob" aria-hidden="true" ></i> */}
                        <div className="ui-form-01">
                          <form className="tab-1" style={{ display: !signUpForm ? 'none' : 'block' }} onSubmit={signUp}>
                            <input type="hidden" name="signup_package" value="111159" />
                            <div className="ui-form-01-wraper">
                              <p><span>Signup</span></p>
                              <p className="package-signup-error"></p>
                              <div className="input-icon">
                                <input type="text" placeholder="Name" name="name" value={name} onChange={handleText}
                                  maxlength="100" required />
                                <FontAwesomeIcon icon={faUser} className="icofont icofont-ui-user" color='#000' style={{ cursor: 'pointer' }} />
                                {/*<i className="icofont icofont-ui-user"></i> */}
                              </div>
                              <div className="input-icon">
                                <input type="email" placeholder="Email Address" name="email"
                                  value={email} maxlength="100" onChange={handleText} required />
                                <FontAwesomeIcon icon={faEnvelope} className="icofont icofont-email" color='#000' />
                                {/* <i className="icofont icofont-email"></i> */}
                              </div>
                              <div className="input-icon">
                                <input type="tel" placeholder="Mobile No." name="mobile" value={mobile} onChange={handleText}
                                  maxlength="10" required />
                                <FontAwesomeIcon icon={faMobile} className="icofont icofont-mobile-phone" color='#000' />
                                {/* <i className="icofont icofont-mobile-phone"></i>*/}
                              </div>
                              <div className="input-icon " >
                                <input type="password" placeholder="Password" name="password" value={password} onChange={handleText}
                                  maxlength="10" required />
                                {
                                  showPassword ? <FontAwesomeIcon icon={faEye} color='#000' onClick={() => setShowPassword(false)} /> : <FontAwesomeIcon icon={faEyeSlash} color='#000' onClick={() => setShowPassword(true)} />
                                }
                              </div>
                              <p className="package-processing"></p>
                              <button type="submit" className="btn-default" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {
                                  !buttonLoading ? 'Submit' : <div class='spinner' id="loader1"><span class='bounce1' style={{ background: 'white' }}></span><span
                                    class='bounce2' style={{ background: 'white' }}></span><span class='bounce3' style={{ background: 'white' }}></span></div>
                                }
                              </button>
                              <p className="log" onClick={showLoginForm}>Login</p>
                            </div>
                          </form>
                          <form className="tab-2" id="login_form" name="frmPackageSignin1" style={{ display: !loginForm ? 'block' : 'none' }} onSubmit={login}>
                            <input type="hidden" name="login_package" value="111159" />
                            <div className="ui-form-01-wraper">
                              <p><span>Login</span></p>
                              <p className="package-login-error"></p>
                              <div className="input-icon">
                                <input type="text" placeholder="Email Address" name="email"
                                  value={email} maxlength="100" onChange={handleText} required />
                                <FontAwesomeIcon icon={faUser} className="icofont icofont-ui-user" color='#000' style={{ cursor: 'pointer' }} />
                                {/* <i className="icofont icofont-ui-user"></i> */}
                              </div>
                              <div style={{ position: "relative" }}>
                                <input type={!showPassword ? "password" : "text"} placeholder="Password" name="password"
                                  id="login_password-2" maxlength="50" value={password} onChange={handleText} required />
                                <div
                                  style={{ position: "absolute", right: 0, width: "30px", overflow: "hidden", top: 0, height: "40px" }}>
                                  <input type="checkbox"
                                    style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, opacity: 0, width: "100%", minWidth: "100%" }} />
                                  {
                                    showPassword ? <FontAwesomeIcon icon={faEye} color='#000' style={{ marginTop: '9px', cursor: 'pointer', position: "relative", right: '3px' }} onClick={() => setShowPassword(false)} /> : <FontAwesomeIcon icon={faEyeSlash} color='#000' style={{ marginTop: '9px', cursor: 'pointer', position: "relative", right: '3px' }} onClick={() => setShowPassword(true)} />
                                  }
                                </div>
                              </div>
                              <p className="package-processing"></p>
                              <button type="submit" className=" btn-default" name="user_login" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {!buttonLoading ? 'Login'
                                  : <div class='spinner' id="loader1"><span class='bounce1' style={{ background: 'white' }}></span><span
                                    class='bounce2' style={{ background: 'white' }}></span><span class='bounce3' style={{ background: 'white' }}></span></div>
                                }
                              </button>
                              <p className="sig" onClick={showSIgnUpForm}>Signup</p>
                              <p style={{ color: "red" }} onClick={showForgetForm}>Forgot Password</p>
                            </div>
                          </form>
                          <form id="forget_pass" style={{ padding: "5%", display: !forgetForm ? 'block' : 'none' }} onSubmit={emailSendForVerify}>
                            <p style={{ color: "#fff" }}>Please enter your registered email id. Password will be sent on email address.</p>
                            <div class="forget_pss">
                              <input placeholder="Email Address" required type="email" value={forgetEmail} onChange={handleText} name='forgetEmail' style={{ height: "44px", padding: "4%" }} />
                            </div>
                            <button type="submit" class="log-btn login-btn send_email" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            {
                              !buttonLoading ? <span>Send Email</span> : <div className='spinner' id="loader1" ><span className='bounce1' style={{ background: '#fff' }}></span><span
                              className='bounce2' style={{ background: '#fff' }}></span><span className='bounce3' style={{ background: '#fff' }}></span></div>
                            }
                            </button>
                            <p className="log" style={{color: "#fcc813", textAlign: 'center', fontWeight: '600',cursor: 'pointer'}} onClick={showLoginForm}>Login</p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default PackagesDetails