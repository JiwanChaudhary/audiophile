import React from "react";
import {
  HomeSection,
  Description,
  NewProduct,
  HeaderOne,
  HeaderTwo,
  HeadphoneDescription,
  Button,
  Image,
} from "../styled/Home.styled";

import  ImageLink  from "../../images/home.png";

const Home = () => {
  return (
    <HomeSection>
      <Description>
        <NewProduct>NEW PRODUCT</NewProduct>
        <HeaderOne>XX99 MARK II</HeaderOne>
        <HeaderTwo>HEADPHONES</HeaderTwo>
        <HeadphoneDescription>
          Experience natural , lifelike audio and exceptional build qualitymade
          for the passionate music enthusiast
        </HeadphoneDescription>
        <Button>SEE PRODUCT</Button>
      </Description>
      <Image src={ImageLink} />
    </HomeSection>
  );
};

export default Home;
