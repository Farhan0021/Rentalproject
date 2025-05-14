import React, { useEffect} from 'react'
import OwnerSideBar from '../../components/OwnerSideBar'
import axios from 'axios'
import { useState } from 'react'

const MyProperty =() => {
    let [allProp, setAllProp] = useState([]);

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/property/owner`,{
            headers : {Authorization : localStorage.getItem("owner-access-token")}
        }).then(response=>{
            setAllProp(response.data);
        })
    },[])


    return (
         <div className='container my-4' style={{minHeight : "700px", paddingTop : "120px" }}>
      <div className="row">

        <OwnerSideBar/>
        
        <div className="col-md-9">
          <h4>My Properties</h4>
          <table className='table table-bordered table-hover table-secondary'>
            <tbody>
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
    )
}

export default MyProperty