import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import OwnerList from '../pages/owner/list'
import OwnerAdd from '../pages/owner/add'

const AllRoutes = () => {
    return(
        <>
        <Routes>
        <Route path='' element={<Dashboard/>} />
        <Route path='' element={<Dashboard/>} />

        </Routes>
        </>
    )
}

export default AllRoutes;