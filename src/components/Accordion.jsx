import React from 'react'
import './Accordion.css'

const Accordion = () => {
  return (
    <div className="accordion">
        <div className="c">
  <input type="checkbox" id="faq-1"/>
  <h1><label htmlFor="faq-1">TelEmpathy's Vision</label></h1>
  <div className="p">
    <p>This a very very simple accordion.</p>
  </div>
</div>
<div className="c">
  <input type="checkbox" id="faq-2"/>
  <h1><label htmlFor="faq-2">What is Talk Therapy?</label></h1>
  <div className="p">
    <p>Yes with pure CSS and HTML.</p>
  </div>
</div>
<div className="c">
  <input type="checkbox" id="faq-3"/>
  <h1><label htmlFor="faq-3">When to seek Talk Therapy?</label></h1>
  <div className="p">
    <p>I was inpired by  
    </p>
  </div>
</div>
<div className="c">
  <input type="checkbox" id="faq-3"/>
  <h1><label htmlFor="faq-3">When to seek Talk Therapy?</label></h1>
  <div className="p">
    <p>I was inpired by  
    </p>
  </div>
</div>

    </div>
  )
}

export default Accordion