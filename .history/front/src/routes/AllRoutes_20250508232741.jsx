import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
    Home,
SeekerLogin,
SeekerSignup,
OwnerLogin,
OwnerSignup,
Details,
SeekerLogout
} from '../pages'

const AllRoutes = () => {
    return(
        <>
        <Routes>
            <Route path='' element= { <Home/>}/>
            <Route path='details' element={<Details/>}/>
            <Route path='seeker/login' element={<SeekerLogin/>}/>
            <Route path='seeker/logout' element={<SeekerLogout/>}/>
            <Route path='seeker/Signup' element={<SeekerSignup/>}/>

            <Route path='owner/Login' element={<OwnerLogin/>}/>
            <Route path='owner/Signup' element={<OwnerSignup/>}/>
        </Routes>

     </>

    )
}
export default AllRoutes 