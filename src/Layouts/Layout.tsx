import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <>
       <div id="layout-wrapper">
            <Header />
            <Sidebar/>
            <Outlet />
       </div>
       <Footer />
    </>
  )
}

export default Layout