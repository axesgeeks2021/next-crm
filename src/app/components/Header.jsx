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
                    <li className="last"><a href="https://wa.me/+917065004032" target="_blank"><i className="fa fa-whatsapp" aria-hidden="true" style={{ color: "#fff", fontSize: "17px" }}></i> </a></li>
                    <div className="clear"></div>
                </ul>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ zIndex: 999, width: '100%', top: '0', marginBottom: '5px', position: scroll > 200 ? 'fixed' : 'relative', background: "#fff", }}>
                <div className="container-fluid" >
                    <Link href="/" className="navbar-brand fw-bold"><img src="https://www.e-startupindia.com/theme/template/images/e-startup_logo.webp" alt="E-startupindia.com" data-lazyload-replaced="true" /></Link>
                    <button className={`navbar-toggler ${!isTrue ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setIsTrue(true)}>
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
                                        <li className="nav-item" style={{ position: 'relative',  }} key={idx} onMouseEnter={() => handleHover(idx)} onMouseLeave={() => setIsHover({ idx: null, status: false })}>
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