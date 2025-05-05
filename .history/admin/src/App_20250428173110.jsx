import React from 'react'

const App = () =>  {
  return (
    <div className="wrapper">
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
                <p>Base</p>
                <span className="caret"></span>
              </a>

              <div className="collapse" id="base">
                <ul className="nav nav-collapse">
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
    
    <div className="main-panel">
      

      <div className="container">
        <div className="page-inner">
          <div
            className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4"
          >
            <div>
              <h3 className="fw-bold mb-3">Dashboard</h3>
              <h6 className="op-7 mb-2">Free Bootstrap 5 Admin Dashboard</h6>
            </div>
            <div className="ms-md-auto py-2 py-md-0">
              <a href="#" className="btn btn-label-info btn-round me-2">Manage</a>
              <a href="#" className="btn btn-primary btn-round">Add Customer</a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="card card-stats card-round">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-icon">
                      <div
                        className="icon-big text-center icon-primary bubble-shadow-small"
                      >
                        <i className="fas fa-users"></i>
                      </div>
                    </div>
                    <div className="col col-stats ms-3 ms-sm-0">
                      <div className="numbers">
                        <p className="card-category">Visitors</p>
                        <h4 className="card-title">1,294</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card card-stats card-round">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-icon">
                      <div
                        className="icon-big text-center icon-info bubble-shadow-small"
                      >
                        <i className="fas fa-user-check"></i>
                      </div>
                    </div>
                    <div className="col col-stats ms-3 ms-sm-0">
                      <div className="numbers">
                        <p className="card-category">Subscribers</p>
                        <h4 className="card-title">1303</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card card-stats card-round">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-icon">
                      <div
                        className="icon-big text-center icon-success bubble-shadow-small"
                      >
                        <i className="fas fa-luggage-cart"></i>
                      </div>
                    </div>
                    <div className="col col-stats ms-3 ms-sm-0">
                      <div className="numbers">
                        <p className="card-category">Sales</p>
                        <h4 className="card-title">$ 1,345</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card card-stats card-round">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-icon">
                      <div
                        className="icon-big text-center icon-secondary bubble-shadow-small"
                      >
                        <i className="far fa-check-circle"></i>
                      </div>
                    </div>
                    <div className="col col-stats ms-3 ms-sm-0">
                      <div className="numbers">
                        <p className="card-category">Order</p>
                        <h4 className="card-title">576</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          

        </div>
      </div>

      <footer className="footer">
        <div className="container-fluid d-flex justify-content-between">
          <nav className="pull-left">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="http://www.themekita.com">
                  ThemeKita
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> Help </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> Licenses </a>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            2024, made with <i className="fa fa-heart heart text-danger"></i> by
            <a href="http://www.themekita.com">ThemeKita</a>
          </div>
          <div>
            Distributed by
            <a target="_blank" href="https://themewagon.com/">ThemeWagon</a>.
          </div>
        </div>
      </footer>
    </div>

    
    <div className="custom-template">
      <div className="title">Settings</div>
      <div className="custom-content">
        <div className="switcher">
          <div className="switch-block">
            <h4>Logo Header</h4>
            <div className="btnSwitch">
              <button
                type="button"
                className="selected changeLogoHeaderColor"
                data-color="dark"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="blue"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="purple"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="light-blue"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="green"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="orange"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="red"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="white"
              ></button>
              <br />
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="dark2"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="blue2"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="purple2"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="light-blue2"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="green2"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="orange2"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="red2"
              ></button>
            </div>
          </div>
          <div className="switch-block">
            <h4>Navbar Header</h4>
            <div className="btnSwitch">
              <button
                type="button"
                className="changeTopBarColor"
                data-color="dark"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="blue"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="purple"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="light-blue"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="green"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="orange"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="red"
              ></button>
              <button
                type="button"
                className="selected changeTopBarColor"
                data-color="white"
              ></button>
              <br />
              <button
                type="button"
                className="changeTopBarColor"
                data-color="dark2"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="blue2"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="purple2"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="light-blue2"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="green2"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="orange2"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="red2"
              ></button>
            </div>
          </div>
          <div className="switch-block">
            <h4>Sidebar</h4>
            <div className="btnSwitch">
              <button
                type="button"
                className="changeSideBarColor"
                data-color="white"
              ></button>
              <button
                type="button"
                className="selected changeSideBarColor"
                data-color="dark"
              ></button>
              <button
                type="button"
                className="changeSideBarColor"
                data-color="dark2"
              ></button>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-toggle">
        <i className="icon-settings"></i>
      </div>
    </div>
    
  </div>
  )
}

export default App