import React, {useRef} from 'react'
import OwnerSideBar from '../../components/OwnerSideBar'
import {useFormik} from 'formik'
import PropertySchema from '../../schema/PropertySchema'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddNew = () => {
  let myFile = useRef();
  let navigate = useNavigate();
  let propFrm = useFormik({
    validationSchema : PropertySchema,
    initialValues : {
      tittle : "",
      address : "",
      property_type :"",
      rent : "",
      deposite :"",
      amenity : "",
      image : ""
    },
    onSubmit : (formData)=>{
      axios.post(`${import.meta.env.VITE_API_URL}/property`, formData, {
        headers : {Authorization : localStorage.getItem("owner-access-token")}
      })
      .then(response=>{
        navigate("/owner/my-property");
      })
    }
  })
  return (
     <div className='container my-4' style={{minHeight : "700px", paddingTop : "120px" }}>
      <form onSubmit={propFrm.handleSubmit}>
       <div className="row">
         <OwnerSideBar/>
         
         <div className="col-md-9">
           <h4>ADD New Property</h4>
           <div className="row">
            <div className="col-md-8 offset-md-2">

              <div className="my-4">
              <label>Title</label>
              <input name='tittle' onChange={propFrm.handleChange} type='text' placeholder='Title' className={'form-control ' + (propFrm.errors.tittle && propFrm.touched.tittle ? 'is-invalid' : '')} />
              </div>

              <div className="my-4">
              <label>Image</label>
              <input name='image' ref={myFile} type='file' className={'form-control ' + (propFrm.errors.image && propFrm.touched.image ? 'is-invalid' : '') } />
              </div>

              <div className="my-4">
                <label>Property Address</label>
                <textarea name='address' onChange={propFrm.handleChange} placeholder='Address' className={'form-control ' + (propFrm.errors.address && propFrm.touched.tittle ? 'is-invalid' : '')} ></textarea>
              </div>

              <div className="my-4">
                <label>Property Type</label>
                <select name='property_type' onChange={propFrm.handleChange} className={'form-control ' + (propFrm.errors.property_type && propFrm.touched.tittle ? 'is-invalid' : '')}>
                  <option>Select</option>
                  <option>Apartment</option>
                  <option>Flat</option>
                  <option>Row House(1-2 BHK)</option>
                  <option>Hostel</option>
                </select>
              </div>

              <div className="my-4">
                <lable>Rent</lable>
                <input name='rent' onChange={propFrm.handleChange} type='text' placeholder='Rent' className={'form-control ' + (propFrm.errors.rent && propFrm.touched.tittle ? 'is-invalid' : '')} />
              </div>

              <div className="my-4">
                <label>Security Deposit</label>
                <input name='deposite' onChange={propFrm.handleChange} type='text' placeholder='Security Deposit' className='form-control' />
              </div>

              <div className="my-4">
                <label>Amenities</label><br />
                Parking <input value='Parking' type='checkbox' name='amenity' onChange={propFrm.handleChange}  />
                &nbsp;&nbsp;WiFi <input value='WiFi' type='checkbox' name='amenity' onChange={propFrm.handleChange} />
                &nbsp;&nbsp;Electricity <input value='Electricity' type='checkbox' name='amenity' onChange={propFrm.handleChange} />
                &nbsp;&nbsp;Water <input value='Water' type='checkbox' name='amenity' onChange={propFrm.handleChange}/>
                &nbsp;&nbsp;Furnished <input value='Furnished' type='checkbox' name='amenity' onChange={propFrm.handleChange} />
              </div>

               <div className="d-grid">
                <button type='submit' className='btn btn-success'>Add</button>
              </div>

            </div>
           </div>
         </div>
         
       </div>
       </form>
     </div>
  ) 
}

export default AddNew