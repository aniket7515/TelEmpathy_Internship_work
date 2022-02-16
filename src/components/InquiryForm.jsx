import React from 'react'
import './InquiryForm.css'

const InquiryForm = () => {
  return (
    <div>
        <div className="inquiryform mb-5" style={{backgroundColor: '#FECE3A'}}>
            <div className="inquiry container text-center p-5">
                <h1 style={{fontSize:"28px",fontWeight: 'bold'}}>Want to book a Therapy Session?</h1>
                <hr  style={{width:"100px",margin:"auto", height:"3px"}}/>

                <h5 className="pt-4" style={{fontSize:"24px"}}>Or have any other queries related to Mental Health?</h5>

                <p className="pt-5" style={{fontSize:"18px"}}><strong >Kindly mention what you are looking for & we will respond to you at the earliest</strong></p>

                <h2 className=" mb-4" style={{fontSize:"22px",marginTop:"6rem"}}>Don't Worry! We won't share your data with any third party</h2>

                <form action="#">
                    <div className="input p-2">
                        <input style={{padding:"12px",width:"75%",backgroundColor: '#FECE3A'}} type="text " name="name" placeholder="Name"/>
                    </div>
                    <div className="input p-2">
                        <input  style={{padding:"12px",width:"75%",backgroundColor: '#FECE3A'}} type="tel" name="name" placeholder="Phone"/>
                    </div>
                    <div className="input p-2">
                        <input style={{padding:"12px",width:"75%",backgroundColor: '#FECE3A'}} type="email" name="name" placeholder="Email*"/>
                    </div>

                    <div className="inputbox p-2 pb-3">
                        <textarea style={{width:"75%",padding:"44px",backgroundColor: '#FECE3A'}} type="text" placeholder="Kindly type your message here.." />
                    </div>

                    <p style={{fontSize:"12px"}}>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>

                    <button className="mt-4" style={{padding:"18px 32px",fontSize:"14px",borderRadius:"8px",border:"1px solid black",fontWeight:"bold",letterSpacing:"2px",backgroundColor:"#FECE3A"}}>SUBMIT</button>
                </form>



            </div>
        </div>
    </div>
  )
}

export default InquiryForm