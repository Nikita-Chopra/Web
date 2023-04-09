import React from 'react'
import "../style/style.css"

import img1 from "../images/icon30.jpg"

export default function Header() {
  return (
    <>
      <div className='header'>
      <div className='header-a'>
        <p className='header-txt1'>Pilled</p>
      </div>
      <div className='header-b'>
        <ul className='header-ul'>
          <li className='header-li'>HOME</li>
          <li className='header-li'>ABOUT </li>
          <li className='header-li'>SERVICES</li>
          <li className='header-li'>CONTACT US</li>
        </ul>
      </div>
      <div className='header-c'>
        <button className='header-btn'>Free Quote</button>
      </div>
      </div>
      <div className='header-a'>
      <div className='header-aa'>
        <p className='header-txt1'>Pilled</p>
        <img className='img-11' src={img1} alt=""></img>
      </div>
      </div>
      {/* <NavBar/> */}
    </>
  )
}
