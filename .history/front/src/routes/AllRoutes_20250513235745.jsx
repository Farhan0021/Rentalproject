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
import SeekerProtactedRoutes from './SeekerProtactedRoutes'
import OwnerProtactedRoutes from './OwnerProtactedRoutes'
import MyAccount from '../pages/owner/MyAccount'
import AddNew from '../pages/owner/AddNew'
const AllRoutes = () => {
    return(
        <>
        <Routes>
            <Route path='' element= { <Home/>}/>
            <Route path='details' element={<Details/>}/>
            <Route path='seeker/login' element={<SeekerLogin/>}/>
            <Route path='' element={<SeekerProtactedRoutes/>}>

            <Route path='seeker/my-profile' element={<Myprofile/>}/>
            <Route path='seeker/logout' element={<SeekerLogout/>}/>

            </Route>

            <Route path='seeker/Signup' element={<SeekerSignup/>}/>

            <Route path='owner/Login' element={<OwnerLogin/>}/>
            <Route path='owner/Signup' element={<OwnerSignup/>}/>

            <Route path='' element={<OwnerProtactedRoutes/>}>

            <Route path='owner/add-new-property' element={<AddNew/>}/>
            
            <Route path='owner/my-account' element={<MyAccount/>}/>
            <Route path='owner/logout' element={<OwnerLogout/>}/>
            </Route>
            

        </Routes>

     </>

    )
}
export default AllRoutes 