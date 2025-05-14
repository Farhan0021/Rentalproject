import React from 'react'
import OwnerSideBar from '../../components/OwnerSideBar'
import {useFormik} from 'formik'

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
                  <option>Apartment</option>
                  <option>Flat</option>
                  <option>Row House(1-2 BHK)</option>
                  <option>Hostel</option>
                </select>
              </div>

              <div className="my-4">
                <lable>Rent</lable>
                <input type='text' placeholder='Rent' className='form-control' />
              </div>

              <div className="my-4">
                <label>Security Deposit</label>
                <input type='text' placeholder='Security Deposit' className='form-control' />
              </div>

              <div className="d-grid">
                <button type='submit' className='btn btn-success'>Add</button>
              </div>

              <div className="my-4">
                <label>Amenities</label><br />
                Parking <input type='checkbox' />
                &nbsp;&nbsp;WiFi <input type='checkbox' />
                &nbsp;&nbsp;Electricity <input type='checkbox' />
                &nbsp;&nbsp;Water <input type='checkbox'/>
                &nbsp;&nbsp;Furnished <input type='checkbox' />
              </div>


            </div>
           </div>
         </div>
       </div>
     </div>
  ) 
}

export default AddNew