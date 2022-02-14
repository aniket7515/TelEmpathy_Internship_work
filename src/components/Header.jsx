import React from 'react'
import './Header.css'
import Img from './Images/happy.png'

const Header = () => {
  return (
    <div>
         <header>    
      {/* container main-hero-container */}
        <section className="header my-3">
          <div className="row" >
            <div className="col-12 col-lg-6 header-left-side d-flex  justify-content-center flex-column align-items-center ">
              <div>
                
              </div>
              <h1 className="display-2 my-3 pt-5" style={{fontWeight: 'bold'}}>
               We are here for you ! <br /> 
              </h1>
              <p className="main-hero-para ">
          Start your journey of Mental Health Care.
              </p>
              <h3>Book a Session with an Online Psychologist</h3>
              <div className="input-group mt-3">

              <div className="inputbtn" style={{width: '100%',display: 'flex'}}>
              <button className="input-group-button p-2" style={{backgroundColor:"#5041BB",color:"white"}}>Get Started</button>
             <button className="input-group-button p-2" style={{Color:"#5041BB",FontWeight:"bold"}}>How to Use?</button>
              </div>
           
        
       
              </div>
              {/* <a href="#"> */}
              <span className="mt-5 m-5 p-3 " style={{backgroundColor:"#DFEAFE","borderRadius":"15px"}}>
                <span className="p-2" style={{backgroundColor:"#4d61fc",color:"white","borderRadius":"15px"}}>MESSAGE US</span>
                <span className="p-2" style={{color:"#627efc"}}>for getting started</span>
              </span>

              {/* </a> */}
              
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src={Img}
                alt="heroimg"
                className="img-fluid"

                // style={{height:"550px"}}
                
              />
          
          </div>
          </div>
        </section>
      </header>
    </div>
  )
}

export default Header