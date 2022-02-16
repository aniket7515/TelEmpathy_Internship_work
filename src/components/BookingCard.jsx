import React from 'react'
import './BookingCard.css'

const BookingCard = ({image,name,price,Designation,Qualification,Age,Gender,Experience,KnownLanguage,SessionDuration,MediumOfTherapy}) => {
  return (
    <div>
        <div className="card1">
            <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="name mb-4">
                <h4>{name}</h4>
                <p style={{width:"160px"}}>{price}</p>
            </div>
            <div className="info">
                <p> <strong>Designation:</strong>  {Designation}</p>
                <p> <strong>Qualification:</strong>  {Qualification}</p>
                <p> <strong>Age:</strong>  {Age}</p>
                <p> <strong>Gender:</strong>  {Gender}</p>
                <p> <strong>Experience:</strong>  {Experience}</p>
                <p> <strong>Known Language:</strong>  {KnownLanguage}</p>
                <p> <strong>Session Duration:</strong>  {SessionDuration}</p>
                <p> <strong>Medium Of Therapy:</strong>  {MediumOfTherapy}</p>

                
            </div>
            <a href="#" className="mt-4" style={{color: "#8f731e"}}>Send Your Message</a>
        </div>
    </div>
  )
}

export default BookingCard