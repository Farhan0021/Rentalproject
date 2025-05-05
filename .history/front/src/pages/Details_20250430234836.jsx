import React from 'react'

const Details = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8 ">
                    <div className="card m-2 p-3">
                       <h3>Tittle </h3>
                       <h5>&#8377;</h5>
                       <p> <i class="fa fa-map-marker" aria-hidden="true"></i>
                       Location</p>
                       <div className="col-md-5">
                        <img src='public/assets/images/img_7.jpg' className='img-thumbnail'/>
                       </div>
                       <div className="col-md-7"></div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card m-2 p-3">
                        <h3>Contact Owner</h3>
                        <p><b>Ow-Name</b>+91 917916835 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details