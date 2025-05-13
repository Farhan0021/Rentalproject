import React from 'react'

const MyAccount = () => {
  return (
    <div className='container my-4' style={{minHeight : "700px", paddingTop : "120px" }}>
      <div className="row">
        <div className="col-md-3">
          <div className="alert alert-secondary">
            <p className='m-0'>Hello</p>
            <h4>{localStorage.getItem("owner-name")}</h4>
          </div>
          <div className="alert alert-secondary">
            <h6>My Propeties</h6>
            <ul className='nav flex-column'>

            <li className='nav-item'>
              <a href='' className='nav-link'>History <i class="fa fa-angle-right" aria-hidden="true"></i> </a>
            </li>
             <li className='nav-item'>
              <a href='' className='nav-link'>Current Properties  <i class="fa fa-angle-right" aria-hidden="true"></i> </a>
            </li>
             <li className='nav-item'>
              <a href='' className='nav-link'>Rent-Out <i class="fa fa-angle-right" aria-hidden="true"></i> </a>
            </li>
             <li className='nav-item'>
              <a href='' className='nav-link'>For Rent <i class="fa fa-angle-right" aria-hidden="true"></i> </a>
            </li>
             <li className='nav-item'>
              <a href='' className='nav-link'>Sell <i class="fa fa-angle-right" aria-hidden="true"></i> </a>
            </li>

            </ul>
          </div>
        </div>
        <div className="col-md-9"></div>
      </div>
    </div>
  )
}

export default MyAccount