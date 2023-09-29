"use client"
import React, { useState, useEffect } from 'react'

function FaqDetails(props) {

    const [faqDetails, setFaqDetails] = useState([])
    const [selectIndex, setSelectIndex] = useState(-1)

    const fetchFAQDetails = async () => {
        try {
            const myHeaders = new Headers();
            myHeaders.append("Cookie", "PHPSESSID=bmgfbspjccp452g2nshfq4bt34");

            const requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            const url = `https://www.e-startupindia.com/lib/app/AHFI678SHJF23309FS/faq/faq-list-w/${props.service.data.page_id}/`

            const res = await fetch(url, requestOptions)
            const data = await res.json()
            return setFaqDetails(data?.detais)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const subscribe = fetchFAQDetails()


        // let navigation = document.querySelector('.navigation_list')
        // window.addEventListener('scroll', () => {
        //     const scroll = window.pageYOffset;
        //     if(scroll > 400){
        //         navigation.style.background = 'lime';
        //     }
        //     console.log(scroll)

        //  })

        return () => subscribe
    }, [])

    return (
        <>
            {
                faqDetails?.length > 1 ? <div className="faq" style={{ margin: '60px 0' }}>
                    <section className="faq-section">
                        <div className="container">
                            <h2>FREQUENTLY ASKED QUESTIONS</h2>
                            <div className="row">
                                <div className="">
                                    <div className="faq" id="accordion">
                                        {
                                            faqDetails?.map((ele, idx) => {
                                                return (
                                                    <div className="card" key={idx}>
                                                        <div className="card-header" id="faqHeading-1" onClick={() => setSelectIndex(idx)}>
                                                            <div className="mb-0">
                                                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-1" data-aria-expanded="true" data-aria-controls="faqCollapse-1">
                                                                    <span className="badge">Q</span>{ele?.question}
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div id="faqCollapse-1" className={`${selectIndex !== idx ? 'collapse' : ''}`} aria-labelledby="faqHeading-1" data-parent="#accordion">
                                                            <div className="card-body" dangerouslySetInnerHTML={{ __html: ele?.answer }}>
                                                                {/* <p>{ele.answer}</p> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div> : null
            }
        </>
    )
}

export default FaqDetails