import React from "react";
import "../style/style.css";
import styled from "styled-components";
import img1 from "../images/img20.jpg";
import img2 from "../images/img21.jpg";
import img3 from "../images/img22.avif";
import img4 from "../images/img22.webp";
import img5 from "../images/play-button.svg";

export default function First() {
  // @media screen and (min-device: 768px)
  // and (max-device: 1024px) and (orientation: portrait){

  // }

  const Container = styled.div`
    height: 80vh;
    width: 100%;
    background-color: black;
    @media (max-width: 600px) and (orientation: portrait) {
      display: none;
    }
    @media (min-width: 601px)  and (orientation: portrait) {
      display: none;
    }
   
  `;
  const Top = styled.div`
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const A1 = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;
  const Image = styled.img`
    height: 40vh;
    width: 30vh;
    padding: 10px;
    object-fit: cover;
  `;

  const Bottom = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: flex-start;

    position: absolute;
    margin-top: -6%;
  `;

  const A2 = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
  `;

  const B = styled.div`
    height: 25vh;
    width: 75%;
    ${
      "" /* position: absolute;
    margin-top: -5%; */
    }
  `;

  const B1 = styled.div`
    height: 32vh;
  `;
  const Text1 = styled.p``;

  const B11 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-start;
    height: 50%;
    width: 60%;
  `;

  const B12 = styled.div``;

  const B111 = styled.div`
    height: 100%;
    width: 41%;
  `;

  const B1111 = styled.div`
    height: 10vh;
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #72775b;
  `;

  const Text3 = styled.p`
    color: #d9d4d4;
    font-family: Playfair Display;
    font-size: 40px;
  `;

  const Text4 = styled.p`
    color: #d9d4d4;
    font-family: Playfair Display;
    font-size: 10px;
  `;

  const Image2 = styled.img`
    height: 5vh;
    width: 5vh;
  `;

  const Text5 = styled.p`
    margin: 0;
    color: #d9d4d4;
    font-family: Playfair Display;
    font-size: 40px;
  `;
  const TopA1 = styled.div`
    display: none;
  `;

  const TopA11 = styled.div`
    display: none;
  `;
  const TopA12 = styled.div`
    display: none;
  `;

  const Image3 = styled.img``;

  const Text8 = styled.p`
    font-size: 12px;
    color: #d9d4d4;
  `;
  const Image8 = styled.img`
    height: 6vh;
    width: 6vh;
  `;

  const Bz = styled.div`
    height: 100%;
    width: 65%;
    display: flex;
    flex-direction: column;
  `;
  const Bz1 = styled.div`
    height: 50%;
    width: 100%;
  `;
  const Bz2 = styled.div`
    height: 50%;
    width: 100%;
    margin-top: -4%;
  `;
  const Bz11 = styled.div`
    height: 70%;
    width: 100%;

    display: flex;
    flex-direction: row;
  `;
  const Bz1a = styled.div`
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const Bz1b = styled.div`
    height: 100%;
    width: 55%;
    display: flex;
    flex-direction: row;
    background-color: #72775b;
    align-items: center;
    justify-content: space-between;
  `;

  const Text22 = styled.p`
    color: rgb(217, 212, 212);
    font-family: "Playfair Display";
    font-size: 30px;
    margin: 0;
  `;
  const Text2 = styled.p`
    color: #d9d4d4;
    font-family: Playfair Display;
    font-size: 20px;
  `;

  const Bz22 = styled.div`
    height: 100%;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  `;
  const Text222 = styled.p`
    color: #d9d4d4;
    font-family: Playfair Display;
    font-size: 20px;
    margin: 0;
  `;
  // MEDIA QUERY

  const Container2 = styled.div`
    display: none;
    @media (max-width: 600px) and (orientation: portrait) {
      display: block;
      height: 80vh;
      width: 100%;
      background-color: black;
    }
    @media (min-width: 601px)  and (orientation: portrait) {
      display: none;
    }
   
  `;
  const F = styled.div`
    height: 70vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  `;

  const F1 = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const F11 = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  `;

  const F2 = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const F22 = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  `;
  const Imagef1 = styled.img`
    height: 33vh;
    width: 24vh;
    padding: 10px;
    object-fit: cover;
  `;

  const Fb = styled.div`
    height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const Fb1 = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #72775b;
  `;

  const Fb11 = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  `;

  const Textf = styled.p`
    font-size: 12px;
    color: white;
  `;
  const Imagef = styled.img`
    height: 7vh;
    width: 7vh;
  `;

  // SECOND MEDIA QUERY MIN WIDTH 601
  const Container3 = styled.div`
    display: none;
    @media (min-width: 601px)  and (orientation: portrait) {
      display: block;
      height: 80vh;
      width: 100%;
      background-color: black;
    }
    
  `;
  const A111 = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  `;
  const Bottom1 = styled.div`
    height: 50%;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
  `;
  const Bottom2 = styled.div`
    background-color: #72775B;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
  `;

const Textbtn2 = styled.p`
color: rgb(217, 212, 212);
    font-family: "Playfair Display";
    font-size: 25px;
`
const Textbtn4 = styled.p`
color: rgb(217, 212, 212);
    font-family: "Playfair Display";
    font-size: 15px;
`
const Imagebtn2 = styled.img`
height: 7vh;
    width: 7vh;
`



  return (
    <>
      <Container>
        <Top>
          <A1>
            <Image src={img1} alt=""></Image>
            <Image src={img2} alt=""></Image>
            <Image src={img3} alt=""></Image>
            <Image src={img4} alt=""></Image>
          </A1>
          <TopA1>
            <TopA11>
              <Image3 src={img1} alt=""></Image3>
              <Image3 src={img2} alt=""></Image3>
            </TopA11>
            <TopA12>
              <Image3 src={img3} alt=""></Image3>
              <Image3 src={img4} alt=""></Image3>
            </TopA12>
          </TopA1>
        </Top>
        <Bottom>
          <Bz>
            <Bz1>
              <Bz11>
                <Bz1a>
                  {" "}
                  <Text2>We Bring</Text2>
                </Bz1a>
                <Bz1b>
                  <Text2>The Good</Text2>
                  <Text4>30S VIDEO</Text4>
                  <Image2 src={img5} alt=""></Image2>
                </Bz1b>
              </Bz11>
            </Bz1>
            <Bz2>
              <Bz22>
                <Text222>Pillows to Life</Text222>
              </Bz22>
            </Bz2>
          </Bz>
          {/* <B>
            <B1>
              <B11>
                <B111>
                  <Text2>We Bring</Text2>
                </B111>
                <B1111>
                  <Text3>The Good</Text3>
                  <Text4>30S VIDEO</Text4>
                  <Image2 src={img5} alt=""></Image2>
                </B1111>
              </B11>
              <B12>
                <Text5>Pillows to Life</Text5>
              </B12>
            </B1>
          </B> */}
        </Bottom>
      </Container>
      {/* MEDIA QUERY */}
      <Container2>
        <F>
          <F1>
            <F11>
              <Imagef1 src={img1} alt></Imagef1>
              <Imagef1 src={img2} alt></Imagef1>
            </F11>
          </F1>
          <F2>
            <F22>
              <Imagef1 src={img3} alt></Imagef1>
              <Imagef1 src={img4} alt></Imagef1>
            </F22>
          </F2>
        </F>
        <Fb>
          <Fb1>
            <Fb11>
              <Textf>30S VIDEOS</Textf>
              <Imagef src={img5} alt=""></Imagef>
            </Fb11>
          </Fb1>
        </Fb>
      </Container2>

      <Container3>
        <Top>
          <A111>
            <Image src={img1} alt=""></Image>
            <Image src={img2} alt=""></Image>
            <Image src={img3} alt=""></Image>
            <Image src={img4} alt=""></Image>
          </A111>
        </Top>
        <Bottom>
          <Bottom1>
            <Bottom2>
            <Textbtn2>The Good</Textbtn2>
                  <Textbtn4>30S VIDEO</Textbtn4>
                  <Imagebtn2 src={img5} alt=""></Imagebtn2>
            </Bottom2>
          </Bottom1>
        </Bottom>
      </Container3>
     
    </>
  );
}
