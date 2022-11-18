import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        
                        <div className="navbar-brand-box">
                            <a className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src="assets/images/logo.svg" alt="" height="22"/>
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo-dark.png" alt="" height="17"/>
                                </span>
                            </a>

                            <a href="index.html" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="assets/images/logo-light.svg" alt="" height="22"/>
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo-light.png" alt="" height="19"/>
                                </span>
                            </a>
                        </div>

                        <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                            <i className="fa fa-fw fa-bars"></i>
                        </button>

                        
                        <form className="app-search d-none d-lg-block">
                            <div className="position-relative">
                                <input type="text" className="form-control" placeholder="Search..."/>
                                <span className="bx bx-search-alt"></span>
                            </div>
                        </form>
                    </div>

                    <div className="d-flex">

                        <div className="dropdown d-inline-block d-lg-none ms-2">
                            <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="mdi mdi-magnify"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                aria-labelledby="page-header-search-dropdown">
        
                                <form className="p-3">
                                    <div className="form-group m-0">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg"
                                    alt="Header Avatar"/>
                                <span className="d-none d-xl-inline-block ms-1" key="t-suniket">Viewer</span>
                                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item text-danger" href="#"><i ></i> <span key="t-logout">My Profile</span></a>
                                <a className="dropdown-item text-danger" href="#"><i></i> <span key="t-logout">Change Password</span></a>
                                <Link className="dropdown-item text-danger" to="#" ><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span key="t-logout">Logout</span></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

  )
}

export default Header