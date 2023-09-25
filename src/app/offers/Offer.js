"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInr } from '@fortawesome/free-solid-svg-icons';
import Loader from '../components/Loader';
import "bootstrap/dist/css/bootstrap.min.css"

function page() {

    const router = useRouter()

    const [showModal, setShowModal] = useState({
        status: false,
        id: null
    })

    const [buttonLoading, setButtonLoading] = useState(false)
    const [check, setCheck] = useState(true)
    const [offerList, setOfferList] = useState({})
    const [loading, setLoading] = useState(false)

    const [text, setText] = useState({
        name: "",
        email: "",
        mobile: ""
    })

    const { email, mobile, name } = text

    const handleText = e => {

        if (mobile.length > 10) {
            alert("number can't be greater than 10 digits")
            return setText({
                mobile: mobile.slice(0, -1)
            })
        }
        setText({ ...text, [e.target.name]: e.target.value })
    }

    const handlePopUpBox = (id) => {
        setShowModal({
            status: true,
            id: id
        })
    }


    const fetchOffers = () => {
        try {
            setLoading(true)
            const myHeaders = new Headers();
            myHeaders.append("Cookie", "PHPSESSID=ugtalajisbcieop32d02mlbn24");

            const requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/offers/offer-list/", requestOptions)
                .then(response => response.json())
                .then(result => {
                    setLoading(false)
                    setOfferList(result)
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error)
        }
    }

    const fetchOfferQuery = (e) => {
        e.preventDefault()
        try {
            setButtonLoading(true)
            const myHeaders = new Headers();
            myHeaders.append("Cookie", "PHPSESSID=ugtalajisbcieop32d02mlbn24");

            const formdata = new FormData();
            formdata.append("name", name);
            formdata.append("email", email);
            formdata.append("mobile", mobile);
            formdata.append("subject", "");
            formdata.append("message", "");

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            fetch(`https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/offers/grab-offer/${showModal.id}/`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    setButtonLoading(false)
                    if (result.status) {
                        setShowModal(false)
                        setText({
                            name: "",
                            email: "",
                            mobile: "",
                        })
                        // return toast.success('Thank you for enquiring us')
                        return router.push('/thank-you')
                    }
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        const subscribe = fetchOffers()

        return () => subscribe
    }, [])

    if (loading) {
        return (
            <div style={{ width: "100%", height: '100vh', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <Loader />
            </div>
        )
    }

    return (
        <>
            <div className="offers">
                <div className="container">
                    <div className="row">
                        {
                            offerList?.detais?.map((ele, idx) => {
                                return (
                                    <div className="col-sm-4" key={idx}>
                                        <div className="offer-box">
                                            <div className="offer-title">
                                                <h5>{ele?.name}</h5>
                                            </div>
                                            <div className="offer-box-header">
                                                <img
                                                    src={ele?.image}
                                                    data-lazyload-replaced="true" />
                                            </div>
                                            <div className="offer-box-content">

                                                {
                                                    ele?.title?.map((ele, idx) => {
                                                        return (
                                                            <h4 key={idx}> {ele}<span>+</span> </h4>
                                                        )
                                                    })
                                                }
                                                <p> <FontAwesomeIcon icon={faInr} /> {ele?.offer_price} all-inclusive<small><FontAwesomeIcon icon={faInr} /> {ele?.price}</small> </p>
                                            </div>
                                            <button className="view_De" onClick={() => handlePopUpBox(ele?.offer_id)}>Enquire Now</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="homepagemodal" style={{ display: showModal.status ? 'block' : 'none', position: 'fixed' }}>
                <h1>ENQUIRE NOW<span id="homepagemodal_Close" onClick={() => setShowModal({
                    status: false,
                    id: null
                })}>x</span></h1>
                <form className="enquiry-form" onSubmit={fetchOfferQuery}>
                    <input type="text" name="name" placeholder="Name" maxlength="100" value={name} onChange={handleText} required />
                    <input type="number" name="mobile" placeholder="Mobile Number" maxlength="10" value={mobile.substring(0, 10)} onChange={handleText} required />
                    <input type="email" name="email" placeholder="Email" maxlength="50" value={email} onChange={handleText} required />
                    <div className="in_put">
                        <p className="what_in"><input style={{ cursor: 'pointer' }} type="checkbox" checked={check} onChange={() => setCheck(!check)} /> Send updates on Whatsapp</p>
                        <span className="what_noti">I agree to <a href="terms-and-conditions.html" target="_blank">terms</a> and <a
                            href="privacy-policy.html" target="_blank">privacy policy</a></span>
                    </div>
                    <button type="submit" name="WantExpertToCallYou" value="WantExpertToCallYou">
                        {
                            !buttonLoading ?
                                <span id="send_t">SUBMIT</span> :
                                <div className='spinner' id="loader1"><span className='bounce1'></span><span className='bounce2'></span><span
                                    className='bounce3'></span></div>
                        }
                    </button>
                </form>
            </div>
        </>
    )
}


export default page
