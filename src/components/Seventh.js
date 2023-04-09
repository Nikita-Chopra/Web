import React from "react";
import "../style/style.css";
import img1 from "../images/icon10.png";
import img2 from "../images/icon11.png";
import img3 from "../images/icon12.png";
import img4 from "../images/Facebook.png";
import img5 from "../images/Instagram.png";
import img6 from "../images/L.png";
import img7 from "../images/Twitter.png";

export default function Seventh() {
  return (
    <>
      <div className="seven-main">
        <div className="seven-main-a">
          <div className="seven-card-a">
            <p className="seven-txt1">Pilled</p>
            <p className="seven-txt2">
              In the summer of 2007 a man named Joe Safford decided he wanted to
              wear his new jeans national.
            </p>
            <p className="seven-txt3">Copyright © 2021 pilled.</p>
          </div>
          <div className="seven-card-b">
            <div className="aa">
              <p className="seven-txt1">Get In Touch</p>
            </div>
            <div className="bb">
              <div className="b1">
                <img src={img1} className="seven-img" alt=""></img>
                <p className="seven-txt4">8819 Ohio St. South Gate, Ca 90280</p>
              </div>
              <div className="b1">
                <img src={img2} className="seven-img" alt=""></img>
                <p className="seven-txt4">email@lavino.com</p>
              </div>
              <div className="b1">
                <img src={img3} className="seven-img" alt=""></img>
                <p className="seven-txt4">(205) 555-0100</p>
              </div>
            </div>
          </div>
          <div className="seven-card-c">
            <div className="c1">
              <img src={img4} className="img5" alt=""></img>
              <img src={img5} className="img5" alt=""></img>
              <img src={img6} className="img5" alt=""></img>
              <img src={img7} className="img5" alt=""></img>
            </div>
            <div className="c2">
              <p className="txt6">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
          <div className="seven-card-d">
            <div className="ddd">
              <p className="seven-txt1">Subscribe NewsSletter</p>
              <p className="txt7">Your Email</p>
              <input
                type="text"
                placeholder="Enter your Email"
                className="txt8"
              ></input>
              <button className="btn2">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
     <div className="sevena">
      <div className="seven-a">
        <div className="seven-aa">
          <p className="seven-txta1">Pilled.</p>
        </div>
      </div>
      <div className="seven-b">
        <div className="seven-bb">
          <p className="seven-txta2">In the summer of 2007 a man named Joe Safford 
          decided he wanted to wear his new jeans national.</p>
        </div>
      </div>
      <div className="seven-a">
        <div className="seven-aa">
          <p className="seven-txta1">Get In Touch</p>
        </div>
      </div>
      <div className="seven-c">
        <div className="seven-cc">
          <div className="cc">
          <img src={img1} className="seven-img" alt=""></img>
                <p className="seven-txta4">8819 Ohio St. South Gate, Ca 90280</p>
          </div>
          <div className="cc">
          <img src={img1} className="seven-img" alt=""></img>
                <p className="seven-txta4">8819 Ohio St. South Gate, Ca 90280</p>
          </div>
          <div className="cc">
          <img src={img1} className="seven-img" alt=""></img>
                <p className="seven-txta4">8819 Ohio St. South Gate, Ca 90280</p>
          </div>
        </div>
      </div>
      <div className="seven-d">
        <div className="seven-dd">
        <img src={img4} className="img5a" alt=""></img>
              <img src={img5} className="img5a" alt=""></img>
              <img src={img6} className="img5a" alt=""></img>
              <img src={img7} className="img5a" alt=""></img>
        </div>
      </div>

<div className="seven-e">
  <div className="seven-ee">
    <p className="seven-etxt">Lorem ipsum dolor sit amet, consec tetur 
    adipiscing elit, sed do eiusmod.</p>
  </div>
</div>

<div className="seven-a">
        <div className="seven-aa">
          <p className="seven-txta1">Subscribe Newsletter</p>
        </div>
</div>

<div className="seven-f">
  <div className="seven-ff">
    <p className="seven-txtf">Your email</p>
  </div>
</div>

<div className="seven-g">
  <div className="seven-gg">
    <input type="text" placeholder="Enter Your Mail" className="seven-txtff"></input>
  </div>
</div>
<div className="seven-g">
  <div className="seven-gg">
    <button className="seven-btna">Subscribe</button>
  </div>
</div>
<div className="seven-h">
  <div className="seven-hh">
    <p className="seven-txth">Copyright © 2021 pilled.</p>
  </div>
</div>
     </div>
    </>
  );
}
