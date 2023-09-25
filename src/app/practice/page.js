import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import '../../styles/style.css'

function page() {
  return (
   <>
   <div class="banner">
    <div class="container">
        <div class="innera">
            <div class="left">
                <h1>Apply Online GST Registration | Fast & Easy Process | जीएसटी पंजीकरण
                </h1>
                <p>GST Registration in India. Easily fill a quick form, pay online and apply GSTIN.</p>
                <p>✔ ️User-Friendly Portal</p>
                <p> ✔ ️Transparent Pricing</p>
                    <p> ✔ ️Excellent Customer Support
                    </p>

            </div>
            <img src="http://e-startup.co/image/1.webp" alt="" class="one" />
            <div class="spin">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
            <div class="right">
                
              <form>
        <img src="http://e-startup.co/image/1.webp" alt="" class="two" />
        <h2>Contact Support</h2>
        <div class="in_put">
            <label for="">Name</label><br />
            <input type="text" v-model="name" required />
        </div>
        <div class="in_put">
            <label for="">Mobile No.</label><br />
            <input type="tel" required pattern="\d{10}" v-model="mobile" />
        </div>
        <div class="in_put">
            <label for="">Email Id</label><br />
            <input type="text" v-model="email" required />
        </div>
        <div class="in_put">
            <p class="what_in"><input type="checkbox" checked /> Send updates on Whatsapp</p>
            <span class="what_noti">I agree to <a href="terms-and-conditions.html" target="_blank">terms</a> and <a href="privacy-policy.html" target="_blank">privacy policy</a></span>
        </div>
        <div class="in_put">
           <button >Submit <img
            src="http://e-startup.co/img/loader.gif"
            class="load_show"
            v-if="loader"
            style={{width: "15px"}}
          /></button>
        </div>
    </form>
            </div>
        </div>
    </div>
</div>
<div class="service-description">
     <div class="container_a">
        <div class="navigation_list" style={{position: '-webkit-sticky !important', top: '0 !important'}}>
            <ul>
                <li class="listmenuli list_menu_li_0">
                <a class="anchortag" href="#section1">About GST Registration</a>
                </li>
                <li class="listmenuli list_menu_li_1">
                <a class="anchortag" href="#section2">Registration Mandatory</a>
                </li>
                <li class="listmenuli list_menu_li_2">
                <a class="anchortag" href="#section3">Why I need GST Registration?</a>
                </li>
                <li class="listmenuli list_menu_li_3">
                <a class="anchortag" href="#section4">What is GSTIN?</a>
                </li>
                <li class="listmenuli list_menu_li_4">
                <a class="anchortag" href="#section5">Composition Scheme</a>
                </li>
                <li class="listmenuli list_menu_li_5">
                <a class="anchortag" href="#section6">Regular vs Composition Scheme</a>
                </li>
                <li class="listmenuli list_menu_li_6">
                <a class="anchortag" href="#section7">GST Registration Process</a>
                </li>
                <li class="listmenuli list_menu_li_7">
                <a class="anchortag" href="#section8">Documents Required for GST Registration</a>
                </li>
            </ul>
        </div>
        
    <div class="service_inner_body col-md-6 col-12">
    <div class="info_inner">
                <h1>GST Registration Form</h1>
                <div class="bro">
                    <form>
                    <div class="in_field">
                        <label for="">Application Type (आवेदन का प्रकार)</label><br />
                        <select id="gender" v-model="application_type" name="application_type">
                            <option value="GST Registration">GST Registration</option>
                            <option value="GST Modification">GST Modification</option>
                            <option value="GST Cancellation">GST Cancellation</option> 
                          </select>
                    </div>
                    <div class="in_field">
                        <label for="">Applicant Full Name (आवेदक का पूरा नाम)</label><br />
                        <input placeholder="Applicant Full Name"  v-model="name" id="name" name="name" type="text" tabindex="1" />
                    </div>
                    <div class="in_field">
                        <label for="">Name of Firm (फर्म का नाम)</label><br />
                        <input placeholder="Business Firm Name"  v-model="firm_name" id="name" required="" name="firm_name" type="text" tabindex="1" />
                    </div>
                    <div class="in_field">
                        <label for="">Type of Business Entity (व्यवसाय इकाई का प्रकार)</label><br /> 
                        <select id="gender"  v-model="business_entity" name="business_type">
                            <option value="">Type of Business Entity</option>
                            <option value="Sole Proprietor">Sole Proprietor</option>
                            <option value="Private Limited Company">Private Limited Company</option>
                           <option value="Public Limited Company">Public Limited Company</option>
                           <option value="LLP">LLP</option>
                           <option value="OPC">OPC</option>
                           <option value="Society">Society</option>
                         <option value="Trust">Trust</option>
                         <option value="Others">Others</option>
                          </select>
                    </div>
                    <div class="in_field">
                        <label for="">Complete address of the principal place of business (व्यवसाय के प्रमुख स्थान का पूरा पता)</label><br />
                        <textarea v-model="principal_business_address" placeholder="Complete address with city, state and pincode"   id="name" name="principal" type="text" tabindex="1"></textarea>
                    </div>
                    <div class="in_field">
                        <label for="">Complete address of additional place of business (व्यवसाय के अतिरिक्त स्थान का पूरा पता)</label><br />
                        <textarea  v-model="additinal_business_address" placeholder="Additional place of business, if any. " id="name" name="additional" type="text" tabindex="1"></textarea>
                    </div>
                    <div class="in_field">
                        <label for="">List of Goods & Services (माल और सेवाओं की सूची)</label><br />
                        <input v-model="goods" placeholder="Enter goods and services" name="basic" />
                    </div>

                <div class="in_field">
                      
                        <label for="">Nature of Business Activity / व्यवसाय गतिविधि की प्रकृति</label><br />
                  
                    </div>
                    <div class="in_field">
                        <label for="">Mobile No. (मोबाइल नंबर)</label><br />
                        <input  v-model="mobile" placeholder="98XXXXXXXX (Without 0 or +91)" id="mobile" name="mobile" type="tel" required pattern="\d{10}" tabindex="3"  title="Enter valid 10 digit mobile number"  />
                    </div>
                    <div class="in_field">
                        <label for="">Email Address (ईमेल पता)</label><br />
                        <input  v-model="email" placeholder="your@gmail.com" id="email" name="email" required="" type="email" tabindex="2" />
                    </div>
                    <div class="in_field">
                        <label for="">Date of commencement of business (कारोबार शुरू करने की तारीख)</label><br />
                        <input type="date" v-model="date" placeholder="DD-MM-YYYY" class="form-control" name="date" id="date" data-select="datepicker" autocomplete="off" />
                    </div>
                    <div class="in_field">
                        <label for="">Do you want to opt composition scheme? (क्या आप कंपोजीशन स्कीम का विकल्प चुनना चाहते हैं?)</label>
                        <div class="control">
                            <label class="radio">
                              <input type="radio" v-model="composition_schema" name="composition_scheme" value="Yes" /> 
                              Yes
                            </label>
                            <label class="radio">
                              <input type="radio" v-model="composition_schema" name="composition_scheme" value="No" checked="" />
                              No
                            </label>
                          </div>
                    </div>
                    <div class="in_field">
                        <label for="">Have you applied GST earlier on same PAN? (क्या आपने पहले समान पैन पर जीएसटी लागू किया है?)</label>
                        <div class="control">
                            <label class="radio">
                              <input type="radio" v-model="same_pan" name="applied_gst" value="Yes" />
                              Yes
                            </label>
                            <label class="radio">
                              <input type="radio" v-model="same_pan" name="applied_gst" value="No" checked="" />
                              No
                            </label>
                          </div>
                    </div>
                    <div class="in_field">
                        <p>I hereby declare that information provided in the online registration form is true to the best of my knowledge and I accept terms, disclaimer, and policies by clicking "Submit Application" button.</p>
                    </div>

                    <div class="in_field">
                        <button>Submit <img
                            src="http://e-startup.co/image/loader.gif"
                            class="load_show"
                            v-if="loader"
                            style={{width: "15px"}}
                          /></button>
                    </div>
                </form>
                </div>
            </div>
<div id="section1" class="listbodyscroll scrolllist_1 service_body">
<div class="description_data" >
<h2 class="title_div">About GST Registration</h2>
<p ><b># Concept:-</b> Goods and Services Tax is a consolidated indirect tax policy that encompasses VAT, CST, Service Tax, Central Excise duty, Entertainment Tax, etc and is valid all over India with effect from 1st July 2017.</p>
<p ><b># When to register for GST:- </b>Mandatory to get GST Registration when annual turnover exceeds INR 40/20 lakh or supply goods and services inter-state or through E-commerce platform.</p>
<p ><b># What are the GST tax rates:- </b>Tax rates vary from 0% to 28% depending on the type of goods &amp; nature of the services you are selling.</p>
<p ><b># Input Tax Credit Availment:- </b>Only business units registered under GST can avail credit of tax paid at the time of purchase while filing GST returns.</p>
<p ><b># Return Filing &amp; Payment:- </b>Every GST registrant requires to file three monthly/quarterly returns and One annual return. Requires paying tax every month.</p>
<p ><b># Composition Scheme:- </b>Business units having an annual turnover less than INR 1.5 crore may opt the scheme. Requires to pay subsidize tax ranges from 1% to 5% &amp; file quarterly returns.</p>
<div class="row" >
<h6 style={{textAlign:"left",fontWeight: "900 !important",marginLeft: "30px", marginBottom:"10px",marginTop:"20px",fontSize: "20px"}}>LEARN MORE ON GST REGISTRATION</h6>
<div class="col-md-6">
<p style={{fontSize: "19px",marginLeft: "13px"}}>Watch the interactive video to<br /> learn all about GST Registration</p>
</div>
<div class="col-md-6">
<div><a href="https://www.youtube.com/watch?v=V8m40Dw4A5o&amp;t=3s" target="_blank"><img src="https://www.e-startupindia.com/theme/template/img/play_icon_gst_youtube_logo.webp" style={{width: "38%",marginTop: "15px",marginLeft: "100px",marginBottom: "20px"}} alt="LEARN MORE ON GST REGISTRATION" class="im_g1" /></a></div>
</div>
</div>
</div>
</div>
<div id="section2" class="listbodyscroll scrolllist_2 service_body">
<div class="description_data">
<h2 class="title_div">When is GST Registration Mandatory in India?</h2>
<p ><b>#Turnover Criteria:- </b>All taxpayers who have an annual turnover above ₹40 lakhs are required to get new GST registration. For Service supply, Turnover limit is ₹20 lakhs.</p>
<p ><b>#Causal taxpayer:- </b>If you supply goods or services in events/exhibitions where you do not have a permanent place of business, you need to get online registration for GST before starting a business. Such a dealer has to pay GST on the basis of an estimated turnover of 90 days. The validity of causal GST Registration is 90 days.</p>
<p ><b>#NRI taxpayer:- </b>NRI taxpayer, who does not have a place of business in India, wishes to start a business, then he has to apply for GST Registration in India before beginning operations in India. The validity of a new registration under GST is 90 days.</p>
<p ><b>#Agents of a supplier &amp; Input service distributor:- </b>All Input service distributor who wants carry-forward benefit of input tax credit requires gst registration.</p>
<p ><b>#Reverse Charge:- </b> A business who requires to pay tax under the reverse charge mechanism must also get registered under GST.</p>
<p ><b>#E-Commerce portal:- </b>Every e-commerce portal (such as Amazon or Flipkart) under which multiple vendors selling their product requires to be enrolled under GST.</p>
<p ><b>#Inter state supply:- </b>Businesses who engage in supply of goods or services outside its state boundaries must get registered with the GST Department. Such businesses are subject to Integrated Goods and Services Tax (IGST), which is charged on the supply of goods or services from one state to another.</p>
<p ><b>#Export:- </b>Exports are Zero Rated Supply in India and therefore, businesses engaged in export must get registered under GST in India.
</p>
</div>
</div>
<div id="section3" class="listbodyscroll scrolllist_3 service_body">
<div class="description_data">
<h2 class="title_div">Why I need GST Registration?</h2>
<p >GST registration not only helps you in getting your business recognized as a legal registrant but also opens a number of opportunities for your business. Benefits to GST registered business at glance are as follows:-</p>
<p ><b>#Become more competitive:- </b>You will be more competitive in comparison to your unregistered competitors since you will carry valid tax registration.</p>
<p ><b>#Expand your business Online:- </b>You cannot sell products or services on E-commerce platform without GST registration. If you're planning to give a blow on E-commerce platform like Flipkart, Amazon, Paytm, Shopify or through your own website, you must need a GSTIN.</p>
<p ><b>#Can take input tax credit:- </b>Only Registered GST holders can avail input of GST tax paid on their purchases and save the cost.</p>
<p ><b>#Can sell all over India without any restrictions:- </b> Without having GSTIN you cannot trade inter-state. This is possible only if you registered your business under GST.</p>
<p ><b>#Apply Government Tenders:- </b>Various government tenders requires GSTIN to apply tender. If you don’t have, you may miss the business opportunity.</p>
<p ><b>#Open Current Bank Account:- </b>Especially, in case of sole proprietor business Banks &amp; Financial Institution does not open a current bank account in the name of business trade name unless you carry any government proof in the name of your business. GST registration certificate can help you to open a current bank account.</p>
<p ><b>#Dealing with MNCs:- </b>Generally, MNC’s does not get comfortable to deal with small business entities until they carry valid tax registration proof.</p>
<div class="row" style={{border:"1px solid #ccc", marginTop: "30px"}}>
<h6 style={{textAlign: "center",fontWeight: "900 !important",position: "relative",marginBottom:"0px",marginTop:"20px",fontSize: "20px"}}>DOWNLOAD FREE GUIDE FOR GST</h6>
<div class="col-md-12">
<form class="text-center" name="frmDownloadFreeGuide" action="" method="post">
<div class="subscribe-gst">
<input type="email" required="" name="email_address" placeholder="Enter Your Email Address" />
<button type="submit" id="DownloadFreeGuide" name="DownloadFreeGuide" value="19">Send</button>
</div>
</form>
<p >YOU ARE SUBSCRIBING TO OUR NEWSLETTERS</p>
</div>
</div>
</div>
</div>
<div id="section4" class="listbodyscroll scrolllist_4 service_body">
<div class="description_data">
<h2 class="title_div">What is GSTIN?</h2>
<p >GSTIN is an abbreviation for Goods and Service Tax Identification Number. It consists 15 alphanumeric digits. This is generated by the Government after you have successfully completed GST registration.</p>
<div>
<img alt="know your GSTIN" src="https://e-startupindia.com/theme/default/images/gstin.webp" data-lazyload-replaced="true" style={{width: "600px",
    height: "330px"}} class="im_ag2" />
</div><br />
<p><b>#First 2 digit show state code.</b></p>
<p ><b>#Next 10 digit indicates PAN Number.</b></p>
<p ><b>#Next 1 shows serial number of gst registration in a state.</b></p>
<p ><b>#Last 2 digits are random.</b></p>
<div class="row row1">
<div class="col-md-5 opcnew">
<div class="card cardicici">
<div class="card-body" >
<img class="img-fluid icici_connect_bank_logo  lazyload" alt="icici bank business banking" src="https://www.e-startupindia.com/theme/template/images/icici_bank_media_logo.webp" />
</div>
<p >After OPC Registration, No need to rush at bank branch offices to open a company current bank account. We will help you to open an account in ICICI Bank while you sit at your place. </p>
<div ><a href="https://cadigital.icicibank.com/SmartFormWeb/apps/services/www/SmartFormWeb/desktopbrowser/default/index.html?source=BCApplication-InstaBill#/" target="_blank" class="signupbutton"><b>Apply Now</b></a><i class="fa fa-arrow-right" aria-hidden="true"></i></div>
</div>
</div>
<div class="col-md-5 opcnew1">
<div class="card cardicici">
<div class="card-body" >
<img class="img-fluid icici_connect_bank_logo  lazyload" alt="instabill" src="https://www.e-startupindia.com/theme/template/img/instabill_banking.webp" />
</div>
<p >With the help of Instabill Mobile App, connect your ICICI Bank current account and do seamless bank accounting, download bank statements and check bank balance in one click.</p>
<div ><a href="https://play.google.com/store/apps/details?id=app.instabillpro" target="_blank" class="signupbutton"><b>SignUp Now</b></a><i class="fa fa-arrow-right" aria-hidden="true" ></i></div>
</div>
</div>
</div>
</div>
</div>
<div id="section5" class="listbodyscroll scrolllist_5 service_body">
<div class="description_data" >
<h2 class="title_div" >What is GST Composition Scheme?</h2>
<p >GST Composition Scheme is for the small taxpayers, which is framed to reduce the tax compliance burden. Small taxpayers need not to file monthly GST returns and they need to pay nominal GST at a fixed rate of turnover. Any business having an annual turnover up to ₹1.5 Crore can opt for GST registration under composition scheme.</p>
<a class="row" href="https://www.e-startupindia.com/blog/gst-composition-scheme-eligibility-benefits-process-who-can-opt/9999.html" id="process"  target="_blank">KNOW MORE ABOUT GST COMPOSITION SCHEME<span ><img src="https://e-startupindia.com/theme/default/images/link icon.png" style={{height:"20px", width:"20px"}} data-lazyload-replaced="true" alt="link icon" /></span></a>
</div>
</div>
<div id="section6" class="listbodyscroll scrolllist_6 service_body" >
<div class="description_data">
<h2 class="title_div">What are the Types of GST Registration?</h2>
<table class="table">
<thead class="thead-light">
<tr>
<th scope="col"></th>
<th scope="col">Composition Scheme</th>
<th scope="col">Regular Scheme</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row">Compliance</th>
<td>Relaxed Compliance in order to safeguard small businessmen.</td>
<td> Normal compliance required.</td>
</tr>
<tr>
<th scope="row">Tax Rate</th>
<td>Composition taxpayers need to pay nominal GST at a fixed rate of turnover, which is normally 1-5%.</td>
<td>Tax rate for regular taxpayers goods and services, which is from 0-28%.</td>
</tr>
<tr>
<th scope="row">Input Tax Credit</th>
<td>Composition taxpayers cannot avail Input tax credit benefit.</td>
<td>Normal taxpayers can avail Input tax credit benefit.</td>
</tr>
<tr>
<th scope="row">GST Return Filing</th>
<td>Composition taxpayers required to file quarterly return.</td>
<td> Normal taxpayers required to file monthly return.</td>
</tr>
<tr>
<th scope="row">Tax Invoice</th>
<td>Composition taxpayers can not issue tax invoice to their customers.</td>
<td>Normal taxpayers can issue tax invoice to their customers.</td>
</tr>
</tbody>
</table>
</div>
</div>
<div id="section6a" class="listbodyscroll scrolllist_6 service_body" >
<div class="description_data">
<h2 class="title_div">Advantages of GST Registration</h2>
<p><b>#1. </b>Validating the legitimacy of a business and granting legal authorization to operate</p>
<p><b>#2. </b>Enhancing the business's credibility with customers, suppliers, and financial institutions</p>
<p><b>#3. </b>Allowing businesses to claim input tax credit on purchases of goods and services utilized for business purposes, thereby reducing their overall tax liability</p>
<p><b>#4. </b>Simplifying the compliance process by eliminating the need for multiple registrations and reducing compliance costs</p>
<p><b>#5. </b>Allowing businesses to broaden their market reach by selling goods and services across India without any limitations on inter-state movement</p>
<p><b>#6. </b>Providing a competitive edge to businesses by lowering their tax burden, enabling them to offer goods and services at a lower cost compared to their competitors</p>
<p><b>#7. </b>Simplifying the tax structure and compliance burden, making it easier for businesses to operate</p>
<p><b>#8. </b>Providing legal protection to businesses by enabling them to take legal action against customers or suppliers in case of non-payment or non-compliance.</p>
</div>
</div>
<div id="section7a" class="listbodyscroll scrolllist_7 service_body">
<div class="applicationProcessSection description_data mt-3" id="applicationProcessSection">
<h2 class="title_div">Penalty for Not Registered under GST</h2>
<p>In accordance with section 122 of the CGST Act, the penalty for not obtaining GST registration in India within time is INR 10,000/- or 10% of tax due from the supply made, whichever is higher. In addition to the penalty, businesses shall be required to pay GST on the supply made along with the interest whether he has collected GST from their customer or not.
</p>
<br />
<p>Furthermore, not having GST Registration can result in: </p>
<p><b>#1. </b>Goods and vehicles may be held in detention.</p>
<p><b>#2. </b>Goods and vehicles may be confiscated.</p>
<p><b>#3. </b>The person or supplier would not be eligible to claim input tax credit.</p>
<p><b>#4. </b>The person or supplier would be unable to transfer the input tax credit.</p>
</div>
</div>
<div id="section7" class="listbodyscroll scrolllist_7 service_body">
<div class="applicationProcessSection description_data mt-3" id="applicationProcessSection">
<h2 class="title_div">GST Registration Process</h2>
<ul class="timeline">
<li class="timeline-item">
<div class="timeline-icon">1</div>
<p >Provide the required business details and information to our web portal.</p>
</li>
<li class="timeline-item">
<div class="timeline-icon">2</div>
<p >Choose a package and pay online with different payment modes available.</p>
</li>
<li class="timeline-item">
<div class="timeline-icon">3</div>
<p >On placing an order, your application will be assigned to one of our dedicated professionals.</p>
</li>
<li class="timeline-item">
<div class="timeline-icon">4</div>
<p >Our professional shall carefully examine the correctness &amp; accuracy of the documents and file GST application form.</p>
</li>
<li class="timeline-item">
<div class="timeline-icon">5</div>
<p >Our professional shall make regular follow up with Government department for processing of GST application online.</p>
</li>
<li class="timeline-item">
<div class="timeline-icon">6</div>
<p >On obtaining GSTIN, we will provide GST certificate along with several eGuides on GST and GST Invoicing Software.</p>
</li>
</ul>
<div class="card cardstyle">
<div class="form" id="servicemorecartform">
<h2 class="advisorsstyle">Talk to Advisors</h2>
<form method="post" name="frmHeaderSection1" action="" novalidate="novalidate">
<input type="hidden" name="position" value="2" />
<div class="row">
<div class="col-md-6 col-12">
<input class="form-control" name="client_name" maxlength="50" type="text" placeholder="Name" />
</div>
<div class="col-md-6 col-12">
<input class="form-control" name="client_email_address" maxlength="50" type="text" placeholder="Email Id" />
</div>
<div class="col-md-6 col-12">
<input class="form-control" name="client_mobile_number" maxlength="50" type="text" placeholder="Contact Number" />
</div>
<div class="col-md-6 col-12">
<img src="https://www.e-startupindia.com/pluscaptcha.php?pos=2" alt="captcha" style={{width: "30%",float: "left",height: "30px",borderRadius: "5px",
    marginTop: "3%"}} class="captcha_1" />
<input type="tel" class="form-control" placeholder="Enter Answer" name="client_captche" maxlength="2" />
<div class="clear"></div>
</div>

<div class="clear"></div>
<br />
<div class="col-md-12 col-12" >
<center><button class="btn-form1" id="header_contactform1" name="HeaderContactForm" value="Header Contact">Submit</button></center>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
<div id="section7b" class="listbodyscroll scrolllist_7 service_body">
<div class="applicationProcessSection description_data mt-3" id="applicationProcessSection">
<h2 class="title_div">How to Check GST Registration Application Status?</h2>
<p><b>#1. </b>Visit the GST portal at <a href="https://www.gst.gov.in/" class="text-color" target="_blank">www.gst.gov.in <i class="fa fa-external-link  mx-0"></i></a></p>
<p><b>#2. </b>Click on the Services tab and select the Registration option.</p>
<p><b>#3. </b>Click on the Track Application Status option.</p>
<p><b>#4. </b>Enter the ARN (Application Reference Number) received while filing the GST registration application.</p>
<p><b>#5. </b>Enter the captcha code shown on the screen.</p>
<p><b>#6. </b>Click on the Search button to check the application status.</p>
<p><b>#7. </b>The status of the application will be displayed on the screen. It may show one of the following status:<br />
- Submitted<br />
- Pending for verification<br />
- Pending for clarification<br />
- Rejected<br />
- Approved<br />
</p>
<p><b>#8. </b>If the application is rejected, the reason for rejection will also be mentioned.</p>
<p><b>#9. </b>If the status is pending for clarification, the applicant needs to provide the required information and submit the application again.</p>
<p><b>#10. </b>Once the application is approved, the applicant will receive the GST registration certificate.</p>
</div>
</div>
<div id="section7c" class="listbodyscroll scrolllist_7 service_body">
<div class="applicationProcessSection description_data mt-3" id="applicationProcessSection">
<h2 class="title_div">How to Download the GST Registration Certificate?
</h2>
<p><b>#1. </b>Visit the GST portal at <a href="https://www.gst.gov.in/" class="text-color" target="_blank">www.gst.gov.in <i class="fa fa-external-link mx-0"></i></a></p>
<p><b>#2. </b>Click on the Services tab and select the Registration option.</p>
<p><b>#3. </b>Click on the Download Certificate option.</p>
<p><b>#4. </b>Enter the ARN (Application Reference Number) received while filing the GST registration application.</p>
<p><b>#5. </b>Enter the captcha code shown on the screen.</p>
<p><b>#6. </b>Click on the Download button to download the certificate.</p>
<p><b>#7. </b>The GST registration certificate will be downloaded in PDF format.</p>
</div>
</div>
<div id="section8" class="listbodyscroll scrolllist_8 service_body">
<div class="description_data">
<h2 class="title_div">Documents Required for GST Registration</h2>
<p >1. <b>PAN Card of the Business or Applicant:-</b> GSTIN is linked to the PAN of the business. Hence, PAN is required to obtain GST certificate.
</p><p >2. <b>Identity and Address Proof of Promoters:-</b> documents like PAN, passport, driving license, aadhaar card or voters identity card must be submitted for all the promoters.
</p><p >3. <b>Address Proof for Place of Business:-</b> Documents like rental agreement or sale deed along with copies of electricity bill or latest property tax receipt or municipal khata copy must be submitted for the address mentioned in the GST application.
</p><p >4. <b>Bank Account Proof:-</b> Scanned copy of the first page of bank passbook showing a few transaction and address of the business must be submitted for the bank account mentioned in the registration application.
</p><div >
<img alt="Document For GST Registration" src="https://e-startupindia.com/theme/default/images/document.webp" data-lazyload-replaced="true" style={{width: "600px",height: "auto"}} class="document_i" />
</div>
</div>
</div>
</div>

<div class="moredetails_form" >
 <div class="Instructions">
                <h1>Instructions</h1>
                <div class="br">
                    <div class="step">
                        <p><span>1. Application Type : </span> Choose the appropriate type of application.</p>
                        <p>- Select GST Registration for applying for a new gst registration number.</p>
                        <p>- Select GST Modification for changing information in existing GST Certificate.</p>
                        <p>- Select GST Cancellation for canceling existing GST Number.</p>
                    </div>
                    <div class="step">
                        <p><span>2. Name of Firm : </span> Enter Trade / Company / Entity Name under which you will do business.</p>
                    </div>
                    <div class="step">
                        <p><span>3. Type of Business : </span> Select type of business entity.</p>
                    </div>
                    <div class="step">
                        <p><span>4. Complete address of the principal place of business : </span> Enter the complete address of the firm from where you will do business operations. Address must contain district,  city, state and pincode. Address must match with the available address proof such as electricity bill.
                        </p>
                    </div>
                    <div class="step">
                        <p><span>5. Complete address of additional place of business : </span> Provide all addresses of additional business places such as warehouse, godown, storage, mini outlet, corporate office etc.
                        </p>
                    </div>
                    <div class="step">
                        <p><span>6. List of Goods & Services : </span> Provide a complete list of goods and services that you will sell under an applicant business firm.
                        </p>
                    </div>
                    <div class="step">
                        <p><span>7. Nature of Business Activity : </span> Select the nature of activity you'll do under the applying GSTIN. You can select multiple activities for the business.
                        </p>
                    </div>
                    <div class="step">
                        <p><span>8. Applicant Full Name : </span> Enter name of proprietor / partner / director who is applying GSTIN for the business.
                        </p>
                    </div>
                    <div class="step">
                        <p><span>9. Mobile Number : </span> Enter applicant mobile number who will receive otp for application verification.
                        </p>
                    </div>
                    <div class="step">
                        <p><span>10. Email Address : </span> Enter applicant email id who will receive otp for application verification.</p>
                    </div>
                    <div class="step">
                        <p><span>11. Date of commencement of business : </span> Enter date on which business has been started. Enter date of incorporation in case of Company / OPC / LLP.</p>
                    </div>
                    <div class="step">
                        <p><span>12. Do you want to opt for a composition scheme? : </span> A taxpayer whose turnover is below Rs 1.0 crore can opt for Composition Scheme. In case of North-Eastern states and Himachal Pradesh, the limit is now Rs 75 lakh. The following people cannot opt for the scheme- Manufacturer of ice cream, pan masala, or tobacco. A person making inter-state supplies. A casual taxable person or a non-resident taxable person. Businesses which supply goods through an e-commerce operator.
                        </p>
                    </div>
                </div>
            </div>
            <div class="form_s">
<div class="form" id="servicemorecartform">

<h3 >CONTACT US</h3>
<form method="post" name="frmHeaderSection2" action="" novalidate="novalidate">
<input type="hidden" name="position" value="3" />
<input class="form-control" name="client_name" type="text" placeholder="Name" />
<input class="form-control" name="client_email_address" type="text" placeholder="Email Id" />
<input class="form-control" name="client_mobile_number" type="text" placeholder="Contact Number" />
<img src="https://www.e-startupindia.com/pluscaptcha.php?pos=3"  alt="captcha" data-lazyload-replaced="true" />
<input type="tel" class="form-control" placeholder="Enter Answer" name="client_captche" maxlength="2" />
<div class="clear"></div>

<div class="whats_noti">
            <p class="what_in" ><input type="checkbox" checked /> Send updates on Whatsapp</p>
            <span class="what_noti">I agree to <a href="terms-and-conditions.html" target="_blank">terms</a> and <a href="privacy-policy.html" target="_blank">privacy policy</a></span>

        </div>
<button class="btn-form" id="header_contactform2" name="HeaderContactForm" value="Header Contact">Submit</button>
</form>
</div>
</div>
</div>
<div class="info">
    <div class="container_a">
        <div class="row">
            
           
        </div>
    </div>
</div>


     </div>
</div>
<div class="clear"></div>

<section class="pacakage" id="e-startup_package">
<div class="container">
<h5 class="custom-text"><span>PACKAGES</span></h5>
<div class="row package_display">
<div class="col-sm-4">
<div class="card basic row">
<div class="card-front">
<div class="pacakage-box text-center">
<div class="pacakage-header">
<h3>Basic</h3>
<p>
<i class="fa fa-star" aria-hidden="true"></i>
</p>
</div>
<div class="pacakage-price">
<h3><i class="fa fa-inr" aria-hidden="true"></i> 1499 <br /><small><i>Plus taxes</i></small></h3>
</div>
<div class="pacakage-content">
GST Registration<br /><br />Current Bank Account*<br /><br />Dedicated GST Pro Support<br /><br />GST Starter Guide<br /><span><br />GST Invoice Guide&nbsp;<br /><br />GST Invoice Template<br /></span><span><br />Guidance on HSN/SAC Code</span><span><br /><br />GST Tax Rate List<br /><br />GST E-Waybill Guide</span><br />
</div>
<button class="marginT40 basic-btn">LET's START</button>
</div>
</div>
<div class="card-back">
<i class="fa fa-arrow-left gob" aria-hidden="true"></i>
<div class="ui-form-01">
<form class="tab-1" name="frmPackageSignup1" method="post" action="" novalidate="novalidate"><input type="hidden" name="signup_package" value="111159" />
<div class="ui-form-01-wraper">
<p><span>Signup</span></p>
<p class="package-signup-error"></p>
<div class="input-icon">
<input type="text" placeholder="Name" name="signup_fullname" value="" maxlength="100" />
<i class="icofont icofont-ui-user"></i>
</div>
<div class="input-icon">
<input type="email" placeholder="Email Address" name="signup_email_address" value="" maxlength="100" />
<i class="icofont icofont-email"></i>
</div>
<div class="input-icon">
<input type="tel" placeholder="Mobile No." name="signup_mobile_no" value="" maxlength="10" />
<i class="icofont icofont-mobile-phone"></i>
</div>
<p class="package-processing"></p>
<button type="submit" class="btn btn-default">Submit</button>
<p class="log">login</p>
</div>
</form>
<form class="tab-2" name="frmPackageSignin1" method="post" action="" novalidate="novalidate"><input type="hidden" name="login_package" value="111159" />
<div class="ui-form-01-wraper">
<p><span>Login</span></p>
<p class="package-login-error"></p>
<div class="input-icon">
<input type="text" placeholder="Email Address" name="login_email_address" value="" maxlength="100" />
<i class="icofont icofont-ui-user"></i>
</div>
<div >
<input type="password" placeholder="Password" name="login_password" id="login_password-2" value="" maxlength="50" />
<div style={{position: "absolute",right: 0,width: "30px",overflow: "hidden",top: 0,height: "40px"}}>
<input type="checkbox" style={{position: "absolute",top: 0,right: 0,bottom: 0,left: 0,opacity: 0,width: "100%",minWidth: "100%"}} />
<i class="fa fa-eye" aria-hidden="true"></i>
</div>
</div>
<p class="package-processing"></p>
<button type="submit" class="btn btn-default" name="user_login">Login</button>
<p class="sig">Signup</p>
<p><a href="https://www.e-startupindia.com/forgot-your-password.html" >Forgot Password</a></p>
</div>
</form>
</div>
</div>
</div>
</div>
<div class="col-sm-4">
<div class="card row">
<div class="card-front">
<div class="pacakage-box text-center standerd">
<div class="pacakage-header">
<h3>Standard</h3>
<p>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
</p>
</div>
<div class="pacakage-price">
<h3><i class="fa fa-inr" aria-hidden="true"></i> 2499 <br /><small><i>Plus taxes</i></small></h3>
</div>
<div class="pacakage-content">
GST Registration<br /><br />Current Bank Account*<br /><br />Dedicated GST Pro Support<br /><br />GST Starter Guide<br /><span><br />GST Invoice Guide&nbsp;<br /><br />GST Invoice Template<br /></span><span><br />Guidance on HSN/SAC Code</span><span><br /><br />GST Tax Rate List<br /><br />GST E-Waybill Guide<br /><br /></span>GST Billing Software for 1 year subscription**<br />[Desktop + Mobile App]
</div>
<button class="marginT40 standard-btn basic-btn">LET's START</button>
</div>
</div>
<div class="card-back">
<i class="fa fa-arrow-left gob" aria-hidden="true"></i>
<div class="ui-form-01">
<form class="tab-1" name="frmPackageSignup2" method="post" action="" novalidate="novalidate"><input type="hidden" name="signup_package" value="111160" />
<div class="ui-form-01-wraper">
<p><span>Signup</span></p>
<p class="package-signup-error"></p>
<div class="input-icon">
<input type="text" placeholder="Name" name="signup_fullname" value="" maxlength="100" />
<i class="icofont icofont-ui-user"></i>
</div>
<div class="input-icon">
<input type="email" placeholder="Email Address" name="signup_email_address" value="" maxlength="100" />
<i class="icofont icofont-email"></i>
</div>
<div class="input-icon">
<input type="tel" placeholder="Mobile No." name="signup_mobile_no" value="" maxlength="10" />
<i class="icofont icofont-mobile-phone"></i>
</div>
<p class="package-processing"></p>
<button type="submit" class="btn btn-default">Submit</button>
<p class="log">login</p>
</div>
</form>
<form class="tab-2" name="frmPackageSignin2" method="post" action="" novalidate="novalidate"><input type="hidden" name="login_package" value="111160" />
<div class="ui-form-01-wraper">
<p><span>Login</span></p>
<p class="package-login-error"></p>
<div class="input-icon">
<input type="text" placeholder="Email Address" name="login_email_address" value="" maxlength="100" />
<i class="icofont icofont-ui-user"></i>
</div>
<div >
<input type="password" placeholder="Password" name="login_password" id="login_password-2" value="" maxlength="50" />
<div>
<input type="checkbox"/>
<i class="fa fa-eye" aria-hidden="true"></i>
</div>
</div>
<p class="package-processing"></p>
<button type="submit" class="btn btn-default" name="user_login">Login</button>
<p class="sig">Signup</p>
<p><a href="https://www.e-startupindia.com/forgot-your-password.html" >Forgot Password</a></p>
</div>
</form>
</div>
</div>
</div>
</div>
<div class="col-sm-4">
<div class="card premium row">
<div class="card-front">
<div class="pacakage-box text-center">
<div class="pacakage-header">
<h3>Premium</h3>
<p>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
</p>
</div>
<div class="pacakage-price">
<h3><i class="fa fa-inr" aria-hidden="true"></i> 7449 <br /><small><i>Plus taxes</i></small></h3>
</div>
<div class="pacakage-content">
FREE GST Registration<br /><br />Current Bank Account*<br /><br />GST Return Annual Package<br /><br />GST Billing Software for 1 year subscription**<br />[Desktop + Mobile App]<br /><br />Dedicated GST Pro Support<br /><br />GST Starter Guide<br /><br />GST Invoice Guide&nbsp;<br /><br />GST Invoice Template<br /><br />Guidance on HSN/SAC Code<br /><br />GST Tax Rate List<br /><br />GST E-Waybill Guide<br /><br />Single Day Ad Promotion<span><br /><br /></span>
</div>
<button class="marginT40 premium-btn basic-btn">LET's START</button>
</div>
</div>
<div class="card-back">
<i class="fa fa-arrow-left gob" aria-hidden="true"></i>
<div class="ui-form-01">
<form class="tab-1" name="frmPackageSignup3" method="post" action="" novalidate="novalidate"><input type="hidden" name="signup_package" value="111161" />
<div class="ui-form-01-wraper">
<p><span>Signup</span></p>
<p class="package-signup-error"></p>
<div class="input-icon">
<input type="text" placeholder="Name" name="signup_fullname" value="" maxlength="100" />
<i class="icofont icofont-ui-user"></i>
</div>
<div class="input-icon">
<input type="email" placeholder="Email Address" name="signup_email_address" value="" maxlength="100" />
<i class="icofont icofont-email"></i>
</div>
<div class="input-icon">
<input type="tel" placeholder="Mobile No." name="signup_mobile_no" value="" maxlength="10" />
<i class="icofont icofont-mobile-phone"></i>
</div>
<p class="package-processing"></p>
<button type="submit" class="btn btn-default">Submit</button>
<p class="log">login</p>
</div>
</form>
<form class="tab-2" name="frmPackageSignin3" method="post" action="" novalidate="novalidate"><input type="hidden" name="login_package" value="111161" />
<div class="ui-form-01-wraper">
<p><span>Login</span></p>
<p class="package-login-error"></p>
<div class="input-icon">
<input type="text" placeholder="Email Address" name="login_email_address" value="" maxlength="100" />
<i class="icofont icofont-ui-user"></i>
</div>
<div >
<input type="password" placeholder="Password" name="login_password" id="login_password-2" value="" maxlength="50" />
<div style={{position: "absolute",right: 0,width: "30px",overflow: "hidden",top: 0,height: "40px"}}>
<input type="checkbox"  />
<i class="fa fa-eye" aria-hidden="true"></i>
</div>
</div>
<p class="package-processing"></p>
<button type="submit" class="btn btn-default" name="user_login">Login</button>
<p class="sig">Signup</p>
<p><a href="https://www.e-startupindia.com/forgot-your-password.html" >Forgot Password</a></p>
</div>
</form>
</div>
</div>
</div>
</div>



<div class="col-sm-4">
<div class="card standard row">
<div class="card-front">
<div class="pacakage-box text-center standerd">
<div class="pacakage-header">
<h3>Standard</h3>
<p>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
</p>
</div>
<div class="pacakage-price">
<h3><i class="fa fa-inr" aria-hidden="true"></i> 2499 <br /><small><i>Plus taxes</i></small></h3>
</div>
<div class="pacakage-content">
GST Registration<br /><br />Current Bank Account*<br /><br />Dedicated GST Pro Support<br /><br />GST Starter Guide<br /><span><br />GST Invoice Guide&nbsp;<br /><br />GST Invoice Template<br /></span><span><br />Guidance on HSN/SAC Code</span><span><br /><br />GST Tax Rate List<br /><br />GST E-Waybill Guide<br /><br /></span>GST Billing Software for 1 year subscription**<br />[Desktop + Mobile App]
</div>
<button class="marginT40 standard-btn basic-btn">LET's START</button>
</div>
</div>
<div class="card-back">
<i class="fa fa-arrow-left gob" aria-hidden="true"></i>
<div class="ui-form-01">
<form class="tab-1" name="frmPackageSignup2" method="post" action="" novalidate="novalidate"><input type="hidden" name="signup_package" value="111160" />
<div class="ui-form-01-wraper">
<p><span>Signup</span></p>
<p class="package-signup-error"></p>
<div class="input-icon">
<input type="text" placeholder="Name" name="signup_fullname" value="" maxlength="100" />
<i class="icofont icofont-ui-user"></i>
</div>
<div class="input-icon">
<input type="email" placeholder="Email Address" name="signup_email_address" value="" maxlength="100" />
<i class="icofont icofont-email"></i>
</div>
<div class="input-icon">
<input type="tel" placeholder="Mobile No." name="signup_mobile_no" value="" maxlength="10" />
<i class="icofont icofont-mobile-phone"></i>
</div>
<p class="package-processing"></p>
<button type="submit" class="btn btn-default">Submit</button>
<p class="log">login</p>
</div>
</form>
<form class="tab-2" name="frmPackageSignin2" method="post" action="" novalidate="novalidate"><input type="hidden" name="login_package" value="111160" />
<div class="ui-form-01-wraper">
<p><span>Login</span></p>
<p class="package-login-error"></p>
<div class="input-icon">
<input type="text" placeholder="Email Address" name="login_email_address" value="" maxlength="100" />
<i class="icofont icofont-ui-user"></i>
</div>
<div >
<input type="password" placeholder="Password" name="login_password" id="login_password-2" value="" maxlength="50" />
<div>
<input type="checkbox" />
<i class="fa fa-eye" aria-hidden="true" ></i>
</div>
</div>
<p class="package-processing"></p>
<button type="submit" class="btn btn-default" name="user_login">Login</button>
<p class="sig">Signup</p>
<p><a href="https://www.e-startupindia.com/forgot-your-password.html" >Forgot Password</a></p>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<div class="notes">
    <div class="container">
        <h1>Important Notes</h1>
        <p><b ># </b> Document requirement for GST Registration
        </p>
        <p><i class="fa fa-check-square-o" aria-hidden="true"></i> Passport Size Photograph</p>
        <p><i class="fa fa-check-square-o" aria-hidden="true"></i> Aadhar Card or Passport or Driving License of Applicant</p>
        <p><i class="fa fa-check-square-o" aria-hidden="true"></i> PAN Card</p>
        <p><i class="fa fa-check-square-o" aria-hidden="true"></i> Address proof of business premises Electricity bill from owner (+) Rent Agreement OR NOC</p>
        <p><i class="fa fa-check-square-o" aria-hidden="true"></i> All Bank Account Proof</p>
        <p><b ># </b> No Input Tax Credit can be claimed by a dealer opting for composition scheme The dealer cannot supply GST exempted goods The taxpayer has to pay tax at normal rates for transactions under the Reverse Charge Mechanism If a taxable person has different segments of businesses (such as textile, electronic accessories, groceries, etc.) under the same PAN, they must register all such businesses under the scheme collectively or opt out of the scheme. The taxpayer has to mention the words ‘composition taxable person’ on every notice or signboard displayed prominently at their place of business. The taxpayer has to mention the words ‘composition taxable person’ on every bill of supply issued by him. As per the CGST (Amendment) Act, 2018, a manufacturer or trader can now also supply services to an extent of ten percent of turnover, or Rs.5 lakhs, whichever is higher. This amendment will be applicable from the 1st of Feb, 2019.</p>
        <p><b ># </b> successful GST Registration, GST Taxpayer required to file timely GST Return and pay taxes
        </p>
           
    </div>
</div>


<div class="faq">
    <section class="faq-section">
        <div class="container">
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <div class="row">
                            <div class="">
                                <div class="faq" id="accordion">
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-1">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-1" data-aria-expanded="true" data-aria-controls="faqCollapse-1">
                                                    <span class="badge">Q</span>What is GST ?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-1" class="collapse" aria-labelledby="faqHeading-1" data-parent="#accordion">
                                            <div class="card-body">
                                                <p>GST stands for goods and service tax. it is an indirect tax which has to be collected from customers when you sell your goods or services and required to be submitted to the government. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-2">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-2" data-aria-expanded="false" data-aria-controls="faqCollapse-2">
                                                    <span class="badge">Q</span> When is GST registration mandatory?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-2" class="collapse" aria-labelledby="faqHeading-2" data-parent="#accordion">
                                            <div class="card-body">
                                                <p>It is mandatory to get GST registration under-
                                                    <ul><li>If your annual turnover exceeds INR 40 Lacs* or</li><li>If you are doing inter-state sales or</li><li>If you are selling products online through e-commerce portal or</li><li>If you are into the import or export business</li><li>If you want to raise a tax invoice for your customers</li><li>If business participating in exhibition/event outside the State as Casual Taxable Payer</li></ul>
                                                    *In case of North Eastern States, an annual&nbsp;turnover threshold limit is INR 20 Lakhs
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-3">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-3" data-aria-expanded="false" data-aria-controls="faqCollapse-3">
                                                    <span class="badge">Q</span>Can I be voluntarily registered under GST?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-3" class="collapse" aria-labelledby="faqHeading-3" data-parent="#accordion">
                                            <div class="card-body">
                                                <p>Yes, you can voluntarily get Registered under GST even if your annual turnover does not exceed the threshold limit (40/20 Lacs).<br />
                                                    <br />
                                                    Registering under GST not only helps you in getting your business recognized as a legal registrant but also help you avail various benefits like avail to raise GST Invoice, avail input tax credit, and much more.<br />
                                                    <br /></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-4">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-4" data-aria-expanded="false" data-aria-controls="faqCollapse-4">
                                                    <span class="badge">Q</span> When a business needs multiple GSTINs?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-4" class="collapse" aria-labelledby="faqHeading-4" data-parent="#accordion">
                                            <div class="card-body">
                                                <p>A business needs to get more than one GST number if,
                                                    <ul>
                                                        <li>A business entity is supplying goods &amp; services from multiple States, then he/she mandatorily required to register under GST in different States.</li>
                                                        <li>Further, any business entity can get multiple GSTIN even if they are operating from a single State under multiple verticals to avoid accounting complexity between multiple businesses.</li>
                                                        </ul><strong>Illustration</strong><br />XYZ Private Limited doing the business of selling merchandise and also doing the business of selling software from Bangalore only. Still, a company can apply for multiple GST numbers for their different business domain.<br />
                                                        <br />
                                                        If you are supplying goods and services from one state to all over India. You do not need multiple GST Certificates.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-5">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-5" data-aria-expanded="false" data-aria-controls="faqCollapse-5">
                                                    <span class="badge">Q</span> Is there any penalty for not registering under GST?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-5" class="collapse" aria-labelledby="faqHeading-5" data-parent="#accordion">
                                            <div class="card-body">
                                                <p> If any business entity mandatorily required to register under GST, however, failed to apply or intentionally ignoring the same then business is liable to pay the penalty of 100% of the tax due or INR. 10,000 whichever is higher </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-6">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-6" data-aria-expanded="false" data-aria-controls="faqCollapse-6">
                                                    <span class="badge">Q</span> What are the details and documents required for GST registration?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-6" class="collapse" aria-labelledby="faqHeading-6" data-parent="#accordion">
                                            <div class="card-body">
                                                <p>The documents required depends upon the&nbsp;type of business you are running as. Following below documents required for GST Registration: -<ul><li>Passport Size Photograph</li><li>Aadhar card or Passport or Driving License</li><li>Pan card of business entity</li><li>Address proof of business premises&nbsp;</li><li>Bank Statement or Cancel cheque or Passbook</li></ul><b>ADDITIONAL DOCUMENTS FOR PRIVATE LIMITED COMPANY /LLP /OPC / PARTNERSHIP FIRM</b><ul><li>Certificate of Incorporation in case of Company, OPC or LLP</li><li>Partnership Deed in case of partnership firm</li></ul></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-7">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-7" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span class="badge">Q</span> What is GSTIN?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-7" class="collapse" aria-labelledby="faqHeading-7" data-parent="#accordion">
                                            <div class="card-body">
                                                <p>GSTIN stands for Goods and Service Tax Identification Number consists of 15 digits. This will be get generated from government end when you have successfully applied for GST registration.
                                                    <ul>
                                                        <li>First 2 digit denotes represent State in which business registered under GST</li>
                                                        <li>Next 10 Digits denotes PAN of business entity</li>
                                                        <li>13th digit denotes the number&nbsp;of business located in the same state</li>
                                                        <li>Last two digits are randomly generated.</li>
                                                        </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-8">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-8" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span class="badge">Q</span> How much GST rate will apply to my business?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-8" class="collapse" aria-labelledby="faqHeading-8" data-parent="#accordion">
                                            <div class="card-body">
                                                <p>GST rate varies from
                                                    nature of goods/services you are selling; it ranges from 0% to 28%. To find out
                                                    GST rate on your business download our GST guide from above&nbsp; 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-9">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-9" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span class="badge">Q</span> Can I sell both Goods and Services with one GSTIN?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-9" class="collapse" aria-labelledby="faqHeading-9" data-parent="#accordion">
                                            <div class="card-body">
                                                <p>Yes, you can sell both Goods and Services with one GST number, Provided you have listed such Goods/Services while registering under GST.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-10">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-10" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span class="badge">Q</span> Can i apply GST on our firm name?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-10" class="collapse" aria-labelledby="faqHeading-10" data-parent="#accordion">
                                            <div class="card-body">
                                                <p>Yes, in case of individual/sole proprietorship you are free to apply for GST registration on your firm name. Further, you can apply on your personal name as well. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-11">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-11" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span class="badge">Q</span> Is the current account mandatory for the firm to be registered for GST?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-11" class="collapse" aria-labelledby="faqHeading-11" data-parent="#accordion">
                                            <div class="card-body">
                                                <p>No, both savings and current accounts can be provided for getting registered under GST. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-12">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-12" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span class="badge">Q</span> Can I get a GST certificate on my home address?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-12" class="collapse" aria-labelledby="faqHeading-12" data-parent="#accordion">
                                            <div class="card-body">
                                                <p>Sure why not, you can start a business from your home. You just need to provide proof of your residential address for getting registered for GST.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-13">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-13" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span class="badge">Q</span> What to do after getting GST number?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-13" class="collapse" aria-labelledby="faqHeading-13" data-parent="#accordion">
                                            <div class="card-body">
                                                <p> This is the most common question business doers are facing these days i.e. what are the compliances after obtaining GST certificate?
                                                    Following things, you must do after obtaining GSTIN Number:
                                                </p>
                                                <ul>
                                                    <li>Affix GST Certificate within your business premises.</li>
                                                    <li>Issue GST compliant Invoice.</li><br />Sign up for FREE Instabill GST Invoice Billing Software or Download Android Mobile App.
                                                    <li>Timely file your GST Return.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-14">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-14" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span class="badge">Q</span> Do i have to charge any tax from the customers, if my turnover is not exceeding 40 lakh?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-14" class="collapse" aria-labelledby="faqHeading-14" data-parent="#accordion">
                                            <div class="card-body">
                                                <p> Yes, from the very moment you obtain GST registration certificate, you need to charge GST tax from your customers on every sale.
                                                </p>
                                                <ul>
                                                    <li>Don't know how to charge gst tax from customers?</li>
                                                    <li>Sign up  Instabill GST Invoice Billing Software for FREE.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-15">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-15" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span class="badge">Q</span> If I am selling my goods all over India, do i need to apply GST Registration for all states?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-15" class="collapse" aria-labelledby="faqHeading-15" data-parent="#accordion">
                                            <div class="card-body">
                                                <p>No, you need single GST registration if you are supplying goods from single state to all over India. If you are supplying goods from 2 or more states then you require registering under GST of all such states. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-16">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-16" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span class="badge">Q</span>  What is the procedure to migrate from the service tax account to GST registration?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-16" class="collapse" aria-labelledby="faqHeading-16" data-parent="#accordion">
                                            <div class="card-body">
                                                <p>The process of converting from the old service account to GSTN through GST registration is as follows- </p>
                                                <li>1.Login to CBIC Portal.</li>
                                                <li>2.Receive the Provisional id and password.</li>
                                                <li>3. Create the new user id and password on the GST portal.</li>
                                                <li>4. Enter all your business details along with the promoter details and the business address, Bank details and upload the required documents on the GST portal.</li>
                                                <li>5. Finally, verify with the DSC or Aadhar generated EVC.</li>
                                           
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-17">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-17" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span class="badge">Q</span>  What is GST Composition Scheme?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-17" class="collapse" aria-labelledby="faqHeading-17" data-parent="#accordion">
                                            <div class="card-body">
                                                <p> GST Composition Scheme is an easy scheme made for the small taxpayers to reduce the compliance burden. Small taxpayers can get rid of tedious GST formalities and pay GST at a fixed rate of turnover.Any business having an annual turnover less than ₹2 Crore* can opt for composition scheme under GST registration application.<br />*For Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Tripura, Sikkim and Himachal Pradesh the above threshold limit is ₹1 Crore. </p>
                                               
                                           
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-18">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-18" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span class="badge">Q</span>  What are Benefit of GST Composition Scheme?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-18" class="collapse" aria-labelledby="faqHeading-18" data-parent="#accordion">
                                            <div class="card-body">
                                                <p><b>Advantages of GST Composition scheme</b></p>
                                                <p>Need to file a single quarterly return. Four returns in a year<br />
                                                    Limited compliances<br />
                                                    Less tax liability<br />
                                                    Pay small amount of tax on turnover (1% for traders & 5% for restaurant)<br />
                                                    Not require maintaining detailed records<br />
                                                    Can provide auxiliary services up to ₹ 5 lakhs annually under the composition scheme.
                                                <b>Disadvantages of GST Composition scheme</b>
                                                Cannot avail input tax credit of purchases made<br />
                                                Cannot issue tax invoice<br />
                                                Cannot charge composition tax on invoice from customer as usual practice in case of normal GST scheme</p>
                                               
                                           
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-19">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-19" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span class="badge">Q</span> Who can NOT opt for composition scheme?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-19" class="collapse" aria-labelledby="faqHeading-19" data-parent="#accordion">
                                            <div class="card-body">
                                               
                                                <p>If Annual turnover exceeds ₹ 1.5 Crore<br />
                                                    If you involved in Inter-State supplies<br />
                                                    All Service Sector Business except restaurant<br />
                                                    Importer of goods & services<br />
                                                    E-commerce sellers<br />
                                                    Supplier of non-taxable goods<br />
                                                    Manufacturer of Notified Goods<br />
                                                <b>Relaxation announced on GST Composition Scheme on 23rd GST Council Meeting held.</b>
                                               </p>
                                               
                                           
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-20">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-20" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span class="badge">Q</span> What is ARN in GST Registration ?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-20" class="collapse" aria-labelledby="faqHeading-20" data-parent="#accordion">
                                            <div class="card-body">
                                               
                                                <p>ARN stands for Application Reference Number. It is the conclusive proof of successful submission of the application to the GST servers. It is generated after the TRN (Temporary Reference Number) & uploading of requisite documents
                                               </p>
                                               
                                           
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-21">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-21" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span class="badge">Q</span> What is Principal Place of Business?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-21" class="collapse" aria-labelledby="faqHeading-21" data-parent="#accordion">
                                            <div class="card-body">
                                               
                                                <p>Principal Place of Business is the primary location within the State where a taxpayer’s business is performed. The principal place of business is generally where the business’s books of accounts and records are kept and is often where the head of the firm or at least top management is located..
                                               </p>
                                               
                                           
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-22">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-22" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span class="badge">Q</span> What are HSN and SAC code in GST Registration?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-22" class="collapse" aria-labelledby="faqHeading-22" data-parent="#accordion">
                                            <div class="card-body">
                                               
                                                <p>HSN stands for Harmonized System of Nomenclature which is internationally accepted product coding system to maintain uniformity in the classification of goods. Service Accounting Codes (SAC) are adopted by the Central Board of Excise and Customs (CBEC) for identification of the services
                                               </p>
                                               
                                           
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-23">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-23" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span class="badge">Q</span> Can I make changes in my firm's or company's Name, State Name and PAN in the enrollment application?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-23" class="collapse" aria-labelledby="faqHeading-23" data-parent="#accordion">
                                            <div class="card-body">
                                               
                                                <p>No, In case of private limited company, LLP, OPC, and partnership firm you can not change the name and other details however in case of sole proprietorship firm it is possible to change the business trade name 
                                               </p>
                                               
                                           
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-24">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-24" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span class="badge">Q</span> Is Digital Signature Required for GST registration?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-24" class="collapse" aria-labelledby="faqHeading-24" data-parent="#accordion">
                                            <div class="card-body">
                                               
                                                <p>Yes, Digital Signature Certificate is required if you are Private limited, Public limited, LLP or One Person Company 
                                               </p>
                                               
                                           
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-25">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-25" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span class="badge">Q</span> Do you provide this service in my town?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-25" class="collapse" aria-labelledby="faqHeading-25" data-parent="#accordion">
                                            <div class="card-body">
                                               
                                                <p>Yes E-StartupIndia is an online platform serving all over India no matters wherever you are doing business all you need is internet connection on your mobile or desktop and we are ready to get your job done 
                                               </p>
                                               
                                           
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="faqHeading-26">
                                            <div class="mb-0">
                                                <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-26" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                                    <span class="badge">Q</span>Do I need to physically present for the process?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-26" class="collapse" aria-labelledby="faqHeading-26" data-parent="#accordion">
                                            <div class="card-body">
                                               
                                                <p>No, You don’t need to be physically present for the process, E-StartupIndia is an online catering platform all you need is internet connection  in your phone/computer and the required documents with you and we can get the job done no matters even if you are present at remotest location of the India 
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
   </>
  )
}

export default page
