import React, { useEffect } from 'react'
import Style from './about.module.css'
export default function About() {
  useEffect(() => {
      document.title="About"
      }, [])
  return <>
  <div style={{paddingBlock:`140px`, marginTop:`86px`}}  className={`${Style.aboutbg}`}>
  <div className='container'>
  <div className='row text-center text-white mx-auto py-5' >
    <h1 className='text-uppercase '>
      About Component
      </h1>
      <span className={`${Style.staricon} d-inline-block my-2`} >
            <i className='fa-solid fa-star'></i>
        </span>
        <div style={{paddingInline:`56px`}} className="row mx-auto">
        <div className="col-sm-6">
        <p className='text-start'>
          Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
        </div>
        <div className="col-sm-6">
        <p className='text-start'>
          Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
        </div>
        </div>
  </div>
  </div>
  </div>
    </>

}
