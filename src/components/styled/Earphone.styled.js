import styled from "styled-components";

export const EarphoneDiv = styled.div`
  display: flex;
  gap: 20px;
  margin: 90px 130px;
  height: 319px;
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 1200px) {
    margin-left: 80px;
    margin-right: 80px;
  }
`;

export const EarphoneImage = styled.img`
  border-radius: 20px;
  width: 50%;
`;

export const EarphoneDes = styled.div`
  background-color: #cccaca;
  width: 50%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EarphoneHeading = styled.h1`
  font-size: 35px;
  letter-spacing: 3px;
`;

export const EarphoneButton = styled.button`
  background: none;
  color: #000;
  border: 1px solid #000;
  padding: 10px 15px;
  text-transform: uppercase;
  font-size: 18px;
  margin-top: 15px;
  margin-left: -140px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    transform: scale(1.1);
  }
`;
