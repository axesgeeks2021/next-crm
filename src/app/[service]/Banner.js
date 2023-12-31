"use client"

import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'
import Loader from '../components/Loader'

function Banner(props) {

  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [check, setCheck] = useState(true)
  const [buttonLoading, setButtonLoading] = useState(false)
  const [text, setText] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    username: "",
    message: ""
  })

  const { email,message, mobile, name, password, username } = text

  const handleText = e => {
    if (mobile.length > 10) {
      alert("number can't be greater than 10 digits")
      return setText({
        mobile: mobile.slice(0, -1)
      })
    }
    setText({ ...text, [e.target.name]: e.target.value })
  }

  const fetchCreateLead = e => {
    e.preventDefault()
    try {
      setButtonLoading(true)
      const myHeaders = new Headers();
      myHeaders.append("Cookie", "PHPSESSID=4ub1np3ef9h7rtt1t56vs9ei43");

      const formdata = new FormData();
      formdata.append("ClientName", name);
      formdata.append("ClientMobile", mobile);
      formdata.append("ClientMessage", message);
      formdata.append("LeadSource", "36");
      formdata.append("LeadHost", "localhost");
      formdata.append("LeadService", props?.service?.data?.service_id);
      formdata.append("ClientEmail", email);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      fetch("https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/order/create-lead-w/", requestOptions)
        .then(response => response.json())
        .then(result => {
          setButtonLoading(false)
          if(result){
            setText({
              name: "",
              email: "",
              message:"",
              mobile: ''
            })
            return router.push('/thank-you')
          }
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (props?.service !== {}) {
      setLoading(false)
    }
  }, [])



  if (loading) {
    return (
      <section style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Loader />
      </section>
    )
  }

  return (
    <>
      <style jsx>{`
   ${props.service.data.style}
   `
      }
      </style>
      <div className="banner">
        <div className="container">
          <div className="innera" >
            <div className="left" dangerouslySetInnerHTML={{ __html: props.service.data.heading_title.replaceAll("&amp;quot;", '"').replaceAll("&amp;#39;", "'").replaceAll("amp;", "").replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll("&quot;", '"').replaceAll('className', 'class').replaceAll('classname', 'class').replaceAll('&amp;nbsp;', '') }}>
            </div>
            <img alt="" className="one" src="http://e-startup.co/image/1.webp" />
            <div className="spin">
              <div className="circle">&nbsp;</div>

              <div className="circle">&nbsp;</div>

              <div className="circle">&nbsp;</div>

              <div className="circle">&nbsp;</div>
            </div>
            <div className="right">
              <form onSubmit={fetchCreateLead}>
                <img alt="" className="two"
                  src="http://e-startup.co/image/1.webp" />
                <h2>Contact Support</h2>
                <div className="in_put"><label htmlFor="name">Name:</label><br />
                  <input required type="text" name='name' id='name' value={name} onChange={handleText} />
                </div>
                <div className="in_put"><label htmlFor="mobile">Mobile No.</label><br />
                  <input pattern="\d{10}" required type="number" id='mobile' name='mobile' value={mobile.substring(0, 10)} onChange={handleText} />
                </div>
                <div className="in_put"><label htmlFor="email">Email Id</label><br />
                  <input required type="text" name='email' id='email' value={email} onChange={handleText} />
                </div>
                <div className="in_put">
                  <p className="what_in"><input style={{ cursor: 'pointer' }} checked={check} type="checkbox" value={check} onChange={() => setCheck(!check)} /> Send updates on Whatsapp</p>
                  <span className="what_noti">I agree to <a href="/terms-and-conditions"
                    target="_blank">terms</a> and <a href="/privacy-policy" target="_blank">privacy
                      policy</a></span>
                </div>

                <div className="in_put">

                  <button type="submit" id="loadMore" className="contact-us-btn" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {!buttonLoading ?
                      <h4>Submit</h4> :
                      <div className='spinner' id="loader1"><span className='bounce1' style={{ background: '#fff' }}></span><span
                        className='bounce2' style={{ background: '#fff' }}></span><span className='bounce3' style={{ background: '#fff' }}></span></div>
                    }
                  </button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner