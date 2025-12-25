import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Navbar/Navbar'
import Footer from '../Pages/Footer/Footer'

export default function Layout() {
  return <>
  <Navbar/>
  <Outlet></Outlet>
  <Footer/>
  </>
  
}
