import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import OwnerList from '../pages/owner/list'
import OwnerAdd from '../pages/owner/Add'

const AllRoutes = () => {
    return(
        <>
        <Routes>
        <Route path='' element={<Dashboard/>} />
        <Route path='/owner/list' element={<OwnerList/>} />
        <Route path='/owner/add' element={<OwnerAdd/>} />

        <Route path='/seeker/list' element={<SeekerList/>} />
        <Route path='/seeker/add' element={<SeekerAdd/>} />


        </Routes>
        </>
    )
}

export default AllRoutes;