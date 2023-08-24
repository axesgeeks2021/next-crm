import React from 'react'

function IceCode() {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="innera">
                        <div className="left">
                            <h1>Apply Online Import Export Code License | Fast & Easy Process | आयात निर्यात कोड लाइसेंस</h1>
                            <p>IEC Code in India. Easily fill a quick form, pay online and apply for an IEC License.</p>
                            <p>✔ ️User-Friendly Portal</p>
                            <p>✔ ️Transparent Pricing</p>
                            <p>✔ ️Excellent Customer Support</p>

                        </div>
                        <img src="http://e-startup.co/image/1.webp" alt="" className="one" />
                        <div className="spin">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                        <div className="right">


                            {/* <BannerForm/> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="container">
                    <div className="row">
                        <div className="info_inner">
                            <h1>Registration Form</h1>
                            <div className="bro">
                                <h3>APPLICANT DETAILS</h3>
                                <form>
                                    <div className="in_field">
                                        <label htmlFor="">Name of Business Entity( बिजनेस एंटिटी का नाम) <span className="color">*</span></label><br />
                                        <input type="text" v-model="business_entity" name="business_entity" size="40" className="wpcf7-form-control wpcf7-text" placeholder="Name of Business Entity" />
                                    </div>
                                    <div className="in_field">
                                        <label htmlFor="">Constitution of Business ( व्यापार का संविधान) <span className="color">*</span></label><br />
                                        <select name="constitution" v-model="constitution" className="wpcf7-form-control wpcf7-select" aria-invalid="false">
                                            <option value=""> Please Select Constitution of Business</option>
                                            <option value="Proprietorship">Proprietorship</option>
                                            <option value="Partnership">Partnership</option>
                                            <option value="Limited Liability Partnership">Limited Liability Partnership</option>
                                            <option value="Private Limited">Private Limited Company</option>
                                            <option value="opc">One Person Company</option>
                                            <option value="Public Limited">Public Limited Company</option>
                                            <option value="Govt. Undertaking">Govt. Undertaking</option>
                                            <option value="Section 25 Company">Section 25 Company</option>
                                            <option value="Registered Society">Society</option>
                                            <option value="Trust">Trust</option>

                                            <option value="HUF">HUF</option>
                                        </select>
                                    </div>
                                    <div className="in_field">
                                        <label htmlFor="">Description of Business ( व्यापार का वर्णन)</label><br />
                                        <textarea v-model="description_business" name="description_business" rows="3" cols="50" className="wpcf7-form-control wpcf7-text"> </textarea>
                                    </div>
                                    <div className="in_field">
                                        <label htmlFor="">Business Activity (व्यावसायिक गतिविधि) <span className="color">*</span> </label><br />
                                        <select v-model="business_activity" name="bsiness_activity" className="wpcf7-form-control wpcf7-select" aria-invalid="false">
                                            <option value="Merchant Exporter">Merchant Exporter</option>
                                            <option value="Manufacturer Exporter">Manufacturer Exporter</option>
                                            <option value="Merchant cum Manufacturer Exporter">Merchant cum Manufacturer Exporter</option>
                                            <option value="Service Provider">Service Provider</option>
                                            <option value="Merchant cum Service Provider">Merchant cum Service Provider</option>
                                            <option value="Manufacturer cum Service Provider">Manufacturer cum Service Provider</option>
                                            <option value="Merchant cum Manufacturer cum Service Provider">Merchant cum Manufacturer cum Service Provider</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                    <div className="in_field">
                                        <label htmlFor="">Date of Incorporation / Date of Birth ( निगमन की तिथि / जन्म तिथि)</label><br />
                                        <input type="date" v-model="date" placeholder="DD-MM-YYYY" className="form-control" name="date" id="date" data-select="datepicker" autoComplete="off" />
                                    </div>
                                    <div className="in_field">
                                        <label htmlFor="">Principal Place of Business Entity( बिजनेस एंटिटी का प्रमुख स्थान)</label><br />
                                        <textarea type="text" v-model="principal_place" rows="3" name="paddress" size="40" className="wpcf7-form-control wpcf7-text" placeholder="Complete Address, City, State and Pincode"></textarea>

                                    </div>
                                    <div className="in_field">
                                        <label htmlFor="">Entity Branch Details ( इकाई शाखा विवरण)</label><br />
                                        <select id="Show1" v-model="branch_detail" name="entity_branch" className=" wpcf7-form-control wpcf7-select">
                                            <option value="">Select </option>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </select><br />
                                        <textarea name="" v-model="branch_description" id="" cols="30" rows="3" className="optianl" placeholder="Address" v-if="optional"></textarea>
                                    </div>
                                    <div className="in_field">
                                        <label htmlFor="">PAN No. of Entity ( इकाई का पैन नंबर)</label><br />
                                        <input type="text" v-model="pan" name="pan" size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Enter PAN No." />
                                    </div>
                                    <div className="in_field">
                                        <label htmlFor="">Applicant Full Name </label><br />
                                        <input type="text" v-model="name" name="name" size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Applicant Full Name" />
                                    </div>
                                    <div className="in_field">
                                        <label htmlFor="">E-Mail ID ( ईमेल आईडी)</label><br />
                                        <input placeholder="your@gmail.com" v-model="email" id="email" name="email" required="" type="email" tabIndex="2" />
                                    </div>
                                    <div className="in_field">
                                        <label htmlFor="">Contact No. ( संपर्क संख्या)</label><br />
                                        <input type="tel" pattern="\d{10}" v-model="mobile" name="phone" size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Mobile No" id="mobile" required="" />
                                    </div>
                                    <div className="in_field">
                                        <label htmlFor="">Whether the firm is located in Special Economic Zone (SEZ)</label>
                                        <div className="control">
                                            <label className="radio">
                                                <input type="radio" v-model="composition_scheme" name="composition_scheme" value="Yes" />
                                                Yes
                                            </label>
                                            <label className="radio">
                                                <input type="radio" v-model="composition_scheme" name="composition_scheme" value="No" checked="" />
                                                No
                                            </label>
                                        </div>
                                    </div>


                                    <div className="in_field">
                                        <p>I hereby declare that information provided in the online registration form is true to the best of my knowledge and I accept terms, disclaimer, and policies by clicking "Submit Application" button.</p>
                                    </div>

                                    <div className="in_field">
                                        <button >Submit <img
                                            src="http://e-startup.co/image/loader.gif"
                                            className="load_show"
                                            v-if="loader"
                                            style={{width: "15px"}}
                                        /></button>
                                    </div>
                                </form>
                            </div>

                        </div>

                        <div className="Instructions">
                            <h1>Instructions</h1>
                            <div className="br">
                                <div className="step">
                                    <p><span>1. Name of Business Entity : </span> Enter the name of the business unit on which name you are required Import Export Code Certificate. Name must be matched with the PAN Database.
                                    </p>
                                </div>
                                <div className="step">
                                    <p><span>2. Constitution of Business : </span> Select type of business entity of the applicant in which name IEC requires to apply.</p>
                                </div>
                                <div className="step">
                                    <p><span>3. Description of Business : </span> Describe the nature of business for which IEC Code required.
                                    </p>
                                </div>
                                <div className="step">
                                    <p><span>4. Business Activity : </span> Select anyone's main business activity to be conducted.
                                    </p>
                                </div>
                                <div className="step">
                                    <p><span>5. Date of Incorporation / Date of Birth : </span> </p>
                                </div>
                                <div className="step">
                                    <p><span>6. Principal Place of Business Entity : </span> Fill the complete address with Pincode which will get printed on IEC Certificate.</p>
                                </div>
                                <div className="step">
                                    <p><span>7. Branch Details : </span> Enter the details of the branch of the applicant if any.
                                    </p>
                                </div>
                                <div className="step">
                                    <p><span>8. PAN Number of Entity : </span> Fill up the PAN Number of the IEC Applicant.</p>
                                </div>
                                <div className="step">
                                    <p><span>9. E-Mail ID : </span> Fill the correct Email ID of the Applicant.
                                    </p>
                                </div>
                                <div className="step">
                                    <p><span>10. Contact Number  : </span> Fill the correct 10 digit Mobile Number of the Applicant.
                                    </p>
                                </div>
                                <div className="step">
                                    <p><span>11. Whether the firm is located in Special Economic Zone (SEZ) : </span> Select Yes if applicant business place is located in Special Economic Zone notified by Govt. of India.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="notes">
                <div className="container">
                    <h1>Important Notes</h1>
                    <p><i className="fa fa-check-square-o" aria-hidden="true"></i> Document required for Import Export Code Registration</p>
                    <span><b> - PAN Card</b> of a business entity.</span> <br />
                    <span> <b> - Signed Canceled Cheque </b>bearing pre-printed name of the applicant firm.</span> <br />
                    <span> <b> - Address Proof </b>of business entity <br />

                        <span style={{marginLeft: "6px"}}>Sale Deed <span className="color">OR</span> </span> <br />
                        <span style={{marginLeft: "6px"}}>Notarized Rent/Lease Agreement; <span className="color">OR</span> </span> <br />
                        <span style={{marginLeft: "6px"}}>Electricity bill; <span className="color">OR</span> </span> <br />
                        <span style={{marginLeft: "6px"}}>Landline Telephone / Mobile bill; <span className="color">OR</span> </span> <br />
                        <span style={{marginLeft: "6px"}}>NOC from owner with Electricity Bill </span>

                    </span>
                    <p><i className="fa fa-check-square-o" aria-hidden="true"></i> Additional Documents Required </p>
                    <p> <input type="checkbox" className="in_ch" /> In case of Company/LLP/OPC/Partnership Firm</p>
                    <span>- Partnership Deed, Certificate of Incorporation of the Firm/Company</span> <br />
                    <span>- PAN & AADHAR of all Directors/ Partners/ Members</span> <br />
                    <span>- Mobile Number & email id of all Directors/ Partners/ Members.</span>
                    <p> <input type="checkbox" className="in_ch" /> In case of sole proprietor, residential address of the owner (Aadhar Card) required.
                    </p>
                    <p><i className="fa fa-check-square-o" aria-hidden="true"></i> Applicant Name & Date of Birth must be the same on <b>PAN and Aadhar Card.</b></p>
                    <p><i className="fa fa-check-square-o" aria-hidden="true"></i> Verification OTP shall be received on a mobile number linked with Aadhar for IEC Application submission.</p>
                    <p><i className="fa fa-check-square-o" aria-hidden="true"></i> In case, Aadhar verification is not successful due to any reason, the applicant shall provide <b> DSC [Digital Signature] </b> for IEC Application submission.</p>
                    <p><i className="fa fa-check-square-o" aria-hidden="true"></i> IEC application for modification may take longer time than usual fresh application.</p>

                </div>
            </div>
            <div className="faq">
                <section className="faq-section">
                    <div className="container">
                        <h2>FREQUENTLY ASKED QUESTIONS</h2>
                        <div className="row">

                            <div className="">
                                <div className="faq" id="accordion">
                                    <div className="card">
                                        <div className="card-header" id="faqHeading-1">
                                            <div className="mb-0">
                                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-1" data-aria-expanded="true" data-aria-controls="faqCollapse-1">
                                                    <span className="badge">Q</span> What is IEC ?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-1" className="collapse" aria-labelledby="faqHeading-1" data-parent="#accordion">
                                            <div className="card-body">
                                                <p> IEC stands for Import-Export Code. It is a 10 Digit unique code issued by directorate general of foreign trade (DGFT) of commerce and industries ministry of government of India </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faqHeading-2">
                                            <div className="mb-0">
                                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-2" data-aria-expanded="false" data-aria-controls="faqCollapse-2">
                                                    <span className="badge">Q</span> Who requires IEC Registration?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-2" className="collapse" aria-labelledby="faqHeading-2" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Any person or business type who intends to import or export goods and services from or to India must require an Import Exports Code
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faqHeading-3">
                                            <div className="mb-0">
                                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-3" data-aria-expanded="false" data-aria-controls="faqCollapse-3">
                                                    <span className="badge">Q</span>How much time it will take to acquire/obtain an Import Export Code?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-3" className="collapse" aria-labelledby="faqHeading-3" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Import Export Code can be obtained within 1 week from the date of filing application.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faqHeading-4">
                                            <div className="mb-0">
                                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-4" data-aria-expanded="false" data-aria-controls="faqCollapse-4">
                                                    <span className="badge">Q</span> What is ICE GATE Verification?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-4" className="collapse" aria-labelledby="faqHeading-4" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>ICEGATE is an online portal of Central Board of Excise and Customs [CBEC] which facilitates import export-related services to the trade and cargo carriers and other users of Customs Department.
                                                    <b>ICE GATE Verification ensures that a business entity's IEC Code registration is duly updated in government custom records.</b>
                                                    <br />With ICE GATE verification, Exporter/ Importer never face any kind of hitch doing import and export of goods and services due to non-availability of data in government custom authority records.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faqHeading-5">
                                            <div className="mb-0">
                                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-5" data-aria-expanded="false" data-aria-controls="faqCollapse-5">
                                                    <span className="badge">Q</span> What is the validity of IEC Code?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-5" className="collapse" aria-labelledby="faqHeading-5" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>  IEC holder has to ensure that details in its IEC is updated electronically every year, during April-June period.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faqHeading-6">
                                            <div className="mb-0">
                                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-6" data-aria-expanded="false" data-aria-controls="faqCollapse-6">
                                                    <span className="badge">Q</span> Is DSC required to obtain IEC Registration?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-6" className="collapse" aria-labelledby="faqHeading-6" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>As per recent notification, DSC is not required to apply import exports code.  </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faqHeading-7">
                                            <div className="mb-0">
                                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-7" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span className="badge">Q</span> Do we receive any hard copy from the department?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-7" className="collapse" aria-labelledby="faqHeading-7" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>No, you will receive final soft copy of IEC certificate over the email</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faqHeading-8">
                                            <div className="mb-0">
                                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-8" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span className="badge">Q</span> Are any monthly returns required to be filed under Import Export Code?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-8" className="collapse" aria-labelledby="faqHeading-8" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>IEC is just a license allowing the import and export of goods. Therefore, no return is required to be filed under IEC code.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faqHeading-9">
                                            <div className="mb-0">
                                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-9" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span className="badge">Q</span> Who can apply for IEC Code Online?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-9" className="collapse" aria-labelledby="faqHeading-9" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Any kind of business can apply for Import-Export Code Registration who are into the export-import business irrespective of any business entity
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faqHeading-10">
                                            <div className="mb-0">
                                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-10" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span className="badge">Q</span>Do you provide this service in my town?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-10" className="collapse" aria-labelledby="faqHeading-10" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Yes E-StartupIndia is an online platform serving all over India no matters wherever you are doing business all you need is internet connection on your mobile or desktop and we are ready to get your job done
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faqHeading-11">
                                            <div className="mb-0">
                                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-11" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span className="badge">Q</span> Do I need to physically present for the process?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-11" className="collapse" aria-labelledby="faqHeading-11" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>No, You don’t need to be physically present for the process, E-StartupIndia is an online catering platform all you need is internet connection  in your phone/computer and the required documents with you and we can get the job done no matters even if you are present at remotest location of the India
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faqHeading-12">
                                            <div className="mb-0">
                                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-12" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span className="badge">Q</span>  Is there any penalty on not having an IE code?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-12" className="collapse" aria-labelledby="faqHeading-12" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>There is no penalty for not having an IE code but importing and exporting are not possible without an IE code.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faqHeading-13">
                                            <div className="mb-0">
                                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-13" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span className="badge">Q</span>  How much time does it take to get an Import Export code?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-13" className="collapse" aria-labelledby="faqHeading-13" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Generally, it takes 3 to 7 days to get the IE code certificate after the submission of all required documents and information
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faqHeading-14">
                                            <div className="mb-0">
                                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-14" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span className="badge">Q</span> Can I fill AD Category Bank details in IEC?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-14" className="collapse" aria-labelledby="faqHeading-14" data-parent="#accordion">
                                            <div className="card-body">
                                                <p> Yes, you can fill AD Category Bank details in IEC. There is space to fill only one Bank account details in IEC application and the same will be shown in your IEC Registration Certificate. It is always advisable to put that banker details with whom you deal regularly and have good relations.
                                                    AD (Authorised Dealer) Category Bank means the bank who deal with the conversion of currency notes, coins or travelers' cheques designated in foreign currency into Indian Rupees and vice versa. Their objective is to provide easier foreign exchange facilities for travelers and tourists, including NRIs.
                                                </p>

                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <a href="" className="what_up"><img src="http://e-startup.co/image/whatsapp-web-logo-1.webp" alt="" /></a> */}
        </>
    )
}

export default IceCode