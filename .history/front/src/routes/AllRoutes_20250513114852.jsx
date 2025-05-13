import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
    Home,
SeekerLogin,
SeekerSignup,
OwnerLogin,
OwnerSignup,
Details,
SeekerLogout,
OwnerLogout
} from '../pages'
import Myprofile from '../pages/seekers/MyProfile'

const AllRoutes = () => {
    return(
        <>
        <Routes>
            <Route path='' element= { <Home/>}/>
            <Route path='details' element={<Details/>}/>
            <Route path='seeker/login' element={<SeekerLogin/>}/>
            <Route path='seeker/my-profile' element={<Myprofile/>}/>
            <Route path='seeker/logout' element={<SeekerLogout/>}/>
            <Route path='seeker/Signup' element={<SeekerSignup/>}/>

            <Route path='owner/Login' element={<OwnerLogin/>}/>
            <Route path='owner/Signup' element={<OwnerSignup/>}/>
            <Route path='owner/logout' element={<OwnerLogout/>}/>
        </Routes>

     </>

    )
}
export default AllRoutes 