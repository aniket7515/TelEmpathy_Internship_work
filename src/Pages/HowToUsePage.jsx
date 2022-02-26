import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './style.css'
import howto from '../components/Images/howtouse.png';

const HowToUsePage = () => {
  return (
    <div>
        <Navbar/>

        <div className="heading">
            <h2 style={{color:"black",fontWeight:"bold"}}>Using TelEmpathy is very easy</h2>
        </div>
        <div className="img-container">
            <img src={howto} alt="" />
            
        </div>

        <Footer/>
    </div>
  )
}

export default HowToUsePage