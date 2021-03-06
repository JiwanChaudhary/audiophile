import styled from "styled-components";

export const Speaker = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Poppins", sans-serif;
  margin: 0 130px;
  height: 270px;
  background-color: #cccaca;
  border-radius: 20px;
  
  @media screen and (max-width: 1200px) {
    margin-left: 80px;
    margin-right: 80px;
  }
`;
export const SpeakerTwoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 150px;
`;
export const SpeakerTwoHeading = styled.h1`
  font-size: 35px;
  letter-spacing: 3px;
  margin-bottom: 10px;
`;
export const SpeakerTwoButton = styled.button`
  background: none;
  color: #000;
  border: 1px solid #000;
  padding: 10px 15px;
  text-transform: uppercase;
  font-size: 18px;
  margin-left: -95px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    transform: scale(1.1);
  }
`;
export const SpeakerTwoImage = styled.img``;
