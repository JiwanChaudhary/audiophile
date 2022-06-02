import styled from "styled-components";

export const Zspeaker = styled.div`
  margin: 90px 130px;
  height: 450px;
  background-color: #ff7918;
  display: flex;
  border-radius: 20px;

  @media screen and (max-width: 1200px) {
    margin-left: 80px;
    margin-right: 80px;
  }
`;

export const ZxspeakerImage = styled.img`
  width: 630px;
  height: 650px;
  margin-left: -40px;
  margin-top: -49px;
`;

export const Zxtext = styled.div`
  margin-top: 150px;
  color: #fff;
  font-family: "Poppins", sans-serif;
  margin-left: -40px;
`;
export const Zxheading = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Span = styled.span`
  font-size: 45px;
  font-weight: 600;
  letter-spacing: 2px;
  &:first-child {
    margin-bottom: -25px;
  }
`;
export const Zxdescription = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  width: 500px;
`;
export const ZButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 15px;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    transform: scale(1.1);
}
`;
