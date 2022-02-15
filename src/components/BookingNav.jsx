import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
const BookingNav = () => {
  return (
    <div className="booknav mt-3 pt-3">
      
        <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link to="/"className="nav-link active" style={{color: 'black'}} aria-current="page" href="#">HOME</Link>
  </li>
  <li className="nav-item">
    <Link to="/contact"className="nav-link active" style={{color: 'black'}} href="#">CONTACT US</Link>
  </li>
  
  
</ul>

    </div>
  )
}

export default BookingNav