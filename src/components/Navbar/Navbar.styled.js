import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

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
  margin:  0 130px;
`;

export const Title = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #fff;
  font-size: 2.2rem;
`;

export const Menu = styled.ul`
  display: flex;
`;

export const List = styled.li`
  list-style: none;
`;

export const AnchorTag = styled.a`
  text-decoration: none;
  padding-right: 20px;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
`;

export const Cart = styled(AiOutlineShoppingCart)`
  color: #fff;
  width: 30px;
  height: 25px;
`;


