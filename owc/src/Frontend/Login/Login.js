import React, { useState } from 'react'
import {NavLink, Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import userStore from '../../Zustand/Zustandstore'
import { data } from '../Dashboard/Admins/Googlecharts'
import { BsFacebook , BsYoutube,BsApple} from 'react-icons/bs';
import { AiFillTwitterCircle} from 'react-icons/ai';
import url from '../../config'
export default function Login() {
  const[vali,setvali]=useState(false)
  const history=useHistory()
  const [user,SetUser]=useState({
   email:"",
   password:"" 
    })
 function handler(e){
  console.log(e)  
  const {name,value}=e.target
    
    SetUser({
      ...user,[name]:value
    })
   
 }

 
    return (
    <div>
        <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
     
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <div>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            
            <Link ><h1 className="p-3"><BsFacebook /></h1></Link>
           <h1 className="p-3"><BsYoutube /></h1>
            <Link><h1 className="p-3"><AiFillTwitterCircle /></h1></Link>
            <h1 className="p-3"><BsApple /></h1>
            

          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <div className="form-outline mb-4">
            <input  type="email" id="form3Example3" className="form-control "
                name="email" value={user.email} onChange={ handler }   placeholder="Enter valid email address" />
            <label className="form-label" for="form3Example3">Email address</label>
          </div>

          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control "
           name="password" value={user.password} onChange={handler} placeholder="Enter password" />
            <label className="form-label" for="form3Example4">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">

            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <Link href="#!" className="text-body" onClick={()=>{history.push('/Forgotpass')}}>Forgot password?</Link>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <Link to={()=>{if(vali){
                           history.push("/home") 
                          window.location.reload(true)
                              alert(`Welcome back  🙂🙂😀😃${user.email}`)                  

            }
          else {
             return"/login"
          } }}><button  onClick={async()=>{
                   
                  var value
                   await  axios.post(url.server+"/User/Login",user).then((res)=>{
                                      
                      value=res.data
                      const{email,...values}=value
                      sessionStorage.setItem("email",email)
                      sessionStorage.setItem("role",values.role);
                      sessionStorage.setItem("name",values.name);
                      sessionStorage.setItem("phoneno",values.phoneno);
                      if(email===user.email){
                       setvali(true)
                      }
                      else{
                      alert("😵‍💫😵‍💫 Invalid Credentials")
                      }
                 }).catch(err=>console.log(err))
                  
                 
            }}type="button" className="btn btn-primary btn-lg"
              style={{"padding-left": "2.5rem", "padding-right": "2.5rem"}}>Login</button></Link>
            <p  className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <label for="register"><span href="#!"
               onClick={()=>{history.push('/register')}} className="link-danger" name='register'>Register</span></label></p>
          </div>

        </div>
      </div>
    </div>
  </div>
  {/* <div
    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

    <div className="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>



    <div>
      <span href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </span>
      <span href="#!" className="text-white me-4">
        <i className="fab fa-twitter"></i>
      </span>
      <span href="#!" className="text-white me-4">
        <i className="fab fa-google"></i>
      </span>
      <span href="#!" className="text-white">
        <i className="fab fa-linkedin-in"></i>
      </span>
    </div>
 
  </div> */}
</section>
    </div>
  )
}
