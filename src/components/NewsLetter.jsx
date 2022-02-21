import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className="newsLetter " style={{marginTop:"150px"}}>
        <div className="heading">
        <h1 style={{fontSize:"32px"}}>Join Our Email NewsLetter</h1>
        <p>The aim is <span style={{fontStyle: 'italic'}}>to help people understand Human Psychology & <br/>their Mental Health in a relatable way  through it</span> </p>

        </div>
       
        <div className="sub">
            
            <p>*Enter your Email</p>
            <form action="#">
            <input type="email" className="input" placeholder="your@email.com"/>
            
           
            <button>Subscribe <i class="bi bi-arrow-right" style={{fontSize:"16px"}}/></button>

            </form>
            

        </div>
    

    </div>
  )
}

export default NewsLetter