import React from 'react'
import HeaderArea from './HeaderArea'
const Validation=(values)=> {
    let errors={}

   if(!values.email){
    errors.email="Email required"
   }
   else if(values.name.length<9){
    errors.email="Enter valid email"
   }

   if(!values.passsword){
    errors.password="Password required"
   }
   else if(values.name.length<9){
    errors.password="Enter valid password"
   }
   return errors;
}

export default Validation;
