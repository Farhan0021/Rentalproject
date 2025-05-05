import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import OwnerList from '../pages/owners/List'
import OwnerAdd from '../pages/owners/Add'
import SeekerAdd from '../pages/seeker/Add'
import SeekerList from '../pages/seeker/List'

const AllRoutes = () => {
    return(
        <>
        <Routes>
        <Route path='' element={<Dashboard/>} />
        <Route path='/owners/list' element={<OwnerList/>} />
        <Route path='/owners/add' element={<OwnerAdd/>} />

        <Route path='/seeker/list' element={<SeekerList/>} />
        <Route path='/seeker/add' element={<SeekerAdd/>} />


        </Routes>
        </>
    )
}

export default AllRoutes;