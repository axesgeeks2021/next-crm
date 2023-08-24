import React from 'react'

function Banner(props) {
  return (
    <div className="left" dangerouslySetInnerHTML={{__html: props.html}}></div>
  )
}

export default Banner