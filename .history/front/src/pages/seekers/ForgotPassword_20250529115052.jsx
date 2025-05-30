import React, { useState } from "react"
import Slider from "../../components/Slider"
import { useFormik } from "formik"
import axios from "axios"
import {useNavigate} from 'react-router-dom'

const ForgotPassword = () => {

    let navigate = useNavigate();
    let [showPreeLoader, setShowPreLoader] = useState(false);
    let [errMsg, setErrMsg] = useState("");
    let forgotFrm = useFormik({
        initialValues : {
            username : ""
        },
        onSubmit : (FormData)=>{
            axios.post(`${import.meta.env.VITE_API_URL}/seekerprofile/getotp`, FormData)
            .then(response=>{
                if(response.data.success==true){

                }else{
                    setErrMsg("THis Username/Email Does Not Exist  !");
                }
            })
        }
    })

    return (
        <>
        <Slider/>
        <div className="container" style={{minHeigh : "700px"}}>

            <form onSubmit={forgotFrm.handleSubmit}>

          <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">

                    <div className="card-header bg-green ">
                        <h4 className="text-light " >Forgot Password</h4>
                    </div>

                    <div className="card-body">
                        <div className="my-3">
                            <label>Username/Email</label>
                            <input name='username' onChange={forgotFrm.handleChange} type="text" className="form-control" />
                            <small className="text-danger">{errMsg}</small>
                        </div>
                    </div>

                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary w-100">GET OTP <span className="spinner-border spinner-border-sm"></span> </button>
                    </div>

                </div>
            </div>
         </div>
         </form>
        </div>
      </>
    )
}

export default ForgotPassword