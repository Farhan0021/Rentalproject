import React, { useEffect, useState} from 'react' 
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ViewProperty = () =>{

    let param = useParams();
    let id = param.id;
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/v1/property/admin/${id}`)
        .then(response=>{
            console.log(response.data);
        })
    },[])

    return (
         <div className="container">
          <div className="page-inner">
            <div className="row">
             <div className="col-md-12">
             <h3> View Property </h3>
             </div>
            </div>
         </div>
        </div>
    )
}

export default ViewProperty