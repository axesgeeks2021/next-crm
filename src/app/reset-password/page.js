"use client"
import React, { useState } from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import { toast } from 'react-toastify'

import { useRouter } from 'next/navigation'

function page(router) {

    const routers = useRouter()

    const [buttonLoading, setButtonLoading] = useState(false)

    const [text, setText] = useState({
        newPassword: "",
        repeatPassword: ""
    })

    const { newPassword, repeatPassword } = text

    const handlechange = e => {
        setText({ ...text, [e.target.name]: e.target.value })
    }

    const fetchResetPassword = (e) => {
        e.preventDefault()

        if(newPassword !== repeatPassword){
            return toast.warn("Password can't be different!")
        }

        if(router.searchParams.email === undefined){
            return toast.error('Link has expired!. Please generate another one')
        }

        try {
            setButtonLoading(true)
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
            myHeaders.append("Cookie", "PHPSESSID=i23seqn0u32e278cj5tqajpur3");

            const urlencoded = new URLSearchParams();
            urlencoded.append("email_address", router.searchParams.email);
            urlencoded.append("new_password", newPassword);

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

            fetch("https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/profile/reset-password-w/", requestOptions)
                .then(response => response.json())
                .then(result => {
                    setButtonLoading(false)
                    if(result.status){
                        setText({
                            repeatPassword: "",
                            newPassword: ""
                        })
                        toast.success(result.message)
                        setTimeout(() => {
                            return routers.push('/login')
                        }, 200);
                    }
                    return toast.warn(result.warn)
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error)
        }
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
                        <div className="forget_pass" style={{ left: "0px" }}>
                            <img className="log-img" src="https://www.e-startupindia.com/theme/default/images/e-startup1.webp"
                                data-lazyload-replaced="true" style={{ marginTop: 0 }} />
                            <br />
                            <p id="change_t" style={{ fontFamily: "sans-serif", color: "#333", margin: "0px", marginTop: "8%" }}>Create New Password</p>
                            <form onSubmit={fetchResetPassword}>
                                <input type="text" placeholder="New Password" value={newPassword} onChange={handlechange} name="newPassword" required />
                                <input type="text" placeholder="Repeat Password" value={repeatPassword} onChange={handlechange} name="repeatPassword" required />
                                <button type="submit" className="log-btn login-btn send_email" name="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    {
                                        !buttonLoading ? <span>
                                            Submit</span> : <div class='spinner' id="loader1"><span class='bounce1' style={{ background: 'white' }}></span><span
                                                class='bounce2' style={{ background: 'white' }}></span><span class='bounce3' style={{ background: 'white' }}></span></div>
                                    }
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="sign_a">
                        {/*   <button id="sign_click" style={{ display: "none" }}>Sign Up</button>
                        <button id="login_click_1a" style={{ display: "block" }}>Login</button>*/}
                    </div>
                </div>
            </div>
        </>
    )
}

export default page