import React from "react";
import { Header, Title, Menu, List, AnchorTag, Cart } from "./Navbar.styled";

const Navbar = () => {
  return (
    <Header>
      <Title>audiophile</Title>
      <Menu>
        <List><AnchorTag>HOME</AnchorTag></List>
        <List><AnchorTag>HEADPHONES</AnchorTag></List>
        <List><AnchorTag>SPEAKERS</AnchorTag></List>
        <List><AnchorTag>EARPHONES</AnchorTag></List>
      </Menu>
      <Cart></Cart>
    </Header>
  )
};

export default Navbar;
