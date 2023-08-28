import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"


function page() {

    

    const fetchUpdateProfile = () => {
        try {
            const myHeaders = new Headers();
            myHeaders.append("Cookie", "PHPSESSID=i23seqn0u32e278cj5tqajpur3");

            const formdata = new FormData();
            formdata.append("client_name", "ABC");
            formdata.append("mobile_number", "112233445566");
            formdata.append("company_name", "ABC PVT LTD");
            formdata.append("industry_type", "IT");
            formdata.append("client_state", "Delhi");
            formdata.append("client_city", "New Delhi");
            formdata.append("business_type", "IT");
            formdata.append("business_description", "Software related");

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/profile/update/10005/", requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error)
        }
    }
    l
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
                        <div class="profile_form">
                            <div class="form-wizard">
                                <div class="steps">
                                    <ul>
                                        <li>
                                            <span>1</span>
                                            <p>Profile</p>
                                        </li>
                                        <li>
                                            <span>2</span>
                                            <p>Contact Details</p>
                                        </li>
                                        <li class="last_l">
                                            <span>3</span>
                                            <p>Business Logo</p>
                                            <p></p>
                                        </li>
                                        <div class="clear"></div>
                                    </ul>
                                </div>
                                <div class="myContainer">
                                    <div class="form-container animated active">
                                        <h2 class="text-center form-title">Profile</h2>
                                        <form>
                                            <div class="form-group">
                                                <label>GSTIN</label>
                                                <input type="text" placeholder="GSTIN" />
                                            </div>
                                            <div class="form-group">
                                                <label>Company Name</label>
                                                <input type="text" placeholder="Company Name" />
                                            </div>
                                            <div class="form-group">
                                                <label>Type of Entity</label>
                                                <input type="password" placeholder="Type of Entity" />
                                            </div>
                                            <div class="form-group">
                                                <label>Address</label>
                                                <input type="password" placeholder="Address" />
                                            </div>
                                            <div class="form-group">
                                                <label>City</label>
                                                <input type="password" placeholder="City" />
                                            </div>
                                            <div class="form-group">
                                                <label>State</label>
                                                <input type="password" placeholder="State" />
                                            </div>
                                            <div class="form-group">
                                                <label>Industry</label>
                                                <input type="password" placeholder="Industry" />
                                            </div>
                                            <div class="form-group">
                                                <label>Business Description</label>
                                                <input type="password" placeholder="Business Description" />
                                            </div>
                                            <div class="form-group">
                                                <label>Website</label>
                                                <input type="password" placeholder="Website" />
                                            </div>
                                            <div class="form-group">
                                                <label>Date of Incorporation</label>
                                                <input type="password" placeholder="Date of Incorporation" />
                                            </div>
                                            <div class="form-group">
                                                <label>Turnover</label>
                                                <input type="password" placeholder="Turnover" />
                                            </div>
                                            <div class="clear"></div>
                                            <div class="form-group text-center mar-b-0" style={{ width: "100%" }}>
                                                <input type="button" value="NEXT" class="btn btn-primary next" />
                                            </div>
                                        </form>
                                    </div>
                                    <div class="form-container animated">
                                        <h2 class="text-center form-title">Contact Details</h2>
                                        <form>
                                            <div class="form-group">
                                                <label>Owner Name</label>
                                                <input type="text" placeholder="Owner Name" />
                                            </div>
                                            <div class="form-group">
                                                <label>Email Id</label>
                                                <input type="text" placeholder="Email Id" />
                                            </div>
                                            <div class="form-group">
                                                <label>Phone Number</label>
                                                <input type="text" placeholder="Phone Number" />
                                            </div>
                                            <div class="form-group ppa">
                                                <label>WhatsApp No (Yes/No)</label><br />
                                                <label>
                                                    <input type="radio" name="radio" />
                                                    <span>Yes</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="radio" />
                                                    <span>No</span>
                                                </label>
                                                <div class="clear"></div>
                                            </div>
                                            <div class="clear"></div>
                                            <div class="form-group">
                                                <label>Language Preference</label>
                                                <input type="text" placeholder="Language Preference" />
                                            </div>
                                            <div class="clear"></div>
                                            <div class="form-group text-center mar-b-0" >
                                                <input type="button" value="BACK" class="btn btn-default back" />
                                                <input type="button" value="NEXT" class="btn btn-primary next" />
                                            </div>
                                        </form>
                                    </div>
                                    <div class="form-container animated">
                                        <h2 class="text-center form-title">Business Logo</h2>
                                        <div class="bors">
                                            <span class="remove_img">x</span>
                                            <div id="divImageMediaPreview">
                                            </div>
                                            <div class="file-drop-area">
                                                <span class="choose-file-button">Choose Image</span>
                                                <span class="file-message">or drag and drop files here</span>
                                                <input type="file" class="file-input" accept=".jfif,.jpg,.jpeg,.png,.gif"
                                                    multiple />
                                            </div>
                                        </div>
                                        <div class="form-group" style={{ width: "100%" }}>
                                            <input type="button" value="BACK" class="btn btn-default back" />
                                            <input type="submit" value="Submit" class="btn btn-primary next" />
                                        </div>
                                    </div>
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