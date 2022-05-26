import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 130px 80px 130px;
  font-family: "Poppins", sans-serif;
`;
export const ProductHeading = styled.h2`
  margin-bottom: 80px;
  text-align: center;
  font-size: 45px;
`;
export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  place-items: center;
`;
export const Card = styled.div`
display: grid;
place-items: center;
`;
export const Image = styled.img`
  height: 348px;
  width: 373px;
`;
export const CardHeading = styled.h2`
 font-size: 35px;
`;
export const CardButton = styled.button`
 background-color: #FEA565;
  border: none;
  padding: 8px 12px;
  color: #fff;
  text-transform: uppercase;
  font-size: 18px;
`;
