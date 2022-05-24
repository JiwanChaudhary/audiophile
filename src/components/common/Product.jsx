import React from "react";
import {
  AllProduct,
  Box,
  Heading,
  HeadingIcon,
  Icon,
  Image,
  Shop,
} from "../styled/Product.styled";
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
    </>
  );
};

export default Product;
