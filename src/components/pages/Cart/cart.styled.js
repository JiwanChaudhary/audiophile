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
  height: 700px;
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
  font-size: 35px;
  margin-top: 20px;
`;

export const BoxTwo = styled.div`
  background-color: #fff;
  height: 400px;
`;
