import React from "react";
import styled from "styled-components";
import img1 from "../images/logo1.svg";
import img2 from "../images/logo2.svg";
import img3 from "../images/logo3.svg";
import img4 from "../images/logo4.svg";
import img5 from "../images/logo5.svg";
import img6 from "../images/img26.webp";
import img7 from "../images/check2.png";

export default function Third() {
  const Container = styled.div`
    height: 100vh;
    weight: 100%;
    display: flex;
    flex-direction: column;
    background-color: #E1DDDD;
    @media (max-width: 600px) and (orientation: portrait) {
      display: none;
    }
    @media (min-width: 601px)  and (orientation: portrait) {
      display: none;
    }
  
  `;

  const Top = styled.div`
    height: 15vh;
    weight: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const A1 = styled.div`
    height: 100%;
    width: 70%;
    background-color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  `;

  const Image = styled.img`
    height: 10vh;
    width: 10vh;
  `;

  const Bottom = styled.div`
    height: 85vh;
    weight: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const Middle = styled.div`
    height: 85%;
    width: 85%;
    display: flex;
    flex-direction: row;
  `;

  const Image2 = styled.img`
    width: 400px;
    height: 470px;
    object-fit: cover;
    border-radius: 300px 300px 0px 0px;
  `;

  const Left = styled.div`
    width: 50%;
    height: 100%;
  `;
  const Right = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const A2 = styled.div`
    height: 90%;
    width: 80%;
  `;

  const A21 = styled.div`
    width: 35%;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-between;
  `;
  const Hr = styled.hr`
    border: 2px solid rgb(114, 119, 91);
    height: 1px;
    width: 6vh;
    margin: 0;
  `;

  const Text1 = styled.p`
    font-size: 8px;
    color: #72775b;
  `;

  const A22 = styled.div`
    width: 40%;
  `;

  const Text2 = styled.p`
    font-size: 22px;
    font-family: Playfair Display;
    font-weight: 600;
  `;

  const A23 = styled.div`
    width: 48%;
  `;

  const Text3 = styled.p`
    font-size: 12px;
    font-size: 10px;
    color: #00000099;
  `;
  const A24 = styled.div``;

  const A241 = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 35%;
  `;

  const Image3 = styled.img`
    height: 2vh;
    width: 2vh;
  `;
  const Text4 = styled.p`
    font-size: 10px;
  `;

  // MEDIA QUERY
  const Container2 = styled.div`
    display: none;
    @media (max-width: 600px) and (orientation: portrait) {
      display: block;
      height: 120vh;
      weight: 100%;
      display: flex;
      flex-direction: column;
      background-color: #e1dddd;
    }
    @media (min-width: 601px)  and (orientation: portrait) {
      display: none;
    }
 
  `;

  const Top1 = styled.div`
    height: 20vh;
    weight: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const A11 = styled.div`
    height: 100%;
    width: 65%;
    background-color: black;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `;
  const J1 = styled.div`
    height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const J11 = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: initial;
  `;

  const Text1j = styled.div`
    font-size: 12px;
    color: rgb(114, 119, 91);
    margin-left: 5%;
  `;

  const J2 = styled.div`
    height: 15vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const J22 = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;

  const Text2j = styled.p`
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    margin: 0;
  `;

  const J3 = styled.div`
    height: 15vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const J33 = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const Text3j = styled.p`
    font-size: 20px;
    text-align: center;
    margin: 0;
  `;
  const J4 = styled.div`
    height: 20vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const J44 = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: column;
    
    
  `;


const Image3j = styled.img`
height: 2vh;
    width: 2vh;
`
const Text4j = styled.p`
font-size: 12px;
`

const J5 = styled.div`
 height: 40vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const J55 = styled.div`
 height: 100%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Imagej = styled.img`
border-radius: 300px 300px 0px 0px;
height: 35vh;
width: 30vh;
object-fit: cover;
`

const A241aa = styled.div`
display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 45%;
`


// SECOND MEDIA QUERY MIN WIDTH 601

const Container3 = styled.div`
display: none;
 @media (min-width: 601px) and (orientation: portrait) {
      display: block;
      height: 130vh;
      weight: 100%;
      display: flex;
      flex-direction: column;
      background-color: #e1dddd;
    }
  
`
const Text2jj = styled.p`
font-size: 45px;
    font-weight: 500;
    text-align: center;
    margin: 0px;
`

const Text3jj = styled.p`
font-size: 25px;
    text-align: center;
    margin: 0px;
`

const A24111 = styled.div`
display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 25%;
`

const J515 = styled.div`
height: 50vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
`

const Imagej5 = styled.img`
border-radius: 300px 300px 0px 0px;
    height: 50vh;
    width: 45vh;
    object-fit: cover;
`
const A1111 = styled.div`
height: 100%;
    width: 75%;
    background-color: black;
    display: flex;
    flex-flow: row wrap;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-evenly;
`

const Text1jjj = styled.p`
font-size: 15px;
    color: rgb(114, 119, 91);
    margin-left: 5%;
`
const A224111 = styled.div`
display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 30%;
`
const Text4jj = styled.p`
font-size: 14px;
`

// THIRD MEDIA QUERY MIN WIDTH 1001

// const Container4 = styled.div`
// display: none;
//  @media (min-width: 1001px) and (orientation: portrait) {
// display: block;
// height: 100vh;
//     weight: 100%;
//     display: flex;
//     flex-direction: column;
//     background-color: red;
//  }
// `





  return (
    <>
      <Container>
        <Top>
          <A1>
            <Image src={img1} alt=""></Image>
            <Image src={img2} alt=""></Image>
            <Image src={img3} alt=""></Image>
            <Image src={img4} alt=""></Image>
            <Image src={img5} alt=""></Image>
          </A1>
        </Top>
        <Bottom>
          <Middle>
            <Left>
              <Image2 src={img6} alt=""></Image2>
            </Left>
            <Right>
              <A2>
                <A21>
                  <Hr></Hr>
                  <Text1>Why Should Buy</Text1>
                </A21>
                <A22>
                  <Text2>Pillows As Sure As The Sun Shines.</Text2>
                </A22>
                <A23>
                  <Text3>
                    In the summer of 2007 a man named Joe Safford decided he
                    wanted to wear his new jeans national.
                  </Text3>
                </A23>
                <A24>
                  <A241>
                    <Image3 src={img7} alt=""></Image3>
                    <Text4>Our amazing benefit</Text4>
                  </A241>
                  <A241>
                    <Image3 src={img7} alt=""></Image3>
                    <Text4>Our amazing benefit</Text4>
                  </A241>
                  <A241>
                    <Image3 src={img7} alt=""></Image3>
                    <Text4>Our amazing benefit</Text4>
                  </A241>
                  <A241>
                    <Image3 src={img7} alt=""></Image3>
                    <Text4>Our amazing benefit</Text4>
                  </A241>
                </A24>
              </A2>
            </Right>
          </Middle>
        </Bottom>
      </Container>

      <Container2>
        <Top1>
          <A11>
            <Image src={img1} alt=""></Image>
            <Image src={img2} alt=""></Image>
            <Image src={img3} alt=""></Image>
            <Image src={img4} alt=""></Image>
            <Image src={img5} alt=""></Image>
          </A11>
        </Top1>
        <J1>
          <J11>
            <Hr></Hr>
            <Text1j>Why Should Buy</Text1j>
          </J11>
        </J1>
        <J2>
          <J22>
            <Text2j>
              Pillows As Sure As <br />
              The Sun Shines.
            </Text2j>
          </J22>
        </J2>
        <J3>
          <J33>
            <Text3j>
              In the summer of 2007 a man named Joe Safford decided he wanted to
              wear his new jeans national.
            </Text3j>
          </J33>
        </J3>
        <J4>
          <J44>
            <A241aa>
              <Image3j src={img7} alt=""></Image3j>
              <Text4j>Our amazing benefit</Text4j>
            </A241aa>
            <A241aa>
              <Image3j src={img7} alt=""></Image3j>
              <Text4j>Our amazing benefit</Text4j>
            </A241aa>
            <A241aa>
              <Image3j src={img7} alt=""></Image3j>
              <Text4j>Our amazing benefit</Text4j>
            </A241aa>
            <A241aa>
              <Image3j src={img7} alt=""></Image3j>
              <Text4j>Our amazing benefit</Text4j>
            </A241aa>
          </J44>
        </J4>
        <J5>
          <J55>
<Imagej src={img6} alt=""></Imagej>
          </J55>
        </J5>
      </Container2>
      <Container3>
      <Top1>
          <A1111>
            <Image src={img1} alt=""></Image>
            <Image src={img2} alt=""></Image>
            <Image src={img3} alt=""></Image>
            <Image src={img4} alt=""></Image>
            <Image src={img5} alt=""></Image>
          </A1111>
        </Top1>
        <J1>
          <J11>
            <Hr></Hr>
            <Text1jjj>Why Should Buy</Text1jjj>
          </J11>
        </J1>
        <J2>
          <J22>
            <Text2jj>
              Pillows As Sure As <br />
              The Sun Shines.
            </Text2jj>
          </J22>
        </J2>
        <J3>
          <J33>
            <Text3jj>
              In the summer of 2007 a man named Joe Safford decided he wanted to
              wear his new jeans national.
            </Text3jj>
          </J33>
        </J3>
        <J4>
          <J44>
            <A224111>
              <Image3j src={img7} alt=""></Image3j>
              <Text4jj>Our amazing benefit</Text4jj>
            </A224111>
            <A224111>
              <Image3j src={img7} alt=""></Image3j>
              <Text4jj>Our amazing benefit</Text4jj>
            </A224111>
            <A224111>
              <Image3j src={img7} alt=""></Image3j>
              <Text4jj>Our amazing benefit</Text4jj>
            </A224111>
            <A224111>
              <Image3j src={img7} alt=""></Image3j>
              <Text4jj>Our amazing benefit</Text4jj>
            </A224111>
          </J44>
        </J4>
        <J515>
          <J55>
<Imagej5 src={img6} alt=""></Imagej5>
          </J55>
        </J515>
      </Container3>
     
    </>
  );
}
