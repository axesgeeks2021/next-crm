import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css"


function page() {
    return (
        <>
            <div class="offers_1">
                <div class="container_1">
                    <div class="after_login">
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
                                    <div class="profile_pic">
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
                                    <a href="#contact"><i class="fa fa-cog" aria-hidden="true"></i> Reset Order</a>
                                    <a href="#contact"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
                                </div>
                            </div>
                        </div>
                        <div class="one_2a">
                            <a href="in-cart-listing.html"><button class="back_step"><i class="fa fa-angle-double-left"
                                aria-hidden="true"></i> Back </button></a>
                            <div class="clear"></div>
                            <h2>Private Limited Company - Basic Package</h2>
                            <p><b>Order Id - </b>216808</p>
                            <div class="steps_a">
                                <ul class="Container-progessbar">
                                    <li class="active">About to Start</li>
                                    <li class="active">In Progress</li>
                                    <li class="">Almost Done</li>
                                    <li class="">Completed</li>
                                </ul>
                            </div>
                            <h2>Task Stages</h2>
                            <div class="step_list">
                                <p>IEC Application prepared</p>
                                <p>IEC Application successfully filed</p>
                                <p>IEC Acknowledgment generated</p>
                                <p>IEC Certificate Obtained</p>
                            </div>
                            <div class="payment_d">
                                <h6>Payment Details</h6>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td colspan="2">Order Amount</td>
                                            <td>50000</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">Payment Details</td>
                                        </tr>
                                        <tr>
                                            <td>Date of Payment</td>
                                            <td>Transaction Id</td>
                                            <td>50000</td>
                                        </tr>
                                        <tr>
                                            <td>Date of Payment</td>
                                            <td>Transaction Id</td>
                                            <td>40000</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3"></td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">Pending Balance</td>
                                            <td>10000</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button class="pay_now">Pay Now</button>
                            </div>
                            <div class="business_ad">
                                <h6>Business Advisor</h6>
                                <p>Name <span></span></p>
                                <p>Email Id <span></span></p>
                                <p>Mobile Number <span></span></p>
                                <button class="request_btn"><i class="fa fa-phone" aria-hidden="true"></i> Call Me</button>
                            </div>
                        </div>
                        <div class="one_3">
                            <div class="ad1">
                                <img src="img/ad.png" alt="" />
                            </div>
                        </div>
                        <div class="chatBox">
                            <button class="clat_back"><i class="fa fa-angle-double-left" aria-hidden="true"></i> Back </button>
                            <div class="sender">
                                <div class="sender_text">
                                    <p>Hi Pulkit, this is Joslyn here stepping back in. </p>
                                    <span class="chat_date">12:58 PM 12 Mar 2023</span>
                                </div>
                            </div>
                            <div class="reply">
                                <div class="reply_box">
                                    <p>Hello</p>
                                    <span class="chat_date">12:58 PM 12 Mar 2023</span>
                                </div>
                            </div>
                            <div class="chatwrite">
                                <button>
                                    <i class="fa fa-paperclip" aria-hidden="true"></i>
                                    <input type="file" />
                                </button>
                                <div class="textarea_type">
                                    <textarea rows="1"></textarea>
                                </div>
                                <div class="send_msg">
                                    <i class="fa fa-paper-plane" aria-hidden="true"></i>
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