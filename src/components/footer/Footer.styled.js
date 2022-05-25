import styled from "styled-components";

export const MainFooter = styled.footer`
  height: 350px;
  background-color: #212121;
`;

export const FooterDiv = styled.div`
  padding-top: 40px;
  margin: 0 130px;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;

export const FooterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.div`
  font-weight: 600;
  color: #fff;
  font-size: 2.2rem;
  cursor: pointer;
`;
export const Menu = styled.ul`
  display: flex;
`;
export const List = styled.li`
  list-style: none;
`;
export const AnchorTag = styled.a`
  text-decoration: none;
  padding-left: 20px;
  color: #fff;
  font-size: 1.3rem;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
      color: #ff7918;
  }
`;

export const ParaLink = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
`;
export const Paragraph = styled.p`
  width: 650px;
  opacity: 79%;
`;
export const SocialLink = styled.div`
  display: flex;
  gap: 10px;
  font-size: 25px;
`;

export const CopyRight = styled.p`
  opacity: 79%;
`;
