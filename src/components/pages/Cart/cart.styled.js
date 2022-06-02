import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  margin: 60px 130px;
  font-family: "Poppins", sans-serif;
`;
export const GoBack = styled(Link)`
  color: #000;
  opacity: 60%;
  text-decoration: none;
  font-size: 25px;
  font-weight: 500;
`;
export const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
  margin-top: 60px;
`;
export const BoxOne = styled.div`
  background-color: #fff;
  height: 930px;
`;

export const BoxOneWrapper = styled.div`
  margin: 30px 50px;
  font-family: "Poppins", sans-serif;
`;

export const CheckOut = styled.p`
  font-size: 35px;
  font-weight: 500;
`;
export const BillDetails = styled.p`
  color: #ff7918;
  font-weight: 500;
  font-size: 30px;
  margin: 20px 0;
`;
export const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
export const NameDetails = styled.div``;
export const Label = styled.label`
  display: block;
  opacity: 90%;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
`;
export const Input = styled.input`
  width: 300px;
  border-radius: 20px;
  border: 1px solid #151515;
  padding: 10px 20px;

  &:focus {
    outline: none;
  }

  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    font-size: 15px;
  }
`;
export const ButtonWrapper = styled.div`
width: 300px;
background: none;
border: 1px solid #282727;
vertical-align: middle;
padding: 10px 15px;
margin-top: 20px;
border-radius: 20px;
`;
export const Button = styled.button`
  background: none;
  border: none;
  text-align: start;
  margin-left: 10px;
`;

export const BoxTwo = styled.div`
  background-color: #fff;
  height: 500px;
`;
