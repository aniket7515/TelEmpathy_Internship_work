import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer1">
        <div className="footer container">
            <div className="copyright">
                <p>© 2022 TelEmpathy, All rights reserved.</p>

            </div>
            <div className="socials">
                <a href="https://www.facebook.com/telempathy.26"><i style={{color: 'white',fontSize:"22px"}} class="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/telempathyy/"><i style={{color: 'white',fontSize:"22px"}} class="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/company/telemapthy/mycompany/"><i style={{color: 'white',fontSize:"22px"}} class="bi bi-linkedin"></i></a>
            </div>
        </div>
        {/* <div className="unicorn">
            <span>Runs on Unicorn Platform</span>

        </div> */}
    </div>
  )
}

export default Footer