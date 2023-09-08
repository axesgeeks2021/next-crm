"use client"

import React, { useEffect, useState } from 'react'

import gIcon from "../../assets/images/g_icon.webp"
import boy from "../../assets/images/boy.jpg"

import Loader from "../components/Loader"
import Paginate from '../components/Paginate'

import profile from "../../assets/images/profile.png"

import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function CustomerReview() {

    const [reviews, setReviews] = useState([])

    const [loading, setLoading] = useState(false)
    const [buttonLoading, setButtonLoading] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)

    // const [postPerPage, setPostPerPage] = useState(15)

    // const indexOfLastPost = currentPage * postPerPage
    // const indexOfFirstPost = indexOfLastPost - postPerPage
    // const currentPost = reviews?.detais?.customer_reviews.slice(indexOfFirstPost, indexOfLastPost)

    const fetchReviews = () => {
        try {
            setLoading(true)
            const myHeaders = new Headers();
            myHeaders.append("Cookie", "PHPSESSID=ro7vl86vq4rsfpp9pt0erpisp2");

            const requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(`https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/data/customer-reviews/${currentPage}/`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    setLoading(false)
                    setReviews(result)
                    console.log(result)
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error)
        }
    }

    const nextReviews = () => {
        setButtonLoading(true)
        setCurrentPage(prev => prev += 1)
        setButtonLoading(false)
        return fetchReviews()
    }


    useEffect(() => {
        const subscribe = fetchReviews()

        return () => subscribe
    }, [])

    // if (loading) {
    //     return (
    //         <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    //             <Loader />
    //         </div>
    //     )
    // }

    return (
        <>
            <div className="customer_r">
                <div className="container">
                    <div className="re">
                        <div className="review_l">
                            <h1>E-Startup<br /> India<br /> reviews:<br />
                                Stories from our customers</h1>
                            <div className="review-rate">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            </div>
                            <br />
                            <span>Our customers rate our services 4.9 on an average</span>
                        </div>
                        <div className="review_r">
                            <iframe width="100%" height="312"
                                src="https://www.youtube.com/embed/caYeIPII4rQ?rel=0&amp;controls=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen=""></iframe>
                        </div>
                        <div className="clear"></div>
                        <p>Over 50,000+ businesses have reached us for company incorporation, GST registration, logos designing,
                            trademark, copyright, patent, import export code and all other types of legal & financial services
                            which are essential for any business in India.</p>
                        <p>Read their reviews about E-Startup India to learn how our online solution serve them as their
                            personal legal consultant and ease their business registrations requirement.</p>
                    </div>
                </div>
            </div>
            <h4 style={{ clear: "both", textAlign: "center", background: "#191d2a", color: "#fff", margin: "0", padding: "25px 10px", borderTop: "1px dashed #fcc813", }}>Our customers give us <a style={{ textDecoration: "underline", color: "#fcc813" }} href="https://www.google.co.in/search?q=e-startup&amp;rlz=1C1NHXL_enIN776IN776&amp;oq=e-startup&amp;aqs=chrome..69i57j69i60l4j0.9247j0j7&amp;sourceid=chrome&amp;ie=UTF-8#lrd=0x390ce4896505d355:0xd54ba5b43e058d55,1,,,"
                target="_blank">average 4.7 rating on <img src={gIcon} className="img-responsive"
                    style={{ display: "inline-block", marginLeft: "1%" }} data-lazyload-replaced="true" /></a></h4>
            <div id="reviewid">
                {
                    reviews?.detais?.customer_reviews?.map((ele, idx) => {
                        return (
                            <div className="rev_l" key={idx}>
                                <div className="in_rl">
                                    <img src={ele?.picture !== "" ? ele?.picture : profile} alt="" />
                                </div>
                                <div className="in_rr">
                                    <b>{ele?.name}</b><br />
                                </div>
                                <div className="in_rR">
                                    <div className="review-rate">
                                        {
                                            Array.from({ length: ele?.rating }).map((_, idx) => {
                                                return (
                                                    <i className="fa fa-star" aria-hidden="true" key={idx}></i>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="date_print"><span>{ele.date}</span></p>
                                    <p>{ele?.message}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <center>
                <div className="" style={{ margin: "30px 0" }}>
                    <button type="button" id="loadMore" className=" contact-us-btn" onClick={nextReviews}>
                        {!buttonLoading ?
                            <h4>View More<i className="fa fa-angle-double-right" aria-hidden="true"></i></h4> :
                            <div class='spinner' id="loader1"><span class='bounce1' style={{ background: 'white' }}></span><span
                                class='bounce2' style={{ background: 'white' }}></span><span class='bounce3' style={{ background: 'white' }}></span></div>
                        }
                    </button>
                </div>
            </center>
            {/* <Paginate postsPerPage={postPerPage} totalPosts={reviews?.detais?.num_of_records} paginate={paginate} nextReviews={nextReviews}/> */}
        </>
    )
}

export default CustomerReview