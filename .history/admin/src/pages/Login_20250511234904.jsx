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
              <div className="my-2">
                <input type='text' className='form-control' placeholder='Username' />
                 <input type='text' className='form-control' placeholder='Password' />
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