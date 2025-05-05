import React, { useEffect } from 'react'
import {useFormik} from 'formik'
import LoginSchema from '../../schema/LoginSchema';

const Login = () => {
  useEffect(()=>{
    window.scroll(0,0);
  },[])

  let loginFrm = useFormik({
    validationSchema : LoginSchema,
    initialValues :
    {
      email : "",
      password : ""
    },
    onSubmit : (formData)=>{
      console.log(formData)
      
    }
  })
  
    return (
        <div className="container" style={{minHeigh : "700px"}}>
        <form onSubmit={loginFrm.handleSubmit}>
        <div className="row"></div>
        <div className="col-md-6 offset-md-3 my-5">
       
         <div className="card">
            <div className="card-header bg-green">
                <h4 className='text-light'>login for more details</h4>
            </div>
            <div className="card-body">
           
              <div className="row">
               
                </div>
                <div className="col-12 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="email/Username"
                    name='email'
                    onChange={loginFrm.handleChange}
                  />
                </div>
                <div className="col-12 mb-3">
                  <input
                    type="Password"
                    className="form-control"
                    placeholder="Password"
                    name='password'
                    onChange={loginFrm.handleChange}
                  />
                </div>
                

                
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
         </form>
        </div>
       
    )
}

export default Login