import React from'react'
import {NavLink} from 'react-router-dom'

const HeaderNew = () => {
    return (

    <div className="container fixed-top" style={{top:"20px" }}>
     <nav className='navbar navbar-expand-sm navbar-dark bg-green p-4' style={{borderRadius : "20px"}}>
          <NavLink className="navbar-brand" style={{fontSize : "28px"}} to='/'>STUDENT-HIVE</NavLink>
              <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#menu"
>
                   <span className='navbar-toggler-icon'></span>
             </button>
             <div className='collapse navbar-collapse justify-content-end' id='menu'>
                <ul className='nav navbar-nav'>

                    <li className='nav-item '>
                        <NavLink className="nav-link px-4 " to="/">Home</NavLink>
                    </li>
                    <li className='nav-item dropdown'>
                        <NavLink className="nav-link px-4 dropdown-toggle" to="/">Home</NavLink>
                        <div className="dropdown-menu" >
                            <NavLink className="dropdown-item" to="">Login</NavLink>
                        </div>

                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link px-4" to="/">Home</NavLink>
                    </li>

                </ul>
             </div>

             </nav>
       </div>
    )
}

export default HeaderNew