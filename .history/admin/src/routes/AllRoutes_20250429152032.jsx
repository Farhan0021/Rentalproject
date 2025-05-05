import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import OwnerList from '../pages/owner/list'
import OwnerAdd from '../pages/owner/Add'
import SeekerAdd from '../pages/seeker/Add'
import SeekerList from '../pages/seeker/List'

const AllRoutes = () => {
    return(
        <>
        <Routes>
        <Route path='' element={<Dashboard/>} />
        <Route path='/ownes/list' element={<OwnerList/>} />
        <Route path='/owner/add' element={<OwnerAdd/>} />

        <Route path='/seeker/list' element={<SeekerList/>} />
        <Route path='/seeker/add' element={<SeekerAdd/>} />


        </Routes>
        </>
    )
}

export default AllRoutes;