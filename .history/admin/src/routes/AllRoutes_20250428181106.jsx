import React from 'react'
import {Routes, Route} from 'react-router-dom'

const AllRoutes = () => {
    return(
        <>
        <Routes>
        <Route path='' element={<Dashboard/>} />
        </Routes>
        </>
    )
}

export default AllRoutes;