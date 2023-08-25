import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css"

function page() {
    return (
        <>
            <div class="Due_date">
                <div class="container_1">
                    <div class="profile_pic for_mobile">
                        <img src="img/boy.jpg" alt="" />
                        <span>Pooja bhardwaj</span>
                    </div>
                    <div class="profile_toggle" onclick="javascript:slideRight();">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="one_1 neumorphic1">
                        <div class="dropmenu">
                            <div class="sidenav">
                                <div class="profile_pic for_desktop">
                                    <img src="img/boy.jpg" alt="" />
                                    <span>Pooja bhardwaj</span>
                                </div>
                                <a href="#Dashboard"><i class="fa fa-home" aria-hidden="true"></i> Dashboard</a>
                                <a href="#Profile"><i class="fa fa-user" aria-hidden="true"></i> Profile</a>

                                <button class="dropdown-btn"><i class="fa fa-file-text-o" aria-hidden="true"></i> Orders
                                    <i class="fa fa-caret-down"></i>
                                </button>
                                <div class="dropdown-container" style={{ display: "none" }}>
                                    <a href="#"> In Cart</a>
                                    <a href="#"> Open Order</a>
                                    <a href="#"> Complete Order</a>
                                </div>
                                <a href="#contact"><i class="fa fa-file-o" aria-hidden="true"></i> Documents</a>
                                <a href="#contact"><i class="fa fa-clock-o" aria-hidden="true"></i> Due Dates</a>
                                <a href="#contact"><i class="fa fa-credit-card" aria-hidden="true"></i> Pay Now</a>
                                <a href="#contact"><i class="fa fa-cog" aria-hidden="true"></i> Reset Password</a>
                                <a href="#contact"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
                            </div>
                        </div>
                    </div>
                    <div class="Due_date_right">
                        <div class="stripe_date">
                            <h3>Upcoming Due Dates</h3>
                            <div class="date_s">
                                <form>
                                    <input type="date" name="begin" placeholder="01-02-1997" value="" min="1997-01-01"
                                        max="2030-12-31" />
                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                </form>
                            </div>
                        </div>
                        <div class="half_1">
                            <div class="date_box">
                                <p>31</p>
                                <span>May</span>
                            </div>
                            <div class="about_due">
                                <h3>FSSAI Return - Form D1</h3>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                                    demonstrate the visual form of.</p>
                            </div>
                        </div>
                        <div class="half_1">
                            <div class="date_box">
                                <p>31</p>
                                <span>May</span>
                            </div>
                            <div class="about_due">
                                <h3>FSSAI Return - Form D1</h3>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                                    demonstrate the visual form of.</p>
                            </div>
                        </div>
                        <div class="half_1">
                            <div class="date_box">
                                <p>31</p>
                                <span>May</span>
                            </div>
                            <div class="about_due">
                                <h3>FSSAI Return - Form D1</h3>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                                    demonstrate the visual form of.</p>
                            </div>
                        </div>
                        <div class="half_1">
                            <div class="date_box">
                                <p>31</p>
                                <span>May</span>
                            </div>
                            <div class="about_due">
                                <h3>FSSAI Return - Form D1</h3>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                                    demonstrate the visual form of.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page