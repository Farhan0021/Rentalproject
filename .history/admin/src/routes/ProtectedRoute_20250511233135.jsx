import React from 'react'
import { Outlet } from 'react-router-dom'
import {Sidebar} from '../components/Sidebar'
import {Header} from '../components/Header'
const ProtectedRoute = () => {
  return (


     <div className="wrapper">
    
    <Sidebar />
    <div className="main-panel">
      <Header />
      <AllRoutes/>
    </div>
  </div>
        <Outlet />
  )
}

export default ProtectedRoute