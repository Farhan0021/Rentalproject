import React from "react"
import Slider from "../../components/Slider"
import { useFormik } from "formik"
import axios from "axios"

const ForgotPassword = () => {

    let forgotFrm = useFormik({
        initialValues : {
            username : ""
        },
        onSubmit : (FormData)=>{
            axios.post(`${import.meta.env.VITE_API_URL}/seekerprofile/getotp`, FormData)
            .then(response=>{
                console.log(response.data);
            })
        }
    })

    return (
        <>
        <Slider/>
        <div className="container" style={{minHeigh : "700px"}}>

            <form onSubmit={forgotFrm.handleChange}>

          <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">

                    <div className="card-header bg-green ">
                        <h4 className="text-light " >Forgot Password</h4>
                    </div>

                    <div className="card-body">
                        <div className="my-3">
                            <label>Username/Email</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="card-footer">
                        <button className="btn btn-primary w-100">GET OTP</button>
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