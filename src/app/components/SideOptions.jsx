import React, { useState } from 'react'

const list = [
    {
        id: 1,
        item: 'Get Started',
        href: 'start',
    },
    {
        id: 2,
        item: 'How it works',
        href: 'second',
    },
    {
        id: 3,
        item: 'Why choose pvt ltd',
        href: 'third',
    },
    {
        id: 4,
        item: 'Benefits',
        href: 'forth',
    },
    {
        id: 5,
        item: 'Documents Requirements',
        href: 'fifth',
    },
]

function SideOptions() {

    const [selectIndex, setSelectIndex] = useState(0)

    const handleIndex = idx => {
        setSelectIndex(idx)
    }

    return (
        <div style={{ width: "25%", padding: '0px 5px', background: 'lightgray', height: '100vh', overflow: 'scroll' }}>
            <div style={{ width: "100%",height: "100%", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column',  background: 'white' }}>
            {
                list.map((ele, idx) => {
                    return (
                        <a key={idx} className='sidemenu__list' onClick={() => handleIndex(idx)} href={`#${ele.href}`}>
                            <div className='sideline' style={{ transform: selectIndex === idx ? 'translateX(0px)' : 'translateX(-20px)', color: selectIndex === idx ? 'white' : '#fcc813' }}></div>
                            <div style={{padding: '10px 10px', color: selectIndex === idx ? '#fcc813' : 'white' }}>
                                {ele.item}
                            </div>
                        </a>
                    )
                })
            }
            </div>
        </div>
    )
}

export default SideOptions