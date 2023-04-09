import React from "react";
import styled from "styled-components";
import img1 from "../images/check2.png";
import img2 from "../images/arrow.jpg";
import img3 from "../images/img25.avif";

export default function Second() {
  const Container = styled.div`
    height: 60vh;
    weight: 100%;
    display: flex;
    flex-direction: row;
    background-color: black;
    @media (max-width: 600px) and (orientation: portrait) {
      display: none;
    }
    @media (min-width: 601px)  and (orientation: portrait) {
      display: none;
    }
 
  `;

  const Left = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const A = styled.div`
    height: 70%;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const A1 = styled.div`
    height: 33%;
    width: 100%;
  `;
  const Text1 = styled.p`
    font-size: 12px;
    color: #d9d4d4cc;
    font-family: Poppins;
  `;

  const A2 = styled.div`
    height: 33%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: baseline;
  `;
  const A21 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 33%;
  `;

  const A3 = styled.div`
    height: 33%;
    width: 100%;
  `;

  const Image1 = styled.img`
    height: 2vh;
    width: 2vh;
  `;
  const Text2 = styled.p`
    font-size: 8px;
    color: #d9d4d4cc;
    font-family: Poppins;
    margin-left: 10px;
  `;
  const Button = styled.button`
    color: white;
    background-color: #72775b;

    width: 176px;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  `;
  const Text3 = styled.p`
    font-size: 10px;
  `;
  const Image2 = styled.img`
    height: 1vh;
    width: 3vh;
  `;

  const Right = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: row;
  `;

  const A4 = styled.div`
    height: 100%;
    width: 100%;
  `;

  const A41 = styled.div`
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: end;
  `;
  const A42 = styled.div`
    height: 100%;
    width: 60%;
  `;
  const A43 = styled.div`
    height: 100%;
    width: 20%;
  `;
  const Image3 = styled.img`
    height: 95%;
    width: 85%;
    object-fit: cover;
  `;
  const A411 = styled.div`
    height: 18vh;
    width: 32vh;
    background-color: #e1dddd;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const Text4 = styled.p`
    font-size: 10px;
    margin-left: 5px;
  `;
  const Text5 = styled.p`
    font-size: 10px;
    margin-left: 5px;
  `;
  const Text6 = styled.p`
    font-size: 10px;
    margin-left: 5px;
  `;

  const A4111 = styled.div`
    height: 90%;
    width: 90%;
  `;

  // MEDIA QUERY
  // @media  (max-width: 600px) and (orientation: portrait) {
  // }

  const Container2 = styled.div`
    display: none;
    @media (max-width: 600px) and (orientation: portrait) {
      display: block;
      height: 120vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      background-color: black;
    }
    @media (min-width: 601px)  and (orientation: portrait) {
      display: none;
    }
 
  `;

  const F1 = styled.div`
    height: 15vh;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  `;
  const Textf1 = styled.p`
    color: #d9d4d4;
    font-size: 32px;
    font-family: Playfair Display;
    margin: 0;
  `;

  const F2 = styled.div`
    height: 10vh;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  `;
  const Textf2 = styled.p`
    color: #d9d4d4cc;
    font-size: 18px;
    font-family: Playfair Display;
    margin: 0;
  `;

  const F3 = styled.div`
    height: 15vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const F31 = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  `;

  const F311 = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;

  const F312 = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const F31a = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;

  const Image1f = styled.img`
    height: 3vh;
    width: 3vh;
  `;

  const Text2f = styled.p`
    font-size: 12px;
    color: rgba(217, 212, 212, 0.8);
    font-family: Poppins;
    margin-left: 10px;
  `;

  const F4 = styled.div`
    height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const F41 = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  `;

  const Button1 = styled.button`
    background-color: #72775b;
    display: flex;
    height: 7vh;
    width: 40vh;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-evenly;
  `;
  const Text3f1 = styled.p`
    color: #d9d4d4;
    font-size: 14px;
  `;

  const Image2f1 = styled.img`
    height: 1vh;
    width: 4vh;
  `;
  const F5 = styled.div`
    height: 70vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const F51 = styled.div`
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const Imageff3 = styled.img`
    height: 55vh;
    width: 50vh;
    object-fit: cover;
  `;
  const Fbox = styled.div`
    height: 18vh;
    width: 32vh;
    background-color: #e1dddd;
    position: absolute;
    margin-top: 77%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  // SECOND MEDIA QUERY MIN WIDTH 601
  const Container3 = styled.div`
    display: none;
    @media (min-width: 601px) and (orientation: portrait) {
      display: block;
      height: 120vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      background-color: black;
    }

  `;

const FFbox = styled.div`
height: 18vh;
    width: 32vh;
    background-color: rgb(225, 221, 221);
    position: absolute;
    margin-top: 58%;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;

`
const Textff1 = styled.p`
color: rgb(217, 212, 212);
    font-size: 40px;
    font-family: "Playfair Display";
    margin: 0px;
`
const Textff2 = styled.p`
color: rgba(217, 212, 212, 0.8);
    font-size: 20px;
    font-family: "Playfair Display";
    margin: 0px;
`
const Text44 = styled.p`
font-size: 12px;
    margin-left: 5px;
    text-align: center;
`
const Text54 = styled.p`
font-size: 12px;
   
`

const Text64 = styled.p`
font-size: 12px;
`





  return (
    <>
      <Container>
        <Left>
          <A>
            <A1>
              <Text1>
                That’s where we come in – the folks at Oliya, with our
                Kickstarter campaign goal of $1000 for a total books and one
                final book time
              </Text1>
            </A1>
            <A2>
              <A21>
                <Image1 src={img1} alt=""></Image1>
                <Text2>Free Delivery</Text2>
              </A21>
              <A21>
                <Image1 src={img1} alt=""></Image1>
                <Text2>Free Delivery</Text2>
              </A21>
              <A21>
                <Image1 src={img1} alt=""></Image1>
                <Text2>Free Delivery</Text2>
              </A21>
            </A2>
            <A3>
              <Button>
                <Text3>Get Started</Text3>
                <Image2 src={img2} alt=""></Image2>
              </Button>
            </A3>
          </A>
        </Left>
        <Right>
          <A41>
            <A411>
              <A4111>
                <Text4>
                  "Definitely worth the investment. Really good. Keep up the
                  excellent work. It's really wonderful."
                </Text4>
                <Text5>Jena Redmond</Text5>
                <Text6>Designer</Text6>
              </A4111>
            </A411>
          </A41>
          <A42>
            <Image3 src={img3} alt=""></Image3>
          </A42>
          <A43>3</A43>
        </Right>
      </Container>
      <Container2>
        <F1>
          <F11>
            <Textf1>
              We Bring The Good <br /> Pillows To Life.
            </Textf1>
          </F11>
        </F1>
        <F2>
          <F22>
            <Textf2>
              That’s where we come in – the folks at Oliya, with our Kickstarter
              campaign goal of $1000 for a total books and one final book time
            </Textf2>
          </F22>
        </F2>
        <F3>
          <F31>
            <F311>
              <F31a>
                <Image1f src={img1} alt=""></Image1f>
                <Text2f>Free Delivery</Text2f>
              </F31a>
              <F31a>
                <Image1f src={img1} alt=""></Image1f>
                <Text2f>Free Delivery</Text2f>
              </F31a>
            </F311>
            <F312>
              <F31a>
                <Image1f src={img1} alt=""></Image1f>
                <Text2f>Free Delivery</Text2f>
              </F31a>
            </F312>
          </F31>
        </F3>
        <F4>
          <F41>
            <Button1>
              <Text3f1>Get Started</Text3f1>
              <Image2f1 src={img2} alt=""></Image2f1>
            </Button1>
          </F41>
        </F4>
        <F5>
          <F51>
            <Imageff3 src={img3} alt=""></Imageff3>
          </F51>
          <Fbox>
            <Text4>
              "Definitely worth the investment. Really good. Keep up the
              excellent work. It's really wonderful."
            </Text4>
            <Text5>Jena Redmond</Text5>
            <Text6>Designer</Text6>
          </Fbox>
        </F5>
      </Container2>
      <Container3>
        <F1>
          <F11>
            <Textff1>
              We Bring The Good <br /> Pillows To Life.
            </Textff1>
          </F11>
        </F1>
        <F2>
          <F22>
            <Textff2>
              That’s where we come in – the folks at Oliya, with our Kickstarter
              campaign goal of $1000 for a total books and one final book time
            </Textff2>
          </F22>
        </F2>
        <F3>
          <F31>
            <F311>
              <F31a>
                <Image1f src={img1} alt=""></Image1f>
                <Text2f>Free Delivery</Text2f>
              </F31a>
              <F31a>
                <Image1f src={img1} alt=""></Image1f>
                <Text2f>Free Delivery</Text2f>
              </F31a>
            </F311>
            <F312>
              <F31a>
                <Image1f src={img1} alt=""></Image1f>
                <Text2f>Free Delivery</Text2f>
              </F31a>
            </F312>
          </F31>
        </F3>
        <F4>
          <F41>
            <Button1>
              <Text3f1>Get Started</Text3f1>
              <Image2f1 src={img2} alt=""></Image2f1>
            </Button1>
          </F41>
        </F4>
        <F5>
          <F51>
            <Imageff3 src={img3} alt=""></Imageff3>
          </F51>
          <FFbox>
            <Text44>
              "Definitely worth the investment. Really good. Keep up the
              excellent work. It's really wonderful."
            </Text44>
            <Text54>Jena Redmond</Text54>
            <Text64>Designer</Text64>
          </FFbox>
        </F5>
      </Container3>
      
    </>
  );
}
