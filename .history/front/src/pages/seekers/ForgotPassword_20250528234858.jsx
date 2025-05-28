import React from "react"

const ForgotPassword = () => {
    return (
        <>
        <Slider/>
        <div className="container" style={{minHeigh : "700px"}}>
        <form onSubmit={loginFrm.handleSubmit}>
        <div className="row">
        <div className="col-md-6 offset-md-3 my-5">
       
         <div className="card">
            <div className="card-header bg-green">
                <h4 className='text-light'> <bold> login for more details </bold> </h4>
                <small className='text-light' ><b>If You are New Then <NavLink to="/seeker/signup">SignUp Here</NavLink> </b> </small>
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

                <div className="col-md-12 ">
                  <p className='text-center'>
                    <NavLink to='/seeker/forgot-password' >Forgot Password</NavLink>
                  </p>
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

export default ForgotPassword