import React from 'react'
import style from './footer.module.css'
export default function Footer() {
  return <>
  <div style={{paddingBlock:`86px`}} className={`row ${style.footerbg} text-white text-center g-4`}>
    <div className="col-sm-4">
      <h3 className='text-uppercase'>Location</h3>
      <p>2215 John Daniel Drive</p>
      <p>Clark, MO 65243</p>
    </div>
    <div className="col-sm-4">
      <h3 className='text-uppercase'>Around The Web</h3>
      <ul className='list-unstyled d-flex justify-content-center align-items-center gap-2'>
        <li className={`border-1 border rounded-circle d-flex justify-content-center align-items-center ${style.icon}`}>
      <i className="fa-brands fa-facebook text-white"></i>
        </li>
        <li className={`border-1 border rounded-circle d-flex justify-content-center align-items-center ${style.icon}`}>
      <i className="fa-brands fa-twitter text-white"></i>
        </li>
        <li className={`border-1 border rounded-circle d-flex justify-content-center align-items-center ${style.icon}`}>
      <i className="fa-brands fa-linkedin-in text-white"></i>
        </li>
        <li className={`border-1 border rounded-circle d-flex justify-content-center align-items-center ${style.icon}`}>
      <i className="fa-solid fa-globe text-white"></i>
        </li>
      </ul>
    </div>
    <div className="col-sm-4">
      <h3 className='text-uppercase'>About Freelancer</h3>
      <p className='fs-6 mx-auto w-75'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
    </div>
  </div>
  <div className={`row ${style.footerbg2}`}>
    <p className={`text-white py-4 text-center`}>Copyright © Your Website 2021</p>
  </div>
  </>
}
