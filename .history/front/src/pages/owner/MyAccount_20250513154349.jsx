import React from 'react'

const MyAccount = () => {
  return (
    <div className='container my-4' style={{minHeight : "700px", paddingTop : "120px" }}>
      <div className="row">
        <div className="col-md-3">
          <div className="alert alert-info">
            <p>{localStorage.getItem("owner-name")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccount