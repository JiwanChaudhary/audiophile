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
            <AnchorTag>HOME</AnchorTag>
          </List>
          <List>
            <AnchorTag>HEADPHONES</AnchorTag>
          </List>
          <List>
            <AnchorTag>SPEAKERS</AnchorTag>
          </List>
          <List>
            <AnchorTag>EARPHONES</AnchorTag>
          </List>
        </Menu>
        <Cart></Cart>
      </Wrapper>
    </Header>
  );
};

export default Navbar;
