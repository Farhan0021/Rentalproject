import React from 'react'
import {Routes, Route} from 'react-router-dom'

const AllRoutes = () => {
    return(
        <>
        <Routes path='' element={<Dashboard/>} />
        </>
    )
}

export default AllRoutes;