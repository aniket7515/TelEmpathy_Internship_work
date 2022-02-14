import React from 'react'
import Accordion from './Accordion'




const Faq = () => {
  return (
    <div className="faq">
        <h1>Some FAQs</h1>
        <div className="row">
            <div className="col-md-6 col-12 left">
            <Accordion/>
            <div>
                <span> <span> NEED HELP? </span>Contact us</span>
            </div>

            </div>
            
            <div className="col-md-6 col-12 right">
            Youtube Video

            </div>
            

        </div>

        
    </div>
  
  )
}

export default Faq