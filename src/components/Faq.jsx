import React from 'react'
import Acc from './Acc'
import ReactPlayer from 'react-player'
import './Faq.css'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

const Faq = () => {
  return (
    <div className="faq container mt-5 mb-3" style={{paddingBottom:"70px"}}>
      <hr />
        <h1 className="text-center faqh1 pt-3" style={{fontSize: '32px',fontWeight: 'bold'}}>Some FAQs</h1>
        <p className="text-center pb-3"style={{fontSize: '16px'}}>Get to Know more About us</p>
        <div className="row">
            <div className="col-md-6 col-12 left text-center">
            <Acc/>
            <div>
              <Link to="/contact" style={{textDecoration:"none"}}> <span className="p-2" style={{backgroundColor:"#DFEAFE",borderRadius:"20px",color:"#4D61FC",cursor:"pointer"}}> <span className="p-1 mx-2" style={{backgroundColor:"#6D61FC",borderRadius:"20px",color:"#fff",fontSize:"16px"}}> NEED HELP? </span > <span style={{fontSize:"20px"}}>Contact us</span> <i class="bi bi-arrow-right p-2" style={{fontSize:"22px"}}/></span></Link>
               
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