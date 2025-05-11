import react from 'react'
import {useFormik} from 'formik'
import LoginSchema from '../../schema/LoginSchema'
import axios from 'axios'

const Login  = () => {

  let loginFrm = useFormik({
    validationSchema : LoginSchema,
    initialValues :{
      email : "",
      password : ""
    },
    onSubmit : (formData)=>{
      axios.post(`${import.meta.env.VITE_API_URL}`)
    }
  })
    return (
        <div className="container" style={{minHeigh : "700px"}}>
          <form onSubmit={loginFrm.handleSubmit}>

          <div className="row">
        <div className="col-md-6 offset-md-3 my-5">
       
         <div className="card">
            <div className="card-header bg-green">
                <h4 className='text-light'>login for Add details</h4>
            </div>
            <div className="card-body">
           
              <div className="row">
               
                </div>
                <div className="col-12 mb-3">
                  <input
                  name="email"
                  onChange={loginFrm.handleChange}
                    type="text"
                    className={"form-control " + (loginFrm.errors.email && loginFrm.touched.email ? 'is-invalid' : '')}
                    placeholder="email/Username"
                  />
                </div>
                <div className="col-12 mb-3">
                  <input
                  name="password"
                  onChange={loginFrm.handleChange}
                    type="Password"
                    className={"form-control " + (loginFrm.errors.password && loginFrm.touched.password ?
                      'is-invalid' : '')}
                    placeholder="Password"
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
         </div>
         </form>
        </div>
    )
}

export default Login