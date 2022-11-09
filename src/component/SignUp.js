import React ,{useState,}from 'react';
import {
  
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn
  
}
from 'mdb-react-ui-kit';

import SignIn from '../component/SignIn';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexte/AuthContext';

const SignUp=() =>{
  
  const [error, setError]= useState("")
  const [email, setEmail]= useState("")
  const [password, setPasswod]= useState("")
  const [repeatPassword, setRepeatPassword]= useState("")
  const { createUser } = UserAuth () ;
  const navigate = useNavigate();
  const validatePassword = () => {
    let isValid = true
    if (password !== '' && repeatPassword !== ''){
      if (password !== repeatPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }
  
   const handleForm=async (e)=>{
    e.prevetDefault();
    setError("");
    try{
      if(validatePassword()) {
      await createUser(email,password)
      navigate(<SignIn/>)
    }}
     catch(e)
    {
      setError(e.message)
      console.log(e.message);
      
    }
  
  }

   
    return (
        <>
      <MDBContainer  className="my-5 gradient-form">

<MDBRow>

  <MDBCol col='6' className="mb-5">
    <div className="d-flex flex-column ms-5">

      <div className="text-center">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
          style={{ width: '185px' }} alt="logo" />
        <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
      </div>

      <p>PleaseSign Up to your account</p>   
<div className="modal-body">
    <form
    onSubmit={handleForm}>
        <div className="mb-4">
            <label htmlFor="signUpEmail">Email Adress</label>
            <input
            onChange={(e) => setEmail(e.target.value)}
             name="email"
             required
              type="email"
              className="form-controle"
              id ="SignUpEmail" />
        </div> 

        <div className="mb-3">
            <label htmlFor="signUpPassword">Password</label>
            <input 
           onChange={(e) => setPasswod(e.target.value)}
            name="password"
             required
             type="password"
              className="form-controle"
              id ="SignUpPasssword" />
        </div>
        <div className="mb-3">
            <label htmlFor="Repeat-password"> repeat password</label>
            <input
          onChange={(e) => setRepeatPassword(e.target.value)}
             name="Repeat-password"
              required
              type="password"
              className="form-controle"
              id ="Repeat-password" />
              <p className="text-danger mt-1">{error}</p>
        </div>


        <button  type ="submit" className="btn btn-primary ">
   Submit
    </button> 
    </form>

            </div>

            </div>
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <a href={<SignIn/>}>
              <MDBBtn outline className='mx-2' color='danger'>
                SignIn
              </MDBBtn>
              </a>
            </div>

          

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a company</h4>
              <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

          </div>

        </MDBCol>

  </MDBRow>

</MDBContainer>


    
        
        
        </>
    );
}
export default SignUp ;

