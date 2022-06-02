import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = styled.nav`
  height: 80px;
  background-color: #262626;
`;

export const Wrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
  margin: 0 130px;

  @media screen and (max-width: 1200px) {
    margin-left: 80px;
    margin-right: 80px;
  }
`;

export const HamburgerMenu = styled(GiHamburgerMenu)`
  color: #fff;
  font-size: 25px;
  display: none;

  @media screen and (max-width: 1200px) {
    display: block;
    margin-right: -300px;
  }
`;

export const Title = styled.div`
  font-family: "Poppins", sans-serif;
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

export const AnchorTag = styled(Link)`
  text-decoration: none;
  padding-left: 20px;
  color: #fff;
  font-size: 1.3rem;
  transition: 0.4s;

  &:hover {
    color: #ff7918;
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Cart = styled(AiOutlineShoppingCart)`
  color: #fff;
  width: 30px;
  height: 25px;

  &:hover {
    cursor: pointer;
  }
`;

export const ExtendedNavbar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #262626;
  height: 300px;
  color: #fff;
  position: absolute;
  left: 0;
  width: 100%;
`;
