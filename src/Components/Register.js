import React,{useState} from 'react'
import './Register.css'
import Login from './Login.js'
import  ReactDOM  from 'react-dom/client'

function Register() {
  const Back = ()=>{
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(<Login/>)
  }

  const [formData, setFormData] = useState({
    name:"",
    email: "",
    mobile: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({...formData,[name]: value});
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }
    if (!formData.mobile) {
      newErrors.mobile = "Mobile Number is required";
      isValid = false;
    }else if (formData.mobile.length<10) {
      newErrors.mobile = "Invalid mobile count";
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

  return (
    <div className='Register'>
      {submitted ? (
        <Login/>
      ) : (
        <form onSubmit={handleSubmit}>
        <div className="Registercontainer">
        <div className="details">
        <div>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder='Full Name'/>
        {errors.name && <div className="error"style={{color:"red",fontSize:"13px"}}>{errors.name}</div>}
        </div>

        <div>
        <input type="text"  name="email" value={formData.email} onChange={handleInputChange} placeholder='Email'/>
        {errors.email && <div className="error" style={{color:"red",fontSize:"13px"}}>{errors.email}</div>}
        </div>

        <div>
        <input type="text" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder='mobile Number'/>
        {errors.mobile && <div className="error"style={{color:"red",fontSize:"13px"}}>{errors.mobile}</div>}
        </div>

        <div >
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password"/>
        {errors.password && <div className="error"style={{color:"red",fontSize:"13px"}}>{errors.password}</div>}
        </div>
          <button className="btnsss"  onclick={Back}>Register</button>
          </div>
          </div>
        </form>
      
      )}
    </div>
  );
}

export default Register
