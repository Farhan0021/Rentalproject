import React from 'react'

const Sidebar =() => {
    return (
        <div className="sidebar" data-background-color="dark">
     
      <div className="sidebar-logo">
        <div className="logo-header" data-background-color="dark">
          <a href="index.html" className="logo">
            <img
              src="assets/img/kaiadmin/logo_light.svg"
              alt="navbar brand"
              className="navbar-brand"
              height="20"
            />
          </a>
          <div className="nav-toggle">
            <button className="btn btn-toggle toggle-sidebar">
              <i className="gg-menu-right"></i>
            </button>
            <button className="btn btn-toggle sidenav-toggler">
              <i className="gg-menu-left"></i>
            </button>
          </div>
          <button className="topbar-toggler more">
            <i className="gg-more-vertical-alt"></i>
          </button>
        </div>
      </div>

      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-secondary">

         

            <li className="nav-section">

              <span className="sidebar-mini-icon">
                <i className="fa fa-ellipsis-h"></i>
              </span>
            </li>


            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#base">
                <i className="fas fa-layer-group"></i>
                <p>Owners</p>
                <span className="caret"></span>
              </a>

              <div className="collapse" id="base">
                <ul className="nav nav-collapse">
                  <li>
                    <a href="components/avatars.html">
                      <span className="sub-item">List</span>
                    </a>
                  </li>

                  <li>
                    <a href="components/avatars.html">
                      <span className="sub-item">Avatars</span>
                    </a>
                  </li>

                </ul>
              </div>
            </li>

         
           
          </ul>
        </div>
      </div>
    </div>

    )
}

export default Sidebar