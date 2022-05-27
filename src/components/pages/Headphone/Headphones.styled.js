import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeadphoneWrapper = styled.div``;
export const Wrapper = styled.div`
  margin: 90px 130px;
  font-family: "Poppins", sans-serif;
`;
export const BackLink = styled(Link)`
  font-size: 30px;
  text-decoration: none;
  color: #000;
  opacity: 61%;
`;

export const WrapperOne = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 40px;
`;

export const HeadphoneImage = styled.img`
  height: 650px;
  width: 630px;
`;
export const HeadphoneImageDes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const NewProduct = styled.p`
  font-weight: 400;
  letter-spacing: 15px;
  opacity: 35%;
  text-transform: uppercase;
`;
export const HeadOne = styled.h1`
  font-size: 2.9rem;
  margin: 0;
  letter-spacing: 5px;
`;
export const HeadTwo = styled.h1`
  letter-spacing: 5px;
  margin-top: -20px;
  font-size: 2.9rem;
  margin-bottom: 40px;
`;
export const HeadDes = styled.p`
  font-size: 20px;
  margin-bottom: 68px;
  opacity: 68%;
`;
export const Price = styled.h3`
  font-weight: bold;
  font-size: 35px;
  opacity: 90%;
  margin-bottom: 20px;
`;
export const AllButton = styled.div`
  display: flex;
`;
export const ButtonWrapper = styled.div`
  margin-right: 20px;
`;
export const SubButton = styled.button`
  border: none;
  background-color: #8f8f8f;
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
`;
export const NumButton = styled.button`
  border: none;
  background-color: #8f8f8f;
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
`;
export const AddButton = styled.button`
  border: none;
  background-color: #8f8f8f;
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
`;
export const CartButton = styled.button`
  text-transform: uppercase;
  border: none;
  background-color: #ff7918;
  color: #fff;
  padding: 10px 15px;
  font-size: 17px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    transform: scale(1.1);
  }
`;
