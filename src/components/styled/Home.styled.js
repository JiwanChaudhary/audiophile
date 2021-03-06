import styled from "styled-components";

export const HomeSection = styled.section`
  background-color: #262626;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;

  @media screen and (max-width: 1200px) {
    display: block;
  }

`;

export const Description = styled.div`
  margin-left: 130px;
  color: #fff;
  margin-right: 0;

  @media screen and (max-width: 1200px) {
    /* margin-left: 80px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }
`;

export const NewProduct = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  letter-spacing: 15px;
  margin-bottom: 40px;
  opacity: 35%;
`;

export const HeaderOne = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 2.9rem;
  margin: 0;
  letter-spacing: 5px;

  @media screen and (max-width: 1463px) {
    font-size: 2.5rem;
  }
`;

export const HeaderTwo = styled.h1`
  letter-spacing: 5px;
  margin-top: -20px;
  font-size: 2.9rem;
  margin-bottom: 40px;
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 1463px) {
    font-size: 2.5rem;
  }
`;

export const HeadphoneDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  margin-bottom: 68px;
  opacity: 68%;
`;

export const Button = styled.button`
  font-family: "Poppins", sans-serif;
  background-color: #fea565;
  border: none;
  padding: 10px 20px;
  color: #fff;
  opacity: 100%;
  font-size: 20px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  margin-top: 50px;
  height: 1000px;
  margin-left: 0;

  @media screen and (max-width: 1463px) {
    height: 900px;
  }
  @media screen and (max-width: 1325px) {
    height: 800px;
  }

  @media screen and (max-width: 1300px) {
    height: 750px;
  }
  @media screen and (max-width: 1200px) {
      background-position: center;
      position: relative;
      top: -500px;
      left: 200px;  
      height: 1000px;
      z-index: 1;
  }
`;
