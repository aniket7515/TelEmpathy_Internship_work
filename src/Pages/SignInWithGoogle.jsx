import React from 'react'
import './style.css'
import logo from '../components/Images/Logo_TelEmpathy.png'
import google from '../components/Images/google1.png'

const SignInWithGoogle = () => {
  return (
    <div className="signinwithgoogle">
        <div className="signinbox">
            <div className="signin text-center">
                <div className="imglogo">
                    <img src={logo} alt="" />
                </div>
                <div className="google mt-5">
                    <a href="#"><button> <img src={google} className="googlelogo" alt="" /> <span className="mx-2">Sign in with Google</span>  </button></a>
                    
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default SignInWithGoogle