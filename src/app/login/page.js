"use client"

import React, { useState } from 'react'

import { toast } from 'react-toastify'
import logo from "../../assets/images/e-startup.webp"
import "bootstrap/dist/css/bootstrap.min.css"
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from 'next/navigation'


function page() {

    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const [buttonLoading, setButtonLoading] = useState(false)

    const [forgetModal, setForgetModal] = useState(false)
    const [signUpModal, setSignUpModal] = useState(false)

    const [showPassword, setShowPassword] = useState(false)
    const [showRepeatPassword, setShowRepeatPassword] = useState(false)

    const [forgetEmail, setForgetEmail] = useState('')

    const [value, setValue] = useState({
        email: '',
        password: '',
        name: '',
        mobile: "",
        repeatPassword: ""
    })

    const { email, password, mobile, name, repeatPassword } = value

    const handleChange = e => {
        if (mobile.length > 10) {
            alert("number can't be greater than 10 digits")
            return setText({
                mobile: mobile.slice(0, -1)
            })
        }
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const userLogin = (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            setButtonLoading(true)
            const myHeaders = new Headers();
            myHeaders.append("Cookie", "PHPSESSID=362v4rclvkabndlavc8aq5ggs3");

            const formdata = new FormData();
            formdata.append("email_address", email);
            formdata.append("password", password);

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/profile/signin/", requestOptions)
                .then(response => response.json())
                .then(result => {
                    setLoading(false)
                    setButtonLoading(false)
                    console.log(result)
                    if (result.status === true) {
                        setValue({
                            name: "",
                            email: "",
                            mobile: "",
                            password: ""
                        })
                        localStorage.setItem('auth', JSON.stringify(result))
                        // return navigate('/')
                        return
                    }

                    return alert(result.error)
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error)
        }
    }

    const signUp = (e) => {
        e.preventDefault()

        if (repeatPassword !== password) {
            return toast.warn("Password Mismatch!")
        }

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
                    setButtonLoading(false)
                    if (result.status === true) {
                        setValue({
                            name: "",
                            email: "",
                            mobile: "",
                            password: "",
                            repeatPassword: ""
                        })
                        localStorage.setItem('auth', JSON.stringify(result.detais))
                        return
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

    // const forgotPassword = () => {
    //     try {
    //         setLoading(false)
    //         const myHeaders = new Headers();
    //         myHeaders.append("Cookie", "PHPSESSID=362v4rclvkabndlavc8aq5ggs3");

    //         const formdata = new FormData();
    //         formdata.append("email_address", email);

    //         const requestOptions = {
    //             method: 'POST',
    //             headers: myHeaders,
    //             body: formdata,
    //             redirect: 'follow'
    //         };

    //         fetch("https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/profile/forgot-password/", requestOptions)
    //             .then(response => response.json())
    //             .then(result => {
    //                 setLoading(false)
    //                 if(result.status){
    //                     return toast.success(result.message)
    //                 }
    //                 return toast.warn(result.error)
    //             })
    //             .catch(error => console.log('error', error));
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

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
                        setForgetEmail('')
                        toast.success(result.message)
                        return router.push('/reset-password')
                        // setTimeout(() => {
                        // }, 1300);
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

    const handleLoginForm = () => {
        setValue({
            email: "",
            mobile: "",
            name: "",
            password: "",
            repeatPassword: ""
        })
        setForgetModal(false)
        setSignUpModal(false)
    }
    return (
        <>
            <div className="video_bg sign_up_1">
                <div className="container container-sm video_front">
                    <div className="log_sign_wrapper login_register">
                        <div className="marginT20">
                            <div className="signup">
                            </div>
                        </div>
                        <div className="" id="login" style={{ left: forgetModal || signUpModal ? "-500px" : "0" }}>
                            <div className="" role="document">
                                <div className="log-model ">
                                    <img className="log-img" src="https://www.e-startupindia.com/theme/default/images/e-startup1.webp"
                                        data-lazyload-replaced="true" style={{ marginTop: "10%" }} />
                                    <div className="signup">
                                        <div className="text-center user-signin-message"></div>
                                        <div className="user-details" id="login_click">
                                            <form onSubmit={userLogin}>
                                                <input type="email" placeholder="Email Address" value={email} id="login_email_address"
                                                    name="email" maxlength="100" onChange={handleChange} required />
                                                <div style={{ position: "relative" }}>
                                                    <input type={!showPassword ? "password" : "text"} name="password" onChange={handleChange} placeholder="Password" required id="id_password" value={password} />
                                                    {
                                                        showPassword ? <FontAwesomeIcon icon={faEye} color='#000' style={{
                                                            top: "32%", marginLeft: "-30px",
                                                            cursor: "pointer",
                                                            position: "absolute"
                                                        }} onClick={() => setShowPassword(false)} /> : <FontAwesomeIcon icon={faEyeSlash} color='#000' style={{
                                                            top: "32%", marginLeft: "-30px",
                                                            cursor: "pointer",
                                                            position: "absolute"
                                                        }} onClick={() => setShowPassword(true)} />
                                                    }
                                            
                                                </div>
                                                <button type="submit" className="log-btn login-btn" name="LoginCandidate"
                                                    value="Log-In" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    {
                                                        !buttonLoading ? <span>Login</span> : <div className='spinner' id="loader1" ><span className='bounce1' style={{ background: '#fff' }}></span><span
                                                            className='bounce2' style={{ background: '#fff' }}></span><span className='bounce3' style={{ background: '#fff' }}></span></div>
                                                    }
                                                </button>
                                                <p style={{ textAlign: "center", marginTop: "4%" }} id="forget_password" onClick={() => setForgetModal(true)}>Forget Password<input
                                                    type="hidden" name="query_string" value="" /></p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sign_up_part" style={{ left: !signUpModal ? "-500px" : "0" }}>
                            <img className="log-img" src="https://www.e-startupindia.com/theme/default/images/e-startup1.webp"
                                data-lazyload-replaced="true" style={{ marginTop: 0 }} />
                            <div className="custome-model  log-model">
                                <div className="user-details">
                                    <div className="text-center user-signup-message"></div>
                                    <form onSubmit={signUp}>
                                        <div className="user-details">
                                            <input type="text" placeholder="Name" value={name} id="signup_fullname" name="name"
                                                maxlength="100" onChange={handleChange} required />
                                            <input type="email" placeholder="Email Address" value={email} id="signup_email_address"
                                                name="email" maxlength="100" onChange={handleChange} required />
                                            <input type="text" placeholder="Mobile Number" value={mobile.substring(0, 10)} id="signup_mobile_no" name="mobile"
                                                maxlength="10" onChange={handleChange} required />
                                            <div style={{ position: "relative" }}>
                                                <input type={!showPassword ? "password" : "text"} name="password" placeholder="Password" value={password} required id="id_password1" onChange={handleChange} />
                                                {
                                                        showPassword ? <FontAwesomeIcon icon={faEye} color='#000' style={{
                                                            top: "45%", marginLeft: "-30px",
                                                            cursor: "pointer",
                                                            position: "absolute"
                                                        }} onClick={() => setShowPassword(false)} /> : <FontAwesomeIcon icon={faEyeSlash} color='#000' style={{
                                                            top: "45%", marginLeft: "-30px",
                                                            cursor: "pointer",
                                                            position: "absolute"
                                                        }} onClick={() => setShowPassword(true)} />
                                                    }
                                            </div>
                                            <div style={{ position: "relative" }}>
                                                <input type={!showRepeatPassword ? "password" : "text"} placeholder="Repeat password" value={repeatPassword} id="signup_confirm_password"
                                                    name="repeatPassword" maxlength="50" onChange={handleChange} required />
                                                {
                                                        showRepeatPassword ? <FontAwesomeIcon icon={faEye} color='#000' style={{
                                                            top: "45%", marginLeft: "-30px",
                                                            cursor: "pointer",
                                                            position: "absolute"
                                                        }} onClick={() => setShowRepeatPassword(false)} /> : <FontAwesomeIcon icon={faEyeSlash} color='#000' style={{
                                                            top: "45%", marginLeft: "-30px",
                                                            cursor: "pointer",
                                                            position: "absolute"
                                                        }} onClick={() => setShowRepeatPassword(true)} />
                                                    }
                                            </div>
                                            <button type="submit" className="log-btn login-btn" value="Create an Account"
                                                name="SignupCandidate" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                {
                                                    !buttonLoading ? <span>Sign up</span> : <div className='spinner' id="loader1" ><span className='bounce1' style={{ background: '#fff' }}></span><span
                                                        className='bounce2' style={{ background: '#fff' }}></span><span className='bounce3' style={{ background: '#fff' }}></span></div>
                                                }
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="forget_pass" style={{ left: !forgetModal ? "-500px" : "0" }}>
                            <img className="log-img" src="https://www.e-startupindia.com/theme/default/images/e-startup1.webp"
                                data-lazyload-replaced="true" style={{ marginTop: 0 }} />
                            <br />
                            <p id="change_t">Please enter your registered email id. Password will be sent on email address.</p>
                            <form onSubmit={emailSendForVerify}>
                                <input type="email" placeholder="Email Address" required value={forgetEmail} onChange={e => setForgetEmail(e.target.value)} />
                                <button type="submit" className="log-btn login-btn send_email" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    {
                                        !buttonLoading ? <span>
                                            Send Email</span> : <div class='spinner' id="loader1"><span class='bounce1' style={{ background: 'white' }}></span><span
                                                class='bounce2' style={{ background: 'white' }}></span><span class='bounce3' style={{ background: 'white' }}></span></div>
                                    }
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="sign_a">
                        {
                            !forgetModal && !signUpModal ? <button id="sign_click" onClick={() =>{
                                setSignUpModal(true)
                                setValue({
                                    email: "",
                                    mobile: "",
                                    name: "",
                                    password: "",
                                    repeatPassword: ""
                                })
                            } }>Sign Up</button> : <button id="login_click_1a" style={{ display: 'block' }} onClick={() => {
                                handleLoginForm()
                            }}>Login</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default page