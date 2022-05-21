import React from "react";
import {
  AllProduct,
  Box,
  Heading,
  HeadingIcon,
  Icon,
  Image,
  Shop,
  Zspeaker,
  Zxdescription,
  Zxheading,
  ZxspeakerImage,
  Zxtext,
  ZButton,
  Span,
} from "./Product.styled";
import Headphone from "../../images/headphone.png";
import Earphone from "../../images/earphone.png";
import Speaker from "../../images/speaker.png";

const Product = () => {
  return (
    <>
      <AllProduct>
        <Box>
          <Image src={Headphone} />
          <Heading>HEADPHONES</Heading>
          <HeadingIcon>
            <Shop>SHOP</Shop>
            <Icon />
          </HeadingIcon>
        </Box>
        <Box>
          <Image src={Speaker} />
          <Heading>SPEAKERS</Heading>
          <HeadingIcon>
            <Shop>SHOP</Shop>
            <Icon />
          </HeadingIcon>
        </Box>
        <Box>
          <Image src={Earphone} />
          <Heading>EARPHONES</Heading>
          <HeadingIcon>
            <Shop>SHOP</Shop>
            <Icon />
          </HeadingIcon>
        </Box>
      </AllProduct>

      <Zspeaker>
        <ZxspeakerImage src={Speaker}></ZxspeakerImage>
        <Zxtext>
          <Zxheading>
            <Span>ZX9</Span>
            <Span>SPEAKER</Span>
          </Zxheading>
          <Zxdescription>Upgrade to premium speakers that are
phenomenally built to deliver truly remarkable
sound</Zxdescription>
          <ZButton>see product</ZButton>
        </Zxtext>
      </Zspeaker>
    </>
  );
};

export default Product;
