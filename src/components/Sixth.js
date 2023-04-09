import React from 'react'
import "../style/style.css"
import img1 from "../images/arrow.jpg"

export default function Sixth() {
  return (
    <>
      <div className='sixth-main'>
        <div className='sixth-card'>
            <p className='sixth-txt1'>You Deserve A Pillows Today.</p>
            <button className='sixth-btn'>
                <p className='sixth-txt2'>Get Started Now</p>
                <img src={img1} className='sixth-img1' alt=""></img>
            </button>
        </div>
      </div>

      <div className='six-main'>
        <div className='sixa'>
          <div className='sixaa'>
            <p className='six-txta'>
            You Deserve A <br/>Pillows Today.
            </p>
          </div>
        </div>
        <div className='sixb'>
          <div className='sixbb'>
          <button className='sixth-btna'>
                <p className='sixth-txt2a'>Get Started Now</p>
                <img src={img1} className='sixth-img1a' alt=""></img>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
