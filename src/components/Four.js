import React from "react";
import styled from "styled-components";
import img1 from "../images/img25.avif";
import img3 from "../images/img27.jpg";
import img2 from "../images/arrow.jpg";

export default function Four() {
  const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #e1dddd;
    @media (max-width: 600px) and (orientation: portrait) {
      display: none;
    }
    @media (min-width: 601px) and (orientation: portrait) {
    display: none;
    }
  `;

  const Hr = styled.hr`
    border: 2px solid rgb(114, 119, 91);
    height: 0px;
    width: 4vh;
    margin: 0;
  `;

  const A = styled.div`
    height: 90%;
    width: 80%;
    display: flex;
    flex-direction: row;
  `;

  const B = styled.div`
    height: 100%;
    width: 50%;
  `;

  const C = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const B1 = styled.div`
    width: 25%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `;

  const B2 = styled.div`
    width: 60%;
  `;
  const B3 = styled.div``;
  const B4 = styled.div``;

  const Text1 = styled.p`
    font-size: 8px;
    color: #72775b;
  `;

  const Text2 = styled.p`
    font-family: Playfair Display;
    font-size: 30px;
    font-weight: 600;
  `;

  const Image1 = styled.img`
    border-radius: 300px 300px 0px 0px;
    height: 340px;
    width: 300px;
    object-fit: cover;
  `;

  const Text3 = styled.p`
    font-size: 10px;
    font-weight: 500;
  `;
  const Text4 = styled.p`
    font-size: 8px;
  `;

  const Image3 = styled.img`
    height: 1vh;
    width: 3vh;
  `;

  const B41 = styled.div``;
  const B42 = styled.div`
    width: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `;

  const C1 = styled.div`
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const Image4 = styled.img`
    height: 40vh;
    width: 35vh;
    border-radius: 300px 300px 0px 0px;
  `;

  const C11 = styled.div``;
  const C12 = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: end;
  `;
  const D1 = styled.div``;

  const D2 = styled.div`
    width: 35%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `;
  const C22 = styled.div`
    height: 8vh;
  `;

  // MEDIA QUERY
  const Container2 = styled.div`
   display: none;
  @media (min-width: 601px)  and (orientation: portrait) {
    display: none;
    }
   
    @media (max-width: 600px) and (orientation: portrait) {
      display: block;
      height: 155vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      
      background-color: #e1dddd;
    }
  `;
  const F1 = styled.div`
    height: 10vh;
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
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: flex-start;
  `;

const Hr1 = styled.hr`
 border: 2px solid rgb(114, 119, 91);
    height: 1px;
    width: 4vh;
    margin: 0;
`
const Text1f = styled.text`
font-size: 12px;
    color: rgb(114, 119, 91);
    margin-left: 5%;
`

const F2 = styled.div`
height: 15vh;
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
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
`;

const Textf2 = styled.p`
margin: 0;
    font-size: 40px;
    text-align: center;
    font-weight: 600;
    font-family: Playfair Display;
`

const F3 = styled.div`
height: 50vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const F33 = styled.div`
height: 100%;
width: 90%;
display: flex;
flex-direction: row;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
`;

const F4 = styled.div`
height: 50vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const F44 = styled.div`
height: 100%;
width: 90%;
display: flex;
flex-direction: row;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
`;

const F5 = styled.div`
height: 15vh;
width: 100%;
`
const F55 = styled.div`
height: 100%;
width: 100%;
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const F551 = styled.div`
height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const F552 = styled.div`
display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 40%;
    height: 50%;
`


const Imagef3 = styled.img`
border-radius: 300px 300px 0px 0px;
height: 45vh;
width: 40vh;
object-fit: cover;
`
const Text4f = styled.p`
font-size: 20px;
    margin: 0;
    font-weight: 600;
    font-family: Poppins;
`
const Text4f1 = styled.p`
font-size: 18px;
    margin: 0;
    font-weight: 500;
    font-family: Poppins;
`

const Image4f1 = styled.img`
height: 1vh;
width: 3vh;
`
// SECOND MEDIA QUERY MIN WIDTH 601

const Container3 = styled.div`
display: none;
 @media (min-width: 601px)  and (orientation: portrait) {
  display: block;
      height: 155vh;
      width: 100%;
      display: flex;
      flex-direction: column;      
      background-color: #e1dddd;
    }
`
const Text1ff = styled.p`
font-size: 15px;
color: rgb(114, 119, 91);
    margin-left: 5%;
`



  return (
    <>
      <Container>
        <A>
          <B>
            <B1>
              <Hr></Hr>
              <Text1>Our Collection</Text1>
            </B1>
            <B2>
              <Text2>Everyone Needs One Until They Do.</Text2>
            </B2>
            <B3>
              <Image1 src={img1} alt=""></Image1>
            </B3>
            <B4>
              <B41>
                <Text3>Maternity Foam Pillow</Text3>
              </B41>
              <B42>
                <Text4> Discover more</Text4>
                <Image3 src={img2} alt=""></Image3>
              </B42>
            </B4>
          </B>
          <C>
            <C22></C22>
            <C1>
              <C11>
                <Image4 src={img3} alt=""></Image4>
              </C11>
              <C12>
                <D1>
                  <Text3>Memory Form Matteress</Text3>
                </D1>
                <D2>
                  <Text4> Discover more</Text4>
                  <Image3 src={img2} alt=""></Image3>
                </D2>
              </C12>
            </C1>
          </C>
        </A>
      </Container>
      <Container2>
        <F1>
          <F11>
            <Hr1></Hr1>
            <Text1f>Why Should Buy</Text1f>
          </F11>
        </F1>
        <F2>
          <F22>
          <Textf2>Pillows As Sure As <br/> The Sun Shines.</Textf2>
          </F22>
        </F2>
        <F3>
          <F33>
          <Imagef3 src={img1} alt=""></Imagef3>
          </F33>
        </F3>
        <F5>
          <F55>
          <F551>
          <Text4f> Memory Foam Mattress</Text4f>
          </F551>
          <F552>
          <Text4f1> Discover more</Text4f1>
          <Image4f1 src={img2} alt=""></Image4f1>
          </F552>
          </F55>
        </F5>
        <F3>
          <F33>
          <Imagef3 src={img3} alt=""></Imagef3>
          </F33>
        </F3>
        <F5>
          <F55>
          <F551>
          <Text4f> Memory Foam Mattress</Text4f>
          </F551>
          <F552>
          <Text4f1> Discover more</Text4f1>
          <Image4f1 src={img2} alt=""></Image4f1>
          </F552>
          </F55>
        </F5>
      </Container2>
      <Container3>
      <F1>
          <F11>
            <Hr1></Hr1>
            <Text1ff>Why Should Buy</Text1ff>
          </F11>
        </F1>
        <F2>
          <F22>
          <Textf2>Pillows As Sure As <br/> The Sun Shines.</Textf2>
          </F22>
        </F2>
        <F3>
          <F33>
          <Imagef3 src={img1} alt=""></Imagef3>
          </F33>
        </F3>
        <F5>
          <F55>
          <F551>
          <Text4f> Memory Foam Mattress</Text4f>
          </F551>
          <F552>
          <Text4f1> Discover more</Text4f1>
          <Image4f1 src={img2} alt=""></Image4f1>
          </F552>
          </F55>
        </F5>
        <F3>
          <F33>
          <Imagef3 src={img3} alt=""></Imagef3>
          </F33>
        </F3>
        <F5>
          <F55>
          <F551>
          <Text4f> Memory Foam Mattress</Text4f>
          </F551>
          <F552>
          <Text4f1> Discover more</Text4f1>
          <Image4f1 src={img2} alt=""></Image4f1>
          </F552>
          </F55>
        </F5>
      </Container3>
    </>
  );
}
