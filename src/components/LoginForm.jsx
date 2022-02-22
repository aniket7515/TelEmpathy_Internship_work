import React from 'react'
import './LoginForm.css'

const LoginForm = () => {
  return (
    <div>
        <div className="login">
            <div className="login-box" style={{marginBottom:"50px"}}>
                <div className="login-content">
                    <h1>Login</h1>
                    <form action="#">
                    <div className="input py-2">
                       {/* <i className="fa fa-user icon"></i> */}
                       <i className="bi bi-person-fill" style={{border: '1px solid #ebedef',paddingTop:"5px",paddingBottom:"5px",paddingLeft:"5px",borderRadius:"2px",color:"#768192",backgroundColor:"#ebedef"}}></i>
                       <input className="input-field" type="text" placeholder="Email" name="email"style={{border:"1px solid #ebedef",padding:"0.375rem 0.75rem"}}/ >
                    </div>
                    <div className="input py-2">
                        {/* <i className="fa fa-key icon"></i> */}
                        <i className="bi bi-lock-fill"style={{border: '1px solid #ebedef',paddingTop:"5px",paddingBottom:"5px",paddingLeft:"5px",borderRadius:"2px",color:"#768192",backgroundColor:"#ebedef"}}></i>
                        <input className="input-field" type="password" placeholder="Password" name="psw" style={{border:"1px solid #ebedef",padding:"0.375rem 0.75rem"}}/>
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