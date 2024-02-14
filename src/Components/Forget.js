import React,{ useState} from 'react'
import './Register.css'
import  ReactDOM  from 'react-dom/client'
import Login from './Login.js'
function Forget() {
  const For = ()=>{
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(<Login/>)
  }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repassword:""
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

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }
    if (!formData.repassword) {
      newErrors.repassword = "Reset Password is required";
      isValid = false;
    }else if (formData.password !== formData.repassword) {
      newErrors.repassword = "Passwords do not match";
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
    
    <><div className='form-container'>
      {submitted ? (
        <Login />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='ForgetForm'>
          <div className='BasicDetail'>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder='Email' />
            {errors.email && <div className="error" style={{ color: "red", fontSize: "13px" }}>{errors.email}</div>}


          <div>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" />
            {errors.password && <div className="error" style={{ color: "red", fontSize: "13px" }}>{errors.password}</div>}
          </div>

          <div>
            <input type="password" name="repassword" value={formData.repassword} onChange={handleInputChange} placeholder="Reset Password" />
            {errors.repassword && <div className="error" style={{ color: "red", fontSize: "13px" }}>{errors.repassword}</div>}
          </div>
          </div>
       
          <button className="btnsss" onclick={For}>Reset Password</button>
          </div>
        </form>
      )}
      </div>
    </>
  )
}
export default Forget








