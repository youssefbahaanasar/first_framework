import React from 'react'
import navStyle from './navbar.module.css'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return <div className={` ${navStyle.navbg} fixed-top`}>
  <nav className={`navbar navbar-expand-lg `}>
  <div className="container py-3">
    <NavLink className="navbar-brand text-white text-uppercase fw-bold fs-3" to={'/'}>Start Framework</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
      <ul className="navbar-nav gap-2">
        <li className={`nav-item ${navStyle.wFit}`}>
          <NavLink className="nav-link rounded-3 text-white  text-uppercase fw-semibold fs-6 px-2 " aria-current="page" to={'/about'}>About</NavLink>
        </li>
        <li className={`nav-item ${navStyle.wFit}`}>
          <NavLink className="nav-link rounded-3 text-white  text-uppercase fw-semibold fs-6 px-2" to={'/portfolio'}>Portfolio</NavLink>
        </li>
        <li className={`nav-item ${navStyle.wFit}`}>
          <NavLink className="nav-link rounded-3 text-white  text-uppercase fw-semibold fs-6 px-2" to={'/contact'}>Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
  
}
