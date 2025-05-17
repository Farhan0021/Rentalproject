import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

const Details = () => {
    let param = useParams();

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    let [property, setProperty] = useState({});

    let [ownername, setOwnername] = useState("");
    let [ownernum, setOwnernum] = useState("")


    let id = param.id;
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/property/find/${id}`)
        .then(response=>{
            setProperty(response.data[0])

            setOwnername(response.data[0].owner_id.name)
            setOwnernum(response.data[0].owner_id.contact);

        })
    },[])
    return (
        <div className="container my-7" style={{ psddingTop: '70px'}}>
            <div className="row">
                <div className="col-md-8 ">
                    <div className="card m-2 p-3">
                       <h3> {property.tittle} </h3>
                       <h5>&#8377; {property.rent ? property.rent.toFixed(2) : ''} </h5>
                       <p> <i class="fa fa-map-marker" aria-hidden="true"></i>
                       {property.address} </p>
                       
                       <div className="row">

                       <div className="col-md-5">
                        <img src='/public/assets/images/img_7.jpg' className='img-thumbnail'/>
                       </div>

                        <div className='col-md-7'>
                        <div className='px-2 py-3 bg-dark'>
                            
                            <p className='m-0 p-0 text-light'>
                                {
                                    property.amenity
                                    ?
                                    property.amenity.map(item=>{
                                       return(
                                        <>
                                            {
                                                item=="Parking"
                                                ?
                                                <span>&nbsp;&nbsp;<i class="fa fa-car" aria-hidden="true"></i> {item}</span>
                                                :
                                                item == "WiFi"
                                                ?
                                                <span>&nbsp;&nbsp;<i class="fa fa-wifi" aria-hidden="true"></i> {item}</span>
                                                :
                                                item=="Electricity"
                                                ?
                                                <span>&nbsp;&nbsp;<i class="fa fa-bolt" aria-hidden="true"></i> {item}</span>
                                                :
                                                item=="Furnished"
                                                ?
                                                <span>&nbsp;&nbsp;<i class="fa fa-bed" aria-hidden="true"></i> {item}</span>
                                                :
                                                item=="Water"
                                                ?
                                                <span>&nbsp;&nbsp;<i class="fa fa-tint" aria-hidden="true"></i> {item}</span>
                                                :
                                                ''
                                            }
                                        </>                                     
                                        
                                       )
                                    })
                                    :
                                    ''
                                }
                                </p>
                        </div>

                        <div className='row mt-4'>
                            <div className="col-md-12">
                                <p className='m-0 p-0'>Property Type</p>
                                <p className='m-0 p-0 fw-bold'>{property.property_type}</p>
                            </div>
                            

                         </div>   
                        </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card m-2 p-3">
                        <h3>Contact Owner</h3>
                        <p><b>Ow-Name</b> { localStorage.getItem("access-token") ?  ownername : 'XxXxxX'} </p>
                        <p><b>Ow-Contact</b>  +91 { localStorage.getItem("access-token") ? ownernum : '930XxXxXxX'} </p>
                        <button data-bs-toggle="modal" data-bs-target="#msgModal" className='btn btn-info btn-sm'>Contact Owner</button>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="msgModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Message</h3>
                        </div>
                        <div className="modal-body">
                            <p>You are Not Logged-In, Try After Login</p>
                        </div>
                        <div className="modal-footer">
                                <button data-bs-dismiss='modal' className="btn btn-danger">
                                    X
                                </button>
                                 <NavLink to="/seeker/login" data-bs-dismiss='modal' className="btn btn-success">
                                    Login
                                </NavLink>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Details