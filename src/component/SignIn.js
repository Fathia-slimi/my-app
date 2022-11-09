import React from 'react';
import {
 
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn
}
from 'mdb-react-ui-kit';
import SignUp from './SignUp';
//import SignUp from './SignUp';
export default function SignIn() {

   
  return (
  <MDBContainer className="my-5 gradient-form">

  <MDBRow>

    <MDBCol col='6' className="mb-5">
      <div className="d-flex flex-column ms-5">

        <div className="text-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            style={{ width: '185px' }} alt="logo" />
          <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
        </div>

        <p>Please login to your account</p>


   
<div className="modal-body">
    <form className="sign-up-form" >
        <div className="mb-4">
            <label htmlFor="signUpE">Email Adress</label>
            <input name="email"
             required
            
              type="email"
              className="form-controle"
              id ="SignUpE" />
        </div> 

        <div className="mb-3">
            <label htmlFor="signUpPwr">Password</label>
            <input name="password"
             required
           
             type="password"
              className="form-controle"
              id ="SignUpPwr" />
        </div>
       

        <button  type ="submit" className="btn btn-primary ">
   Submit
    </button> 
    </form>

            </div>

            </div>
   
    <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <a href={<SignUp/>}>
              <MDBBtn outline className='mx-2' color='danger'>
                Danger
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
);
}
