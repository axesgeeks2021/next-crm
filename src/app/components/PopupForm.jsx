import React from 'react'

function PopupForm() {
    return (
        <>
            <div class="overlay" v-if="show">
                <div id="hidemessage" v-if="message">
                    {/* <p class="txt">{{alertMessage}}</p> */}
                    <i class="fa fa-times close_msg" aria-hidden="true"></i>
                </div>
                <div class="popup">
                    <i class="fa fa-times close" aria-hidden="true"></i>
                    <form>
                        <h2>Contact Support</h2>
                        <div class="box_a">
                            <label for="">Name</label><br />
                                <input type="text" v-model="name" required />
                        </div>
                        <div class="box_a">
                            <label for="">Mobile</label><br />
                            <input type="tel" required pattern="\d{10}" v-model="mobile" />
                        </div>
                        <div class="box_a">
                            <label for="">Email</label><br />
                            <input type="email" v-model="email" required />
                        </div>
                        <div class="box_a">
                            <button >Submit <img
                                src="http://e-startup.co/image/loader.gif"
                                class="load_show"
                                v-if="loader"
                                style={{ width: "15px" }}
                            /></button>
                        </div>
                    </form>
                    <div class="form_right">
                        <h2>Enquiry Now!</h2>
                        <h2>Facing Trouble
                            Filing
                            Registration Form?</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopupForm