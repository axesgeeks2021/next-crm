"use client"
import React, { useEffect, useState } from 'react'

// import { useSelector, useDispatch } from 'react-redux'
// import { fetchHeaderList } from "../features/HeaderSlice"


import Loader from './Loader'
import Link from 'next/link'

function Header() {

    const [user, setUser] = useState(null)
    const [isHover, setIsHover] = useState(null)
    const [isTrue, setIsTrue] = useState(false)

    const [scroll, setScroll] = useState(0)

    const [loading, setLoading] = useState(false)
    const [headerList, setHeaderList] = useState({})

    // const dispatch = useDispatch()

    // const { isSuccess, loading, data, error } = useSelector(state => state.header)

    const handleHover = idx => {
        setIsHover(idx)
    }

    const handleScroll = () => {
        const scroll = window.pageYOffset;
        setScroll(scroll)
    }

    const handleLink = (id, url) => {
        setIsHover({ idx: id, status: false })
        setIsTrue(false)
        localStorage.setItem('slug', url)

        return window.scrollTo(0, 0)
    }

    const fetchHeader = () => {
        try {
            setLoading(true)
            const requestOptions = {
                method: 'POST',
                redirect: 'follow'
            };

            fetch("https://sankalpitsolutions.com/ecms/api/service_list.php", requestOptions)
                .then(response => response.json())
                .then(result =>{
                    setLoading(false)
                    setHeaderList(result)
                } )
                .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // const subscribe = dispatch(fetchHeaderList()) 

        const subscribe = fetchHeader()
        
        window.addEventListener('scroll', handleScroll)
        
        return () => [subscribe, window.removeEventListener('scroll', handleScroll)]
    }, [])
    
    useEffect(() => {
        const auth = localStorage.getItem('auth')
        setUser(auth)

    }, [user])

    if (loading) {
        return (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15px 0' }}>
                <Loader />
            </div>
        )
    }

    // if (error) {
    //     return <h1>Error....</h1>
    // }

    return (
        <>
            <div className="top">
                <ul>
                    <li className="inmob"><a href="https://play.google.com/store/apps/details?id=app.instabillpro" target="_blank"> <img src="http://e-startup.co/img/instabill_1.webp" alt="" style={{ width: "17px" }} /> Instabill - GST Invoice, Payment & Inventory Software Download for FREE</a></li>
                    <li><Link href="/offers" ><img src="http://e-startup.co/image/giphy.gif" alt="" style={{ width: "12px" }} /> Offers</Link></li>
                    <li><Link href="https://www.e-startupindia.com/learn/" target='_blank'>Learning Resources</Link></li>
                    {
                        !user ? 
                        <li><Link href="/login" >Login</Link></li> : null
                    }
                    {
                        !user ? 
                        <li><Link href="/register" >SignUp</Link></li> : null
                    }
                    <li><a href="tel:+918881069069" target="_blank"><i className="fa fa-phone" aria-hidden="true"></i> 8881069069</a></li>
                    <li className="last"><a target='_blank' href="https://wa.me/+917065004032"><svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="17px" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg></a></li>
                    <div className="clear"></div>
                </ul>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ zIndex: 999, width: '100%', top: '0', marginBottom: '5px', position: scroll > 200 ? 'fixed' : 'relative', background: "#fff", }}>
                <div className="container-fluid" >
                    <Link href="/" className="navbar-brand fw-bold"><img src="https://www.e-startupindia.com/theme/template/images/e-startup_logo.webp" alt="E-startupindia.com" data-lazyload-replaced="true" /></Link>
                    <button className={`navbar-toggler ${!isTrue ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setIsTrue(!isTrue)}>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${!isTrue ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item" href="/" >
                                <Link className="nav-link active" aria-current="page" href='/'>HOME</Link>
                            </li> */}
                            {
                                headerList?.data?.map((ele, idx) => {
                                    return (
                                        <li className="nav-item" style={{ position: 'relative',cursor: 'pointer'  }} key={idx} onMouseEnter={() => handleHover(idx)} onMouseLeave={() => setIsHover({ idx: null, status: false })}>
                                            <li style={{ color: '#9d9d9d'}} className="nav-link active" aria-current="page" >{ele.name.replaceAll('amp;', '')}</li>
                                            <div className={`dropdown-menu ${isHover === idx ? 'show' : ''}`} >
                                                <ul style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', width: 'auto', background: '#fff' }}>
                                                    {
                                                        ele?.data?.map((ele, idx) => {
                                                            return (
                                                                <ul style={{ display: 'flex', flexDirection: 'column' }} key={idx}>
                                                                    <li key={idx} className="dropdown-item" style={{ color: '#fcc813', fontWeight: '600' }}>{ele.name}</li>
                                                                    {
                                                                        ele?.data?.map((ele, idx) => {
                                                                            return (
                                                                                <li key={idx} onClick={() => handleLink(idx, ele?.slug)}>
                                                                                    <Link className="dropdown-item" href={{ pathname: `${ele?.slug}.html` }} >{ele.name}</Link>
                                                                                </li> //state={{ slug: ele?.slug }}
                                                                                // href={ele?.page_url ? ele?.page_url : ele?.slug}
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" >Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Company Registration
                                </a>
                                <div className="dropdown-menu">
                                    <ul>
                                        <li><a className="dropdown-item" >India</a></li>
                                        <li><a className="dropdown-item" >Private Limited Company</a></li>
                                        <li><a className="dropdown-item" >Public Limited Company</a></li>
                                        <li><a className="dropdown-item" >OPC</a></li>
                                        <li><a className="dropdown-item" >LLP</a></li>
                                        <li><a className="dropdown-item" >Partneship Firm</a></li>
                                        <li><a className="dropdown-item" >Sole Proprietorship Firm</a></li>
                                    </ul>
                                    <ul>
                                        <li><a className="dropdown-item" >International</a></li>
                                        <li><a className="dropdown-item" >USA</a></li>
                                        <li><a className="dropdown-item" >UK</a></li>
                                        <li><a className="dropdown-item" >UAE</a></li>
                                        <li><a className="dropdown-item" >Singapore</a></li>
                                        <li><a className="dropdown-item" >Hong Kong</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >GST</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Import Export  Code</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >FSSAI Registration</a>
                            </li> */}
                            <li ><a href="https://play.google.com/store/apps/details?id=com.e_startupindia.e_startup"><img src="https://www.e-startupindia.com/theme/template/images/google-play.webp" style={{ width: "100px" }} /></a></li>
                            <li className="inmob instabill__mob"><a href="https://play.google.com/store/apps/details?id=app.instabillpro" target="_blank"> <img src="http://e-startup.co/img/instabill_1.webp" alt="" style={{ width: "17px" }} /> Instabill - GST Invoice, Payment & Inventory Software Download for FREE</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header