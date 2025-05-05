import React, {useEffect, useState} from 'react'
import axios from 'axios'

const list = () => {

let [allSeeker, setAllSeeker] = useState([]);
useEffect(()=>{
  axios.get("http://localhost:3000/api/v1/seeker")
  .then(response=>{
    setAllSeeker(response.data)
  })
},[])

  return (
    <div className="container">
    <div className="page-inner">
      <h3> Seekers List</h3>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
      </table>
      </div>
      </div>
  )
}

export default list