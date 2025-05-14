import React from 'react'

const MyProperty =() => {
    return (
         <div className='container my-4' style={{minHeight : "700px", paddingTop : "120px" }}>
      <div className="row">

        <OwnerSideBar/>
        
        <div className="col-md-9">
          <h4>My Personal Information</h4>
          <table className='table table-bordered table-hover table-secondary'>
            <tbody>
              <tr>
                <td>Full Name</td>
                <td>{owner.name}</td>
              </tr>
                <tr>
                <td>Email</td>
                <td>{owner.email}</td>
              </tr>
                <tr>
                <td>Contact Number</td>
                <td>{owner.contact}</td>
              </tr>
                <tr>
                <td>Address</td>
                <td>{owner.address}</td>
              </tr>
                <tr>
                <td>Full Name</td>
                <td>----</td>
              </tr>
                <tr>
                <td>Full Name</td>
                <td>----</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    )
}

export default MyProperty