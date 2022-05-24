import React from "react";
import {
  Header,
  Wrapper,
  Title,
  Menu,
  List,
  AnchorTag,
  Cart,
} from "./Navbar.styled";

const Navbar = () => {
  return (
    <Header>
      <Wrapper>
        <Title>audiophile</Title>
        <Menu>
          <List>
            <AnchorTag to='/'>HOME</AnchorTag>
          </List>
          <List>
            <AnchorTag to="/headphones">HEADPHONES</AnchorTag>
          </List>
          <List>
            <AnchorTag to='/speakers'>SPEAKERS</AnchorTag>
          </List>
          <List>
            <AnchorTag to='/earphones'>EARPHONES</AnchorTag>
          </List>
        </Menu>
        <Cart></Cart>
      </Wrapper>
    </Header>
  );
};

export default Navbar;
