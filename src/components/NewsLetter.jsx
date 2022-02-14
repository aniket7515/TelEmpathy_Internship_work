import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className="newsLetter">
        <div className="heading">
        <h1>Join Our Email NewsLetter</h1>
        <p>The aim is <span style={{fontStyle: 'italic'}}>to help people understand Human Psychology & <br/>their Mental Health in a relatable way  through it</span> </p>

        </div>
       
        <div className="sub">
            
            <p>*Enter your Email</p>
            <input type="email" className="input" placeholder="your@email.com"/>
            
           
            <button>Subscribe</button>

        </div>
    

    </div>
  )
}

export default NewsLetter