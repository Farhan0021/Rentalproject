import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import OwnerList from '../pages/owner/list'
import OwnerAdd from '../pages/owner/add'
import SeekerAdd from '../pages/seeker/Add'
import SeekerList from '../pages/seeker/List'
import Login from '../pages/Login'

const AllRoutes = () => {
    return(
        <>
        <Routes>
        <Route path='' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/owners/list' element={<OwnerList/>} />
        <Route path='/owners/add' element={<OwnerAdd/>} />

        <Route path='/seeker/list' element={<SeekerList/>} />
        <Route path='/seeker/add' element={<SeekerAdd/>} />


        </Routes>
        </>
    )
}

export default AllRoutes;