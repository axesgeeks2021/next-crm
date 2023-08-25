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
                        <div class="one_2">
                            <p>Otofy Solutions Private Limited</p>
                            <h2>Complete Orders <i class="fa fa-check-circle" aria-hidden="true"
                                style={{ color: "#ffc83d" }}></i></h2>
                            <div class="tabset">
                                <input type="radio" name="tabset" id="tab1" aria-controls="marzen" checked />
                                <label for="tab1">Open Order</label>
                                <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier" />
                                <label for="tab2">Upcoming Due Dates</label>
                                <div class="tab-panels">
                                    <section id="marzen" class="tab-panel">
                                        <div class="company_pro">
                                            <h1>Private Limited Company - Basic Package</h1>
                                            <p><b>Order Id - </b>216808</p>
                                            <p><b>Status - </b>In Progress</p>
                                            <button class="view_Detail"><a href="order-detail.html" target="_blank">View
                                                Detail</a></button>
                                        </div>
                                        <div class="company_pro">
                                            <h1>Private Limited Company - Basic Package</h1>
                                            <p><b>Order Id - </b>216808</p>
                                            <p><b>Status - </b>In Progress</p>
                                            <button class="view_Detail"><a href="order-detail.html" target="_blank">View
                                                Detail</a></button>

                                        </div>
                                        <div class="company_pro">
                                            <h1>Private Limited Company - Basic Package</h1>
                                            <p><b>Order Id - </b>216808</p>
                                            <p><b>Status - </b>In Progress</p>
                                            <button class="view_Detail"><a href="order-detail.html" target="_blank">View
                                                Detail</a></button>
                                        </div>
                                        <button class="Show_More">Show More</button>
                                    </section>
                                    <section id="rauchbier" class="tab-panel">
                                        <h2>6B. Rauchbier</h2>
                                        <p><strong>Overall Impression:</strong> An elegant, malty German amber lager with a
                                            balanced, complementary beechwood smoke character. Toasty-rich malt in aroma and
                                            flavor, restrained bitterness, low to high smoke flavor, clean fermentation profile,
                                            and an attenuated finish are characteristic.</p>
                                        <p><strong>History:</strong> A historical specialty of the city of Bamberg, in the
                                            Franconian region of Bavaria in Germany. Beechwood-smoked malt is used to make a
                                            Märzen-style amber lager. The smoke character of the malt varies by maltster; some
                                            breweries produce their own smoked malt (rauchmalz).</p>
                                    </section>
                                </div>
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