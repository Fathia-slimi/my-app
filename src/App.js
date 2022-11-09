import React from 'react';
//import SignIn from './component/SignIn';
//import Users from './component/Users';
import {Routes,Route} from 'react-router-dom'
//import SignUp from './component/SignUp';
import Users from './component/Users';
import{Container} from "react-bootstrap"
import { AuthContextProvider } from './contexte/AuthContext';






function App() {
  
  
  return (
    <>
    
 <AuthContextProvider>
  <Container>

    <Routes>
      <Route path="/" element={<Users />}></Route>
    <Route path="*" element ={<p> path not resolved</p>}></Route>
   </Routes>
   </Container>
   </AuthContextProvider>
   </>
    
   
  )}
export default App;