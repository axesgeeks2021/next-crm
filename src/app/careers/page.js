"use client"
import React, {useState, useEffect} from 'react'

import '../../styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import career from "../../assets/images/career.png"
import Image from 'next/image'

import {  toast } from 'react-toastify'

function page() {

  const [showModal, setShowModal] = useState({
    status: false,
    id: null
  })

  const [loading, setLoading] = useState(false)
  const [careerList, setCareerList] = useState([])
  const [buttonLoading, setButtonLoading] = useState(false)

  const [file, setFile] = useState(null)

  const [text, setText] = useState({
    firstName: '',
    lastName: "",
    email: "",
    mobile: "",
    gender: "",
    location: '',
    reference: "",
    webLink: '',
    message: "",
  })

  const { email, firstName, gender, lastName, location, message, mobile, reference, webLink } = text

  const handleText = e => {
    setText({ ...text, [e.target.name]: e.target.value })
  }

  const handleFile = e => {
    setFile(e.target.files[0])
  }

  const fetchCareerList = () => {
    try {
      setLoading(true)
      const myHeaders = new Headers();
      myHeaders.append("Cookie", "PHPSESSID=8urc4v7ba44in6i53bl4mrqnt6");

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/career/career-list/", requestOptions)
        .then(response => response.json())
        .then(result => {
          setLoading(false)
          console.log(result)
          setCareerList(result)
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error)
    }
  }

  const fetchCareerApply = (e) => {
    e.preventDefault()
    try {
      setButtonLoading(true)
      const myHeaders = new Headers();
      myHeaders.append("Cookie", "PHPSESSID=8urc4v7ba44in6i53bl4mrqnt6");

      const formdata = new FormData();
      formdata.append("first_name", firstName);
      formdata.append("last_name", lastName);
      formdata.append("email", email);
      formdata.append("mobile", mobile);
      formdata.append("gender", gender);
      formdata.append("closest_location", location);
      formdata.append("reference", reference);
      formdata.append("web_link", webLink);
      formdata.append("message", message);
      formdata.append("resume", file);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      fetch(`https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/career/job-apply/${showModal.id}/`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result.status){
            console.log(result)
            setShowModal({
              status: false,
              id: null
            })
            setText({
              email: "",
              firstName: "",
              gender: "",
              lastName: "",
              location: "",
              message: '',
              mobile: "",
              reference: "",
              webLink: ""
            })
            setButtonLoading(false)
            return toast.success(`Thank you for applying...`)
          }

          if(!result.status){
            return toast.warning(result.error)
          }
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const subscribe = fetchCareerList()

    return () => subscribe
  }, [])

  return (
    <>
      <div className="top_ban">
        <div className="container">
          <div className="C_2">
            <h1>Start a <span>Career</span>,<br />Hire a <span>Star</span> </h1>
            <p>We are in hunt for talented people,<br /> are you the one?</p>
          </div>
          <div className="vacancy">
            <Image src={career} alt="group of people" />
          </div>
        </div>
      </div>
      <div className="v_info">
        <div className="container">
          <p>E-startupindia was founded with a belief that work is like a festival which worth celebrating every day. We take a great pride in creating a platform that empowers employees and is totally bias free, a platform different from command and control to power to the people. We have a mindset and passion to make our employee’s experience as dynamic, focused and information rich as possible.</p>
          <div className="vacancy1">
            <div className="v_box">
              <h1>Open Vacancy</h1>
              {
                careerList?.detais?.map((ele, idx) => {
                  return (
                    <div className="job">
                      <div className="post_a">
                        <h5>{ele?.alias.toUpperCase()}</h5>
                        <h6>{ele?.designation}</h6>
                        <h6>Salary <span>{ele?.salary}</span></h6>
                        <h6>Minimum Experience <span>{ele?.experience}</span></h6>
                        <h6>Location <span>{ele?.location}</span></h6>

                      </div>
                      <div className="post_b">
                        <p>Key Skills : <span>{ele?.Skils}</span></p>
                        <p>Qualification: <span>{ele?.qualification}</span></p>
                        <p>Job Description: <span>{ele?.description || "Web designers plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips. A web designer is responsible for creating the design and layout of a website or web pages. It and can mean working"} </span></p>
                        <button className="apply_j" onClick={() => setShowModal({
                          status: true,
                          id: ele?.job_id
                        })}>Apply Now</button>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
      </div>
      <div className="sideform" style={{ display: showModal.status ? 'block' : 'none' }}>
        <form onSubmit={fetchCareerApply}>
          <h1>Application Form <span className="close_f" onClick={() => setShowModal({
            status: false,
            id: null
          })}>x</span></h1>
          <div className="in_form">
            <label htmlFor='firstname'>Name</label><span className="red">*</span>
            <input type="text" placeholder="Name" name="firstName" id='firstname' value={firstName} onChange={handleText} required />
          </div>

          <div className="in_form">
            <label htmlFor='email'>Email</label><span className="red">*</span>
            <input type="email" id='email' placeholder="Email" value={email} name='email' onChange={handleText} required />
          </div>

          <div className="in_form">
            <label htmlFor='mobile'>Mobile Number</label><span className="red">*</span>
            <input type="tel" id='mobile' name='mobile' placeholder="Mobile Number" value={mobile} onChange={handleText} required />
          </div>
          <div className="in_form">
            <label htmlFor='message'>Note</label><span className="red">*</span>
            <textarea rows="2" placeholder="Note" value={message} id='message' name='message' onChange={handleText} required></textarea>
          </div>
          <div className="in_form">
            <label htmlFor='file'>Upload CV</label><span className="red">*</span>
            <input type="file" id='file' placeholder="Upload CV" onChange={handleFile} required />
          </div>

          <div className="in_form">
            <button style={{ background: 'black' }}>
              {
                !buttonLoading ?
                  <span id="send_t" style={{ color: "#fcc813" }}>Submit</span> : <div className='spinner' id="loader1"><span className='bounce1'></span><span className='bounce2'></span><span className='bounce3'></span></div>
              }
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default page