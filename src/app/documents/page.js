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
                        <div class="document_s">
                            <h1>Documents</h1>
                            <div class="document_search">
                                <i class="fa fa-search search_icon" aria-hidden="true"></i>
                                <input type="text" placeholder="Search Documents" id="documents-search" class="sc-cTWfIk bYNFWg" value="" />
                                <button class="sea">Search</button>
                                <button class="sea in_mobile_v"><i class="fa fa-search" aria-hidden="true"></i></button>
                                <div class="upload-btn-wrapper">
                                    <button class="btn"><i class="fa fa-upload" aria-hidden="true"></i> Upload  File</button>
                                    <input type="file" name="myfile" />
                                </div>
                            </div>
                            <div class="display_doc">
                                <div class="display_d">
                                    <div class="doc_1">
                                        <img src="img/aadhar.jpg" alt="" />
                                    </div>
                                    <p>Aadhar Card</p>
                                    <span>05 Dec 2022</span>
                                </div>
                                <div class="display_d">
                                    <div class="doc_1">
                                        <img src="img/aadhar.jpg" alt="" />
                                    </div>
                                    <p>Aadhar Card</p>
                                    <span>05 Dec 2022</span>
                                </div>
                                <div class="display_d">
                                    <div class="doc_1">
                                        <img src="img/aadhar.jpg" alt="" />
                                    </div>
                                    <p>Aadhar Card</p>
                                    <span>05 Dec 2022</span>
                                </div>
                                <div class="display_d">
                                    <div class="doc_1">
                                        <img src="img/aadhar.jpg" alt="" />
                                    </div>
                                    <p>Aadhar Card</p>
                                    <span>05 Dec 2022</span>
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