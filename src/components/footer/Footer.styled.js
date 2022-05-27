import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

export const MainFooter = styled.footer`
  height: 350px;
  background-color: #212121;
`;

export const FooterDiv = styled.div`
  padding-top: 40px;
  margin: 0 130px;
  color: #fff;
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
  transition: 0.4s;

  &:hover {
    color: #ff7918;
    cursor: pointer;
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
  font-size: 30px;
  gap: 7px;
  margin-top: 40px;
`;

export const Facebook = styled(FaFacebookF)`
  transition: 0.4s;
  &:hover {
    cursor: pointer;
    color: #ff7918;
  }
`;
export const Instagram = styled(AiOutlineInstagram)`
  transition: 0.4s;
  &:hover {
    cursor: pointer;
    color: #ff7918;
  }
`;
export const Twitter = styled(AiOutlineTwitter)`
  transition: 0.4s;
  &:hover {
    cursor: pointer;
    color: #ff7918;
  }
`;

export const CopyRight = styled.p`
  opacity: 79%;
`;
