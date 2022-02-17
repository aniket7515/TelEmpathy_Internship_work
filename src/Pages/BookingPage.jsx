import React from "react";
import BookingCard from "../components/BookingCard";
import BookingFoot from "../components/BookingFoot";
import BookingNav from "../components/BookingNav";
import logo from "../components/Images/Logo_TelEmpathy.png";
import urveez from "../components/Images/urveez.webp";
import vimarsha from '../components/Images/vimarsha.webp'
import ebenezar from "../components/Images/ebenezar.jfif"
import shika from "../components/Images/shika.jfif"
import tejeshwar from "../components/Images/tejeshwar.jfif"


const BookingPage = () => {
  return (
    <div>
      <BookingNav />

      <div className="container mt-5">
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

      <div className="psyhead mt-5 text-center">
        <h2 style={{ fontWeight: "bold" }}>List of our Psychologist</h2>
        <hr style={{ width: "10%", margin: "auto", height: "3px" }} />
      </div>

      <div className="cards container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4  col-xs-12 ">
          <BookingCard
            image={urveez}
            name="Urveez Kakalia"
            Qualification="MA Counselling"
            price="INR1000/Session"
            Designation="Counselling Psychologist"
            Age="25"
            Gender="Female"
            Experience="4 years"
            KnownLanguage="English"
            SessionDuration="45 Minutes"
            MediumOfTherapy="Video"
          />
        </div>
        <div className="col-md-4 col-xs-12">
          <BookingCard
            image={vimarsha}
            name="Vimarsha Jain"
            Qualification="M.Sc. Psychology"
            price="INR 750 /Session (Free 15-min session)"
            Designation="Counselling Psychologist"
            Age="35"
            Gender="Female"
            Experience="8 years"
            KnownLanguage="English,Kannada,Tulu and Hindi"
            SessionDuration="60 Minutes"
            MediumOfTherapy="Video,Audio"
          />
        </div>
        <div className="col-md-4  col-xs-12">
          <BookingCard
            image={ebenezar}
            name="Dr. B. EBENEZAR"
            Qualification="M.Sc., M.A., B.Ed., Ph.D., PGDCE"
            price="INR500/Session"
            Designation="Counselling Psychologist"
            Age="42"
            Gender="Male"
            Experience="21 years"
            KnownLanguage="English,Hindi,Telgu"
            SessionDuration="60 Minutes"
            MediumOfTherapy="Video"
          />
         
         
       
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-4  col-xs-12 ">
          <BookingCard
            image={shika}
            name="Shikha Karwa"
            Qualification="MA in Counselling Psychology & PG dip in Learning Disabilities"
            price="INR500/Session"
            Designation="Counselling Psychologist & Remedial Educator"
            Age="26"
            Gender="Female"
            Experience="5 years"
            KnownLanguage="English,Gujrati,Kutchi, Hindi and Marathi"
            SessionDuration="45 Minutes"
            MediumOfTherapy="Video,Audio"
          />
        </div>
        <div className="col-md-4 col-xs-12">
          <BookingCard
            image={tejeshwar}
            name="Tejeshwar B R"
            Qualification="MSc Psychology"
            price="INR 666 /Session"
            Designation="Psychologist"
            Age="25"
            Gender="Male"
            Experience="5 years"
            KnownLanguage="English,Hindi & Kannada"
            SessionDuration="60 Minutes"
            MediumOfTherapy="Video"
          />
        </div>
        <div className="col-md-4  col-xs-12">
          <BookingCard
            image={urveez}
            name="Urveez Kakalia"
            Qualification="MA Counselling"
            price="INR1000/Session"
            Designation="Counselling Psychologist"
            Age="25"
            Gender="Female"
            Experience="Femal4 years"
            KnownLanguage="English"
            SessionDuration="45 Minutes"
            MediumOfTherapy="Video"
          />
         
         
       
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-4  col-xs-12 ">
          <BookingCard
            image={urveez}
            name="Urveez Kakalia"
            Qualification="MA Counselling"
            price="INR1000/Session"
            Designation="Counselling Psychologist"
            Age="25"
            Gender="Female"
            Experience="Femal4 years"
            KnownLanguage="English"
            SessionDuration="45 Minutes"
            MediumOfTherapy="Video"
          />
        </div>
        <div className="col-md-4 col-xs-12">
          <BookingCard
            image={urveez}
            name="Urveez Kakalia"
            Qualification="MA Counselling"
            price="INR1000/Session"
            Designation="Counselling Psychologist"
            Age="25"
            Gender="Female"
            Experience="Femal4 years"
            KnownLanguage="English"
            SessionDuration="45 Minutes"
            MediumOfTherapy="Video"
          />
        </div>
        <div className="col-md-4  col-xs-12">
          <BookingCard
            image={urveez}
            name="Urveez Kakalia"
            Qualification="MA Counselling"
            price="INR1000/Session"
            Designation="Counselling Psychologist"
            Age="25"
            Gender="Female"
            Experience="Femal4 years"
            KnownLanguage="English"
            SessionDuration="45 Minutes"
            MediumOfTherapy="Video"
          />
         
         
       
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-4  col-xs-12 ">
          <BookingCard
            image={urveez}
            name="Urveez Kakalia"
            Qualification="MA Counselling"
            price="INR1000/Session"
            Designation="Counselling Psychologist"
            Age="25"
            Gender="Female"
            Experience="Femal4 years"
            KnownLanguage="English"
            SessionDuration="45 Minutes"
            MediumOfTherapy="Video"
          />
        </div>
        
         
         
       
        {/* </div> */}
      </div>


      </div>

      <div className="footnote  text-center" style={{ marginTop:"150px",marginBottom:"150px",fontSize:"12px"}}>
          <div className="line ">
              <p>Add a footnote if this applies to your business</p>
          </div>
      </div>

     
      <BookingFoot />
    </div>
  );
};

export default BookingPage;
