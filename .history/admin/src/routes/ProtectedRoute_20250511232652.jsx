import React from 'react'
import { Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  return (
    <div style={{marginTop : "200px"}}>
        <h1>WELCOME</h1>
        <Outlet />
    </div>
  )
}

export default ProtectedRoute