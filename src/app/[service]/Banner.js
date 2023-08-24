"use client"

import React, {useState} from 'react'

import { useRouter } from 'next/navigation'
import Loader from '../components/Loader'

function Banner(props) {

  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [check, setCheck] = useState(true)
  const [buttonLoading, setButtonLoading] = useState(false)
  const [text, setText] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    username: ""
  })

  const { email, mobile, name, password, username } = text

  const handleText = e => {
    if (mobile.length > 10) {
      alert("number can't be greater than 10 digits")
      return setText({
        mobile: mobile.slice(0, -1)
      })
    }
    setText({ ...text, [e.target.name]: e.target.value })
  }

  const fetchContactUs = (e) => {
    e.preventDefault()
    try {
      setButtonLoading(true)
      const myHeaders = new Headers();
      myHeaders.append("Cookie", "PHPSESSID=bmgfbspjccp452g2nshfq4bt34");

      const formdata = new FormData();
      formdata.append("page_id", props.service.data.page_id);
      formdata.append("name", name);
      formdata.append("email", email);
      formdata.append("mobile", mobile);
      formdata.append("subject", "");
      formdata.append("message", "");
      formdata.append("page_name", props.service.data.slug);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      fetch(`https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/order/contact-message/`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.status) {
            setButtonLoading(false)
            setText({
              name: '',
              email: '',
              mobile: ''
            })
            return router.push('/thank-you')
          }
          // console.log(result)
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error)
    }
  }

  if(loading){
    return <Loader />
  }

  return (
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
          <form onSubmit={fetchContactUs}>
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
                  <div class='spinner' id="loader1"><span class='bounce1'></span><span
                    class='bounce2'></span><span class='bounce3' ></span></div>
                }
              </button></div>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Banner