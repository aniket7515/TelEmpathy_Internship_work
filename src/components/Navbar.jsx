import React, {useState} from "react";
import Logo from './Images/Logo_TelEmpathy.png'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    // const[show, setShow]=useState(false);
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light pl-3 pr-3">
  <div className="container-fluid justify-space-between navcont">
    <Link to="/" className="navbar-brand mx-3 my-3" href="#"><img src={Logo} alt="" style={{height:"54px"}}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0  mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link active p-3 mx-3 " aria-current="page" href="#">HomePage</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link active p-3 mx-3" href="#">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link active p-3 mx-3 " href="#">Login</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>











          {/* <section classNameNameName="=navbar-bg">
<nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
  <div classNameName="container">
    <a classNameName="navbar-brand" href="#" > <img src={Logo} alt="" style={{width:"200px"}}/>  </a>
    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setShow(!show)}>
      <span classNameName="navbar-toggler-icon"></span>
    </button>
    <div classNameName={'collapse navbar-collapse ${show?"show":""}'} >
      <ul classNameName="navbar-nav ms-auto mb-2 mb-lg-0">
        <li classNameName="nav-item">
          <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link" href="#">Services</a>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link" href="#">About</a>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link" href="#">Contact</a>
        </li>
        </ul>
 
    </div>
  </div>
</nav>
    </section> */}
    </div>
  )
}

export default Navbar