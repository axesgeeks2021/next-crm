import React, {useState, useEffect} from 'react'

import logo from "../assets/images/e-startup_logo.webp";

import {BiDownArrow} from "react-icons/bi"

const lists = [
    {
        id: 1,
        list: "Company Registration",
        children: true,
        icon: <BiDownArrow size={10}/>,
        childItem: [
            {
                id: "01",
                item: "Private Company",
            },
            {
                id: "02",
                item: "Public Company",
            },
            {
                id: "03",
                item: "Partnership Company",
            },
            {
                id: "04",
                item: "LLP Firm",
            },
        ]
    },
    {
        id: 2,
        list: "Business License",
        children: false,
        icon: <BiDownArrow size={10}/>,
        childItem: [],
    },
    {
        id: 3,
        list: "IPR / Trademark",
        children: false,
        icon: <BiDownArrow size={10}/>,
        childItem: [],
    },
    {
        id: 4,
        list: "GST",
        children: false,
        icon: <BiDownArrow size={10}/>,
        childItem: [],
    },
    {
        id: 5,
        list: "Income Tax",
        children: false,
        icon: <BiDownArrow size={10}/>,
        childItem: [],
    },
    {
        id: 6,
        list: "Funding",
        children: false,
        icon: <BiDownArrow size={10}/>,
        childItem: [],
    },
    {
        id: 7,
        list: "Accounting & Compliances",
        children: false,
        icon: <BiDownArrow size={10}/>,
        childItem: [],
    },
]

function NewHeader() {

    const [scrollPosition, setScrollPosition] = useState(0)

    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true})

        return () => window.removeEventListener('scroll', handleScroll)
        
    }, [])
    
  return (
    <>
        <div className='header' style={{position: scrollPosition > 50 ? 'fixed' : 'relative', top: '0', background: scrollPosition > 20 ? 'rgb(0 0 0 / 100%)' : '', color: scrollPosition > 20 ? '#fff' : '', zIndex: 1}}>
            <nav>
                <div className='company__logo' style={{background: 'white'}}>
                    <img src={logo} alt='' className=''/>
                </div>
                <div className='header__list'>
                    {/* <ul>
                        <li>Company Registration</li>
                        <li>Business License</li>
                        <li>IPR / Trademark</li>
                        <li>GST</li>
                        <li>Income Tax</li>
                        <li>Funding</li>
                        <li>Accounting & Compliances</li>
                    </ul> */}
                    <ul>
                        {
                            lists.map((ele, idx) => {
                                return(
                                    <li key={idx}>{ele.list} {ele.icon}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        </div>
    </>
  )
}

export default NewHeader