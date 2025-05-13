import React from 'react'

const MyAccount = () => {
  return (
    <div className='container my-4' style={{minHeight : "700px", paddingTop : "120px" }}>
      <div className="row">
        <div className="col-md-3">
          <div className="alert alert-info">
            <p className='m-0'>Hello</p>
            <h4>{localStorage.getItem("owner-name")}</h4>
          </div>
        </div>
        <div className="col-md-9"></div>
      </div>
    </div>
  )
}

export default MyAccount