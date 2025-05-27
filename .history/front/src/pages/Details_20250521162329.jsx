import React, { useEffect, useState } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

const Details = () => {
  let [show, setShow] = useState(false);
  let [showMsg, setShowMsg] = useState(false); 

  let [message, setMessage] = useState('');
  let [btnDisable, setBtnDisable] = useState(true);

  let [msg, setMsg] = useState("");

 
  let param = useParams();
  let navigate = useNavigate();
  let [property, setProperty] = useState({});
  let [ownername, setOwnername] = useState('');
  let [ownernum, setOwnernum] = useState('');
  let [advMoney, setAdvMoney] = useState("");

  const id = param.id;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/property/find/${id}`)
      .then(response => {
        setProperty(response.data[0]);
        setOwnername(response.data[0].owner_id.name);
        setOwnernum(response.data[0].owner_id.contact);
        setAdvMoney(response.data[0].owner_id.advance_money);
      });
  }, []);

  let getValue = (e) => {
    const val = e.target.value;
    setMessage(val);
    setBtnDisable(val.trim() === '');
  };

  // let sendMsg = () => {
  //   alert(`Message sent to Owner: ${message}`);
  //   setShowMsg(false);
  //   setMessage('');
  //   setBtnDisable(true);
  // };

  let sendMsg = ()=>{
    axios.post(`${import.meta.env.VITE_API_URL}/message`,
      {
         message : message,
          seeker_token : localStorage.getItem("access-token"),
          property_id : property._id,
          owner_id : property.owner_id._id
      }
    )
    .then(response=>{
      console.log(response.data);

       setShowMsg(false);      
       setMessage('');        
       setBtnDisable(true); 
    })
  }

  const handleContactClick = () => {
    if (localStorage.getItem('access-token')) {
      setShowMsg(true);
    } else {
      setShow(true);
    }
  };

  return (
    <>
      {/* Modal: Not Logged In */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are not logged in to see Owner Detail</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
          <NavLink to="/seeker/login">
            <Button variant="primary">Login</Button>
          </NavLink>
        </Modal.Footer>
      </Modal>

      {/* Modal: Send Message */}
      <Modal show={showMsg} onHide={() => setShowMsg(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Message to Property Owner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            onChange={getValue}
            className='form-control'
            placeholder='Message to Owner'
            value={message}
          />
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant='danger' onClick={() => setShow(false)}>Close</Button>
          <Button disabled={btnDisable} variant='success' onClick={sendMsg}>Send Message</Button> */}
        </Modal.Footer>
      </Modal>

      <Modal show={showMsg} onHide={()=>setShowMsg(false)}>
        <Modal.Header>
          <Modal.Title>Message To Prpeprty Owner</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <textarea onChange={(e)=>getValue(e)} className='form-control ' placeholder='Type a Message to Owner'></textarea>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='danger' onClick={()=>setShowMsg(false)}>X</Button>
          <Button disabled={btnDisable} variant='success' onClick={sendMsg}>Send</Button>
        </Modal.Footer>

      </Modal>

      {/* Main Content */}
      <div className="container my-5" style={{ top: "100px", position: "relative", minHeight: "700px" }}>
        <div className="row">

          <div className="col-md-8 ">
            <div className="card m-2 p-3">
              <h3>{property.tittle}</h3>
              <h5>&#8377; {property.rent ? property.rent.toFixed(2) : ''}</h5>
              <p><i className="fa fa-map-marker" aria-hidden="true"></i> {property.address}</p>

              <div className="row">
                <div className="col-md-5">
                  <img src={`http://localhost:3000/upload_images/${property.image}`} className='img-thumbnail' />
                </div>

                <div className='col-md-7'>
                  <div className='px-2 py-3 bg-dark'>
                    <p className='m-0 p-0 text-light'>
                      {
                        property.amenity ? property.amenity.map((item, index) => {
                          return (
                            <span key={index}>
                              &nbsp;&nbsp;
                              {item === "Parking" && <i className="fa fa-car" aria-hidden="true"></i>}
                              {item === "WiFi" && <i className="fa fa-wifi" aria-hidden="true"></i>}
                              {item === "Electricity" && <i className="fa fa-bolt" aria-hidden="true"></i>}
                              {item === "Furnished" && <i className="fa fa-bed" aria-hidden="true"></i>}
                              {item === "Water" && <i className="fa fa-tint" aria-hidden="true"></i>}
                              &nbsp;{item}
                            </span>
                          );
                        }) : ''
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
              <p><b>Ow-Name:</b> {localStorage.getItem("access-token") ? ownername : 'XxXxxX'}</p>
              <p><b>Ow-Contact:</b> +91 {localStorage.getItem("access-token") ? ownernum : '930XxXxXxX'}</p>
              {
                localStorage.getItem("access-token")
                ?
                <button onClick={()=>setShowMsg(true)} className='btn bg-green text-light btn-sm'>Connect With Owner</button>
                :
                <button onClick={handleContactClick} className='btn btn-info btn-sm'>Contact Owner</button>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
