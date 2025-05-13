import React from 'react'
import {useFormik} from 'formik'


const Login = () => {
  let loginFrm = useFormik({
    initialValues : {
      username : "",
      password : ""
    },
    onSubmit : (formData)=>{
      console.log(formData);
    }
  })


  return (
    <div className='container mt-5'>
      <form onSubmit={loginFrm.handleSubmit}>
      <div className='row'>
        <div className='col-md-4 offset-md-4 mt-5'>
          <div className="card bg-dark">
            <div className="card-header">
              <h4 className='text-light'>ADMINISTRATOR LOGIN</h4>
            </div>
            <div className="card-body">
              <div className="my-4">
                <input name='username' onChange={loginFrm.handleChange} type='text' className='form-control' placeholder='Username' />
                </div>
                <div className="my-4">
                 <input  name=' password' onChange={loginFrm.handleChange} type='password' className='form-control' placeholder='Password' />
                 </div>
              </div>
            <div className="card-footer">
              <button type='submit' className='btn btn-light'>LOGIN</button>
              </div>
              </div>
            </div>
          </div>
        </div>
    
  )
}

export default Login