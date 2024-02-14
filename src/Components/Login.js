import React, { useState } from 'react'
import "./Login.css"
import ReactDOM from 'react-dom/client'
import HeaderArea from './HeaderArea'
import Register from './Register.js'
import Forget from './Forget.js'

function Login() {
  const [formData, setFormData] = useState({ email: "", password: ""});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData,[name]: value });
  };

  const validateForm = (e) => {
    let isValid = true;
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }else if (formData.password.length<8) {
      newErrors.password = "Minimum 8 characters required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data:", formData);
      setSubmitted(true);
    } else {

    }
  };

  
  const Submit = () => {
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(<HeaderArea />)
  }
  const Regist = () => {
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(<Register />)
  }
  const Reset = (e) => {
    e.preventDefault();
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(<Forget />)
  }
  return (
    <>

    <div className="Login">
    <div className="left-section">
      <div className='facebook'>
        {submitted ? (<HeaderArea />) : (
          <div className="facebooktext">
            <h1><b>facebook</b></h1>
            <div className="title">
              <h3>Facebook helps you to connect and share <br/> with the people in your life.</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  
    <div className="right-section">
      {!submitted && (
        <form onSubmit={handleSubmit}>
          <div className="logincontainer">
            <div className="logindetail">
            <div>
              <input type="email" name="email" value={formData.email} placeholder="Email or Mobile Number" autoComplete='off' onChange={handleInputChange} />
              {errors.email && <div className="error" style={{ color: "red", fontSize: "13px" }}>{errors.email}</div>}
            </div>
            <div>
              <input type="password" name="password" value={formData.password} placeholder="Password" autoComplete='off' onChange={handleInputChange} />
              {errors.password && <div className="error" style={{ color: "red", fontSize: "13px" }}>{errors.password}</div>}
            </div>
              <button className="btn" onChange={Submit}>Login</button>
              
              <div className="forget">
                <a href="forget" onClick={Reset}>Forgot Password?</a>
              </div>
            </div>
  
            <div className="Create">
              <button className="btns" onClick={Regist}>Create New Account</button>
            </div>
  
            <div className="page">
              <a href="createpage">Create a Page</a> for a celebrity, brand, or business
            </div>
          </div>
        </form>
      )}
    </div>
  </div>
  
    </>
  )

}
export default Login
