"use client"
import React, { useState } from 'react'

import "bootstrap/dist/css/bootstrap.min.css"

function page() {

    const [buttonLoading, setButtonLoading] = useState(false)

    const [text, setText] = useState({
        newPassword: "",
        repeatPassword: ""
    })

    const { newPassword, repeatPassword } = text

    const handlechange = e => {
        setText({ ...text, [e.target.name]: e.target.value })
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
                                data-lazyload-replaced="true" style={{marginTop: 0}}/>
                            <br />
                            <p id="change_t" style={{ fontFamily: "sans-serif", color: "#333", margin: "0px", marginTop: "8%" }}>Create New Password</p>
                            <form>
                                <input type="email" placeholder="New Password" value={newPassword} onChange={handlechange} name="newPassword" required />
                                <input type="email" placeholder="Repeat Password" value={repeatPassword} onChange={handlechange} name="repeatPassword" required />
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