import React, { useEffect } from 'react'
import homeSvg from '../../assets/imgi_1_avataaars.svg'
import Style from './home.module.css'
export default function Home() {
    useEffect(() => {
    document.title="Home"
    }, [])
  return <>
    <div style={{paddingBlock:`68px`,marginTop:`56px`}} className={`row text-center text-white ${Style.homebg}`} >
      <div className="d-flex justify-content-center flex-column align-items-center mx-auto py-4">
      <img className='mb-4' style={{width:'250px'}} src={homeSvg} alt="" />
      <h1 className='text-uppercase my-2'>Start Framework</h1>
      <span className={`${Style.staricon} d-inline-block my-2`} >
      <i className='fa-solid fa-star'></i>
      </span>
      <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  </>
  
}
