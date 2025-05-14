import React from 'react'
import OwnerSideBar from '../../components/OwnerSideBar'

const AddNew = () => {
  return (
     <div className='container my-4' style={{minHeight : "700px", paddingTop : "120px" }}>
       <div className="row">
         <OwnerSideBar/>
         <div className="col-md-9">
           <h4>ADD New Property</h4>
           <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="my-4">
              <label>Title</label>
              <input type='text' placeholder='Title' className='form-control' />
              </div>

              <div className="my-4">
                <label>Property Address</label>
                <textarea placeholder='Address' className='form-control' ></textarea>
              </div>

              <div className="my-4">
                <label>Property Type</label>
                <select className='form-control' >
                  <option>Select</option>
                  <option>Appartment</option>
                  <option>Flat</option>
                  <option>Row House</option>
                  <option>Hostel</option>
                </select>
              </div>


            </div>
           </div>
         </div>
       </div>
     </div>
  ) 
}

export default AddNew