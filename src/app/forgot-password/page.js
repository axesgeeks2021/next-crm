import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import Image from 'next/image'

import logo from "../../assets/images/e-startup.webp"


function page() {
    return (
        <>
            <div className="video_bg sign_up_1">
                <div className="container container-sm video_front">
                    <div className="log_sign_wrapper login_register">
                        <div className="marginT20">
                            <div className="signup">
                            </div>
                        </div>
                        <div className="forget_pass" style={{left: "0px"}}>
                            <Image className="log-img" src={logo}
                                data-lazyload-replaced="true" width={200} height={80}/>
                            <br />
                            <p id="change_t" style={{ fontFamily: "sans-serif", color: "#333", margin: "0px", marginTop: "8%" }}>Create New Password</p>
                            <form>
                                <input type="email" placeholder="New Password" required />
                                <input type="email" placeholder="Repeat Password" required />
                                <button type="submit" className="log-btn login-btn send_email" name=""><span>
                                    Submit</span></button>
                            </form>
                        </div>
                    </div>
                    <div className="sign_a">
                        <button id="sign_click" style={{ display: "none" }}>Sign Up</button>
                        <button id="login_click_1a" style={{ display: "block" }}>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page