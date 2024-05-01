import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/HeaderComp/Header'
import Footer from './components/FooterComp/Footer'
import ScrollToTop from './components/ScrollToTop'
function Layout() {
  

  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout