import React, {useEffect, useState}from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

const list = () => {

  let [allOwner, setAllOwner] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/owner")
    .then(response=>{
      //console.log(response.data);
      setAllOwner(response.data);
    })
  },[])




  return (
    <div className="container">
    <div className="page-inner">
    <h3> Owner  List</h3>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>View Property</th>
          </tr>
        </thead>

        <tbody>
          {
            allOwner.map((item,index)=>{
              return(
                <tr>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                  <td><NavLink to="/view-property" className='btn btn-sm btn-info '>View Property</NavLink></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>
      </div>
  )
}

export default list