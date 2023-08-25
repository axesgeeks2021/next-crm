import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css"

function page() {
    return (
        <>
            <div className="offers_1">
                <div className="container_1">
                    <div className="after_login">
                        <div className="profile_pic for_mobile">
                            <img src="img/boy.jpg" alt="" />
                                <span>Pooja bhardwaj</span>
                        </div>
                        <div className="profile_toggle" onclick="javascript:slideRight();">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="one_1 neumorphic1">
                            <div className="dropmenu">
                                <div className="sidenav">
                                    <div className="profile_pic for_desktop">
                                        <img src="img/boy.jpg" alt="" />
                                            <span>Pooja bhardwaj</span>
                                    </div>
                                    <a href="#Dashboard"><i className="fa fa-home" aria-hidden="true"></i> Dashboard</a>
                                    <a href="#Profile"><i className="fa fa-user" aria-hidden="true"></i> Profile</a>
                                    <button className="dropdown-btn"><i className="fa fa-file-text-o" aria-hidden="true"></i> Orders
                                        <i className="fa fa-caret-down"></i>
                                    </button>
                                    <div className="dropdown-container" style={{display:"none"}}>
                                        <a href="#"> In Cart</a>
                                        <a href="#"> Open Order</a>
                                        <a href="#"> Complete Order</a>
                                    </div>
                                    <a href="#contact"><i className="fa fa-file-o" aria-hidden="true"></i> Documents</a>
                                    <a href="#contact"><i className="fa fa-clock-o" aria-hidden="true"></i> Due Dates</a>
                                    <a href="#contact"><i className="fa fa-credit-card" aria-hidden="true"></i> Pay Now</a>
                                    <a href="#contact"><i className="fa fa-cog" aria-hidden="true"></i> Reset Password</a>
                                    <a href="#contact"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
                                </div>
                            </div>
                        </div>
                        <div className="document_s">
                            <h1>Documents</h1>
                            <div className="document_search">
                                <i className="fa fa-search search_icon" aria-hidden="true"></i>
                                <input type="text" placeholder="Search Documents" id="documents-search" className="sc-cTWfIk bYNFWg"
                                    value="" />
                                    <button className="sea">Search</button>
                                    <button className="sea in_mobile_v"><i className="fa fa-search" aria-hidden="true"></i></button>
                                    <div className="upload-btn-wrapper">
                                        <button className="btn"><i className="fa fa-upload" aria-hidden="true"></i> Upload File</button>
                                        <input type="file" name="myfile" />
                                    </div>
                            </div>
                            <div className="display_doc">
                                <div className="display_d">
                                    <div className="doc_1">
                                        <img src="img/aadhar.jpg" alt="" />
                                    </div>
                                    <p>Aadhar Card</p>
                                    <span>05 Dec 2022</span>
                                </div>
                                <div className="display_d">
                                    <div className="doc_1">
                                        <img src="img/aadhar.jpg" alt="" />
                                    </div>
                                    <p>Aadhar Card</p>
                                    <span>05 Dec 2022</span>
                                </div>
                                <div className="display_d">
                                    <div className="doc_1">
                                        <img src="img/aadhar.jpg" alt="" />
                                    </div>
                                    <p>Aadhar Card</p>
                                    <span>05 Dec 2022</span>
                                </div>
                                <div className="display_d">
                                    <div className="doc_1">
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