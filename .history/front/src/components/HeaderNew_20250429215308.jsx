import React from'react'
import {NavLink} from 'react-router-dom'

const HeaderNew = () => {
    return (

    <div className="container fixed-top" style={{top:"20px" }}>
     <nav className='navbar navbar-expand-sm navbar-dark bg-green p-4' style={{borderRadius : "20px"}}>
          <NavLink className="navbar-brand"to='/'>STUDENT-HIVE</NavLink>
              <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#menu"
>
                   <span className='navbar-toggler-icon'></span>
             </button>
             <div className='collapse navbar-collapse' id='menu'>
                <ul className='nav navbar-nav'>

                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>

                </ul>
             </div>

             </nav>
       </div>
    )
}

export default HeaderNew