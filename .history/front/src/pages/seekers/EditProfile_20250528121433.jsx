import React, {useEffect, useState} from "react"
import { NavLink } from "react-router-dom"
import axios from 'axios'
import { useFormik } from "formik"

const EditProfile = () => {
   let [seeker, setSeeker] = useState({})
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/seekerprofile`, {
      headers : {Authorization : localStorage.getItem("access-token")}
    })
    .then(response=>{
      setSeeker(response.data[0]);
    })
  },[])

  let updateFrm = useFormik({
    initialValues : {

    },
    onSubmit : ()=>{
      
    }
  })
    return (
        <div className="container my-4" style={{minHeight : "750px", paddingTop : "120px"}}>
      <div className='row'>
        <div className="col-md-3">
          <div className='alert alert-secondary'>
            <p className='m-0'>Hello</p>
            <h4>{ localStorage.getItem("name") }</h4>
          </div>
          <div className='alert alert-secondary'>
            <h6>My Account</h6>
            <ul className='nav flex-column'>
              
              <li className='nav-item'>
                <NavLink to='/' className='nav-link'> Enquiries <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/seeker/my-profile' className='nav-link'> MY Profile <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              
              <li className='nav-item'>
                <NavLink to='/seeker/edit-profile' className='nav-link'>Edit Profile  <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/seeker/update-password' className='nav-link'>Update Password  <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/seeker/logout' className='nav-link'>Logout  <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              
              
             
            </ul>
          </div>
        </div>
        <div className="col-md-9">
          <h4> Update Personal Information </h4>
          <form>
            <div className="row">
              <div className="col-md-8 offset-md-2">

                  <div className="my-2">
                     <label>FULL NAME</label>
                     <input type="text" className="form-control"/>
                  </div>
                  <div className="my-2">
                     <label>USERNAME / EMAIL</label>
                     <input type="text" className="form-control"/>
                  </div>
                  <div className="my-2">
                     <label>CONTACT NUMBER :-</label>
                     <input type="text" className="form-control"/>
                  </div>
                  <div className="my-2">
                     <label>ADDRESS </label>
                     <textarea className="form-control"></textarea>
                  </div>
                  <div className="my-2">
                     <label>GENDER </label>
                     <br/>
                     <br/>
                     MALE <input type="radio" name="gender" />	&nbsp; 	&nbsp;
                     	&nbsp;FEMALE <input type="radio" name="gender" />
                  </div>
                  <div className="my-4 col-md-4 offset-md-5">
                    <button type="submit" className="btn  btn-primary">UPDATE</button>
                  </div>

              </div>
            </div>

          

          </form>
        </div>
      </div>
    </div>
    )
}

export default EditProfile