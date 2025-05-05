import React from'react'
import {NavLink} from 'react-router-dom'

const HeaderNew = () => {
    return (

     <div className="container">
             <nav className='navbar navbar-expand-sm navbar-dark bg-green'>
            <NavLink className="navbar-brand"to='/'>STUDENT-HIVE</NavLink>

             </nav>
       </div>
    )
}

export default HeaderNew