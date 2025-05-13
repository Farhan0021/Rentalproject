import React from 'react'

const Login = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-4 offset-md-4 mt-5'>
          <div className="card bg-dark">
            <div className="card-header">
              <h4 className='text-light'>Administrator Login</h4>
            </div>
            <div className="card-body">
              <div className="my-4">
                <input type='text' className='form-control' placeholder='Username' />
                </div>
                <div className="my-4">
                 <input type='password' className='form-control' placeholder='Password' />
                 </div>
              </div>
            </div>
            <div className="card-footer"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login