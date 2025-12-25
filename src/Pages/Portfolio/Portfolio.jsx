import React, { useEffect, useState } from 'react'
import Style from './portfolio.module.css'
import image1 from '../../assets/imgi_1_poert1.png'
import image2 from '../../assets/imgi_2_port2.png'
import image3 from '../../assets/imgi_3_port3.png'
export default function Portfolio() {
  const [imgSrc,setImgSrc]=useState('');
  const arr=[
    {img:image1},
    {img:image2},
    {img:image3},
  ];
  useEffect(() => {
  document.title="Portfolio"
  }, [])
  
const arrCopy=[...arr,...arr];
  return <>
      {imgSrc&&<div onClick={()=>{ setImgSrc('')}} className="position-fixed start-0 top-0 bottom-0 end-0 z-3 w-100 d-flex justify-content-center align-items-center bg-primary bg-opacity-25">
        <img onClick={(e)=>e.stopPropagation()} src={imgSrc} style={{width:`40%`}} alt="" />
      </div>}
    <div  style={{paddingBlock:`68px`,marginTop:`56px`}} className={`row text-center`} >
      <div className="w-50 mx-auto">
      <h1 className='text-uppercase fw-bold'>portfolio component</h1>
      <span className={`${Style.staricon} d-inline-block mt-2`} >
      <i className='fa-solid fa-star'></i>
      </span>
      </div>
      <div style={{width:`90%`}} className="row g-5 mt-0 mx-auto">
        {arrCopy.map((image)=>(
      <div className="col-lg-4 col-sm-12 col-md-6">
      <div onClick={(e)=>{e.stopPropagation(); setImgSrc(image.img);}} className={`position-relative ${Style.dohov} rounded-3 overflow-hidden`}>
        <img src={image.img} className={`w-100 rounded-3 `} alt="" />
        <i className={`fa-solid fa-plus text-white ${Style.hov} d-flex justify-content-center align-items-center`}></i>
      </div>
      </div>
      )
        )}
      </div>
    </div>
  </>
}
