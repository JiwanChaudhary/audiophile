import React from "react";
import {
  Header,
  Wrapper,
  Title,
  Menu,
  List,
  Cart,
  AnchorTag,
  HamburgerMenu,
  ExtendedNavbar,
} from "./Navbar.styled";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Header>
        <Wrapper>
          <HamburgerMenu />
          <Title>audiophile</Title>
          <Menu>
            <List>
              <AnchorTag to="/">HOME</AnchorTag>
            </List>
            <List>
              <AnchorTag to="/headphones">HEADPHONES</AnchorTag>
            </List>
            <List>
              <AnchorTag to="/speakers">SPEAKERS</AnchorTag>
            </List>
            <List>
              <AnchorTag to="/earphones">EARPHONES</AnchorTag>
            </List>
          </Menu>
          <Link to="/cart">
            <Cart />
          </Link>
        </Wrapper>
        <ExtendedNavbar>
        <List>
          <AnchorTag to="/">HOME</AnchorTag>
        </List>
        <List>
          <AnchorTag to="/headphones">HEADPHONES</AnchorTag>
        </List>
        <List>
          <AnchorTag to="/speakers">SPEAKERS</AnchorTag>
        </List>
        <List>
          <AnchorTag to="/earphones">EARPHONES</AnchorTag>
        </List>
      </ExtendedNavbar>
      </Header>
    
    </>
  );
};

export default Navbar;
