import React from'react'
import {NavLink} from 'react-router-dom'

const HeaderNew = () => {
    return (

     <div className="container">
             <nav className='navbar navbar-expand-sm navbar-dark bg-green p-4'>
            <NavLink className="navbar-brand"to='/'>STUDENT-HIVE</NavLink>
            <button className='navbar-toggler' data-bs-toggle="collapse" data-bg-target="#menu"
>
    <span className='navbar-toggler-icon'></span>
</button>
             </nav>
       </div>
    )
}

export default HeaderNew