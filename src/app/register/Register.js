"use client"
import React, { useState, useEffect } from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import Loader from '../components/Loader'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

function page() {

  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const [value, setValue] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    password: '',
    username: '',
  })

  const { name, email, mobileNumber, password, username } = value

  const handleValue = e => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const registerUser = (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const myHeaders = new Headers();
      myHeaders.append("Cookie", "PHPSESSID=362v4rclvkabndlavc8aq5ggs3");

      const formdata = new FormData();
      formdata.append("email_address", email);
      formdata.append("password", password);
      formdata.append("user_name", username);
      formdata.append("mobile_number", mobileNumber);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      fetch("https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/profile/signup/", requestOptions)
        .then(response => response.json())
        .then(result => {
          setLoading(false)
          if (result.status === true) {
            toast.success('Registration Successful. Please Login')
            return router.push('/login')
          }
          return toast.warning(result.error)
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error)
    }
  }

  if (loading) {
    return (
      <div style={{ width: "100%", height: '100vh', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <Loader />
      </div>
    )
  }

  return (
    <>
      <div className="container">
        <div className="login_d">
          <h1><div className="LogoWrapper--1u21rrr hLAjUe" style={{ float: "left", marginRight: "1%" }}>
            <svg width="54" height="54" data-testid="logo" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" rx="30" fill="#edb905"></rect><path d="M8.786 29.9959C8.6505 29.9959 8.49906 29.9806 8.37154 29.95C7.90802 29.8326 7.51047 29.5464 7.26339 29.1521C7.01632 28.7579 6.93921 28.2867 7.04845 27.8387C7.50384 25.9077 8.6269 24.1815 10.2348 22.9411C11.8427 21.7007 13.8407 21.0193 15.9036 21.0076C20.1279 21.0076 23.7863 23.815 24.7666 27.8387C24.878 28.2868 24.8018 28.7589 24.5544 29.1537C24.307 29.5484 23.9082 29.8343 23.4436 29.95C22.4871 30.1794 21.5307 29.5981 21.2916 28.6495C21.0121 27.4738 20.3256 26.4236 19.3441 25.6706C18.3627 24.9176 17.1442 24.5062 15.8876 24.5035C13.3212 24.5035 11.1054 26.2093 10.4917 28.6572C10.4097 29.0338 10.1956 29.3722 9.88527 29.6157C9.5749 29.8593 9.18692 29.9935 8.786 29.9959ZM51.2363 29.9959C50.4393 29.9959 49.706 29.4604 49.4988 28.6572C49.2212 27.4813 48.5366 26.4304 47.5566 25.676C46.5766 24.9216 45.3591 24.5083 44.1028 24.5035C41.5284 24.5035 39.3206 26.2093 38.7069 28.6572C38.6004 29.1031 38.3142 29.4904 37.9108 29.7341C37.5074 29.9779 37.0199 30.0582 36.5549 29.9576C36.0879 29.8403 35.6876 29.5518 35.4401 29.154C35.1927 28.7563 35.1179 28.2812 35.2318 27.831C35.6872 25.9 36.8102 24.1738 38.4181 22.9335C40.026 21.6931 42.024 21.0116 44.0869 21C48.3112 21 51.9696 23.8074 52.95 27.831C53.0613 28.2791 52.9851 28.7513 52.7378 29.146C52.4904 29.5408 52.0915 29.8267 51.6269 29.9423C51.5233 29.9729 51.3878 29.9882 51.2363 29.9882V29.9959Z" fill="white"></path></svg></div> Hey <span role="img" aria-label="Hello">👋</span> Let's start <br />Signup your Account</h1>

          <form onSubmit={registerUser}>
            <div className="field_lo">
              <label>Name</label><br />
              <input type="text" value={name} onChange={handleValue} name='name' required />
            </div>
            <div className="field_lo half_f">
              <label>Email Address</label><br />
              <input type="email" value={email} onChange={handleValue} name='email' required />
            </div>
            <div className="field_lo half_f">
              <label>UserName</label><br />
              <input type="text" value={username} onChange={handleValue} name='username' required />
            </div>
            <div className="field_lo half_f">
              <label>Mobile Number</label><br />
              <input type="text" value={mobileNumber} onChange={handleValue} name='mobileNumber' required />
            </div>
            <div className="field_lo half_f">
              <label>Password</label><br />
              <input type="password" value={password} onChange={handleValue} name='password' required />
            </div>

            <a href="" className="forget_pass">Forget Password</a>
            <div className="ii">
              <button type='submit'>Continue</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default page
