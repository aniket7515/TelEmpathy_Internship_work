import React from 'react'
import Accordion from './Accordion'
import ReactPlayer from 'react-player'



const Faq = () => {
  return (
    <div className="faq mt-3 mb-3" style={{paddingBottom:"70px"}}>
        <h1 className="text-center pt-3" style={{fontSize: '32px',fontWeight: 'bold'}}>Some FAQs</h1>
        <p className="text-center pb-3"style={{fontSize: '16px'}}>Get to Know more About us</p>
        <div className="row">
            <div className="col-md-6 col-12 left text-center">
            <Accordion/>
            <div>
                <span className="p-2" style={{backgroundColor:"#DFEAFE",borderRadius:"20px",color:"#4D61FC"}}> <span className="p-1 mx-2" style={{backgroundColor:"#6D61FC",borderRadius:"20px",color:"#fff",fontSize:"12px"}}> NEED HELP? </span>Contact us<i class="bi bi-arrow-right p-2" style={{fontSize:"22px"}}/></span>
            </div>

            </div>
            
            <div className="col-md-6 col-12 right">
            
            <ReactPlayer width="98%" height="360px" controls url="https://www.youtube.com/watch?v=dAWL3zHTsM0&t=1s"/>

            </div>
            

        </div>

        
    </div>
  
  )
}

export default Faq