import React from "react";
import {
  MainFooter,
  FooterDiv,
  FooterHeader,
  Title,
  Menu,
  List,
  AnchorTag,
  ParaLink,
  Paragraph,
  SocialLink,
  CopyRight,
} from "../styled/Footer.styled";

import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <MainFooter>
      <FooterDiv>
        <FooterHeader>
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
        </FooterHeader>
        <ParaLink>
          <Paragraph>Audiophile is an all in one stope to fulfill your audio needs. We’re a small team of music lovers and sound specialists who are devoted to helping  you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</Paragraph>
          <SocialLink>
            <FaFacebookF />
            <AiOutlineInstagram />
            <AiOutlineTwitter />
          </SocialLink>
        </ParaLink>
        <CopyRight>Copyrights 2021. All Rights Reserved</CopyRight>
      </FooterDiv>
    </MainFooter>
  );
};

export default Footer;
