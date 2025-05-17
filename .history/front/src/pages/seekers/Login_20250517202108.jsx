import React, { useEffect } from 'react'
import { useState } from 'react';
import {useFormik} from 'formik'
import LoginSchema from '../../schema/LoginSchema';
import {NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Slider from '../../components/Slider';
import  Button  from 'react-bootstrap/Button'

const Login = () => {
  let navigate = useNavigate();

  let [errMsg,setErrMsg] = useState("");
  useEffect(()=>{
    window.scroll(0,0);
  },[])

 let loginFrm = useFormik({
  validationSchema : LoginSchema,
  initialValues : {
    email : "",
    password : ""
  },
  onSubmit : (fromData)=>{
    axios.post(`${import.meta.env.VITE_API_URL}/seekerauth`, fromData)
    .then(response=>{
      // console.log(response.data)
      if(response.data.success==true){
        if(localStorage.getItem("owner-access-token")){
          localStorage.removeItem("owner-access-token")
          localStorage.removeItem("owner-name")
        }
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("access-token", response.data.token);
        navigate("/");
      }
      else{
        if(response.data.errType==1){
          setErrMsg("This Email ID and Password is Incorrect !");

        }
        if(response.data.errType==2){
          setErrMsg("This Password is Incorrect !")

        }
      }
    })
  }
 })
    return ( 
      <>
        <Slider/>
        <div className="container" style={{minHeigh : "700px"}}>
        <form onSubmit={loginFrm.handleSubmit}>
        <div className="row">
        <div className="col-md-6 offset-md-3 my-5">
       
         <div className="card">
            <div className="card-header bg-green">
                <h4 className='text-light'> <b> login for more details </b> </h4>
                <small className='text-light' >If You are New Then <NavLink to="/seeker/signup">SignUp Here</NavLink> </small>
            </div>
            <div className="card-body">
           
              <div className="row">
               
                </div>
                <div className="col-12 mb-3">
                  <input
                    type="text"
                    className={"form-control " + (loginFrm.errors.email && loginFrm.touched.email ? 'is-invalid' : '') }
                    placeholder="email/Username"
                    name='email'
                    onChange={loginFrm.handleChange}
                  />
                </div>
                <div className="col-12 mb-3">
                  <input
                    type="Password"
                    className={"form-control " + (loginFrm.errors.password && loginFrm.touched.password ? 'is-invalid' : '') }
                    placeholder="Password"
                    name='password'
                    onChange={loginFrm.handleChange}
                  />
                </div>
                <p className='text-danger text-center'>{errMsg}</p> 
                

                
              </div>
            
            </div>
            <div className="card-footer">
            <div className="col-12">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary"
                  />
                </div>
               
            </div>
         </div>
         </div>
         </form>
        </div>
      </>
       
    )
}

export default Login