import React, { useEffect, useState } from 'react'
import photo1 from "../assets/images/icon_01.webp"
import photo2 from "../assets/images/icon_02.webp"
import photo3 from "../assets/images/icon_03.webp"
import photo4 from "../assets/images/icon_04.webp"

const subHeadings = [
  {
    id: 1,
    text: "Private Limited Company Registration becomes the first choice for any startup since it gives the easiest way to raise funds from investors."
  },
  {
    id: 2,
    text: "You need to arrange at least two or more people who are eligible to act as directors and shareholders in the company."
  },
  {
    id: 3,
    text: "Online company registration allows many benefits. The legitimacy of your business firm is enhanced by having a registered company."
  },
  {
    id: 4,
    text: "A private limited company must have at least two directors, with a maximum of fifteen,  with a maximum of fifteen."
  },
  {
    id: 5,
    text: "Train shape to your business idea. Our professionals can help you in online Private Limited company registration. Just provide the documents."
  },
]

const data = [
  {
    id: 1,
    photo: photo1,
    text: "Providing business banking solutions in association with ICICI Bank"
  },
  {
    id: 2,
    photo: photo2,
    text: "Facilitating Neo Banking Solutions & Corporate Credit Card to Startups"
  },
  {
    id: 3,
    photo: photo3,
    text: "Trusted by Axis bank to cater its clients all licensing & compliance needs"
  },
  {
    id: 4,
    photo: photo4,
    text: "Providing lending solutions for business needs with NeoGrowth"
  },
]

function HeroSection() {

  const [show, setShow] = useState(false)

  const [sliderNumber , setSliderNumber] = useState(0)
  
  let sum = 0
  const nextText = () => {
    const maxLength = subHeadings.length;

    if(sum < maxLength){
        setSliderNumber(prev => {
          sum = prev += 1
          return prev++
        })
    }

    if(sum >= maxLength - 1){
      sum = 0
      return setSliderNumber(0)
    }

  }

  useEffect(() => {

    const interval = setInterval(() => {
      nextText()
    }, 6000);

    return () => clearInterval(interval)
  }, [])

  return (
    <section className='hero__section'>
      <div className='hero__section__content'>
        <h1>Online Private Limited Company Registration in India, No matter where you are located</h1>
        <div className='subheading__container'>
          {/* {
            subHeadings.map((ele, idx) => {
              return <p key={idx}>{ele.text}</p>
            })
          } */}
          <p className='subheading'>{subHeadings[sliderNumber]?.text}</p>
        </div>
        <div className='advertisement'>
          {
            data.map((ele, idx) => {
              return(
                <div key={idx} className='advertisement__box' style={{borderRight: '2px solid black', margin: '5px 10px'}}>
                  <div className='advertisement__photo__box' style={{margin: '10px 0'}}>
                    <img src={ele.photo} alt='photo' />
                  </div>
                    <p>{ele.text}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='hero__section__form'>
        <button type='button' onClick={() => setShow(!show)}>Contact Form</button>
        <div className='form' style={{ transform: !show ? 'scaleY(0)' : 'scaleY(1)' }}>
          <form>
            <div>
              <label htmlFor='name'>Name</label>
              <input type='text' placeholder='Enter your name...' />
            </div>
            <div>
              <label htmlFor='name'>Email</label>
              <input type='text' placeholder='Enter your email...' />
            </div>
            <div>
              <label htmlFor='name'>Phone</label>
              <input type='text' placeholder='Enter your phone...' />
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default HeroSection