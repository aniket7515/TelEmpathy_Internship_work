import React from 'react'
import BookingFoot from '../components/BookingFoot'
import BookingNav from '../components/BookingNav'
import logo from "../components/Images/Logo_TelEmpathy.png";
import InquiryForm from '../components/InquiryForm';


const Inquirypage = () => {
  return (
    <div>
      <BookingNav/>

      <div className="container mt-5 mb-5">
        <div
          className="block1 text-center p-5"
          style={{ backgroundColor: "rgba(246,246,246,1)" }}
        >
          <div className="block-2 text-center p-3">
            <img src={logo} alt="" style={{ width: "40%" }} />
            <h1>Book a Session with an online Psychologist</h1>
          </div>
        </div>
      </div>

      <InquiryForm/>

      <BookingFoot/>
    </div>
  )
}

export default Inquirypage