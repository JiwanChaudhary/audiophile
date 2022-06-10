import React, { useState } from "react";
import {
  Header,
  Wrapper,
  Title,
  Menu,
  List,
  Cart,
  AnchorTag,
  HamburgerMenu,
  Cross,
  ExtendedNavbar,
  MediaButton,
} from "./Navbar.styled";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <>
      <Header>
        <Wrapper>
          <MediaButton onClick={() => setHamburger((curr) => !curr)}>
            {hamburger ? (
              <>
                <Cross />
              </>
            ) : (
              <>
                <HamburgerMenu />
              </>
            )}
          </MediaButton>
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
        {hamburger && (
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
        )}
      </Header>
    </>
  );
};

export default Navbar;
