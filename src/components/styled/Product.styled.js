import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";

export const AllProduct = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  margin: 130px 130px 0 130px;
  gap: 30px;

  @media screen and (max-width: 1350px) {
    gap: 10px;
  }

  @media screen and (max-width: 1200px) {
    margin-left: 80px;
    margin-right: 80px;
  }
`;

export const Box = styled.div`
  height: 200px;
  width: auto;
  max-width: 380px;
  background-color: #bdb9b9;
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  width: 300px;
  height: 300px;
  left: 15%;
  top: -65%;

  @media screen and (max-width: 1350px) {
    left: 10%;
   }

   @media screen and (max-width: 1250px) { 
     left: 7%;
   }
   @media screen and (max-width: 1220px) { 
     left: 4%;
   }
`;

export const HeadingIcon = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  gap: 5px;
  position: absolute;
  top: 80%;
  left: 45%;
`;

export const Heading = styled.h4`
  font-family: "Poppins", sans-serif;
  color: #fff;
  color: #000;
  position: absolute;
  top: 70%;
  left: 40%;
`;

export const Icon = styled(AiOutlineRight)`
  font-family: "Poppins", sans-serif;
  color: #585959;
  margin-top: 5px;
  font-weight: 700;
  font-size: 15px;
`;

export const Shop = styled.p`
  color: #585959;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;


