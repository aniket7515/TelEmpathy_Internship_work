import React from 'react'
import './LoginForm.css'

const LoginForm = () => {
  return (
    <div>
        <div className="login">
            <div className="login-box">
                <div className="login-content">
                    <h1>Login</h1>
                    <form action="#">
                    <div className="input py-2">
                       {/* <i className="fa fa-user icon"></i> */}
                       <input className="input-field" type="text" placeholder="Email" name="email"/>
                    </div>
                    <div className="input py-2">
                        {/* <i className="fa fa-key icon"></i> */}
                        <input className="input-field" type="password" placeholder="Password" name="psw"/>
                    </div>
                    <div className="checkin my-3">
                        <input type="checkbox"  />
                        <p>Remember me</p>
                        
                    </div>
                    <div className="reg">
                        <div className="loginbutton">
                            <button>Login</button>
                        </div>
                        <div className="register">
                            <p>Don't have an account yet? <span>Register here</span> </p>
                        </div>
                    </div>

                    </form>
                    
                    <p className="my-3" style={{color: "#321FDB"}}>Forgot yor Password?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginForm