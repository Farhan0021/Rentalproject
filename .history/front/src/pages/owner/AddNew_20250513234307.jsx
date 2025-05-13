import React from 'react'

const AddNew = () => {
  return (
     <div className='container my-4' style={{minHeight : "700px", paddingTop : "120px" }}>
       <div className="row">
         <OwnerSideBar/>
         <div className="col-md-9">
           <h4>My Personal Information</h4>
         </div>
       </div>
     </div>
  ) 
}

export default AddNew