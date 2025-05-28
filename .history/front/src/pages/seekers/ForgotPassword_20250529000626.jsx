import React from "react"
import Slider from "../../components/Slider"

const ForgotPassword = () => {
    return (
        <>
        <Slider/>
        <div className="container" style={{minHeigh : "700px"}}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">

                    <div className="card-header bg-green ">
                        <h4 className="text-light" offset-md-2>Forgot Password</h4>
                    </div>

                    <div className="card-body">
                        <div className="my-3">
                            <label>Username/Email</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="my-3">
                            <label>OTP</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="card-footer">
                        <button className="btn btn-primary w-100">SUBMIT</button>
                    </div>

                </div>
            </div>
        </div>
        </div>
      </>
    )
}

export default ForgotPassword