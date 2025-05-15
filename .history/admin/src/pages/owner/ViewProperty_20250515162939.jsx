import React from 'react' 
import { useParams } from 'react-router-dom'

const ViewProperty = () =>{

    let param = useParams();
    console.log(param.id);

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