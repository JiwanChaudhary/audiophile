import React from "react";
import {
  MainFooter,
  FooterDiv,
  FooterHeader,
  Title,
  Menu,
  List,
  ParaLink,
  Paragraph,
  SocialLink,
  CopyRight,
  Facebook,
  Instagram,
  Twitter,
} from "./Footer.styled";
import { AnchorTag } from "../Navbar/Navbar.styled";

const Footer = () => {
  return (
    <MainFooter>
      <FooterDiv>
        <FooterHeader>
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
        </FooterHeader>
        <ParaLink>
          <Paragraph>
            Audiophile is an all in one stope to fulfill your audio needs. We’re
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </Paragraph>
          <SocialLink>
            <Facebook />
            <Instagram />
            <Twitter />
          </SocialLink>
        </ParaLink>
        <CopyRight>Copyrights 2021. All Rights Reserved</CopyRight>
      </FooterDiv>
    </MainFooter>
  );
};

export default Footer;
