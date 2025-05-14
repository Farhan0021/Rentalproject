import React from 'react'
import OwnerSideBar from '../../components/OwnerSideBar'

const MyProperty =() => {
    return (
         <div className='container my-4' style={{minHeight : "700px", paddingTop : "120px" }}>
      <div className="row">

        <OwnerSideBar/>
        
        <div className="col-md-9">
          <h4>My Properties</h4>
          <table className='table table-bordered table-hover table-secondary'>
            <tbody>
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
    )
}

export default MyProperty