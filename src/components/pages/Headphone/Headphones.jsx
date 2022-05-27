import React from "react";
import {
  HeadphoneWrapper,
  Wrapper,
  BackLink,
  WrapperOne,
  HeadphoneImage,
  HeadphoneImageDes,
  NewProduct,
  HeadOne,
  HeadTwo,
  HeadDes,
} from "./Headphones.styled";

import PriceCart from "./PriceCart";

import XxHeadphone from "../../../images/xxproduct.jpg";

const Headphones = () => {
  return (
    <HeadphoneWrapper>
      <Wrapper>
        <BackLink to="/">Go Back</BackLink>
        <WrapperOne>
          <HeadphoneImage src={XxHeadphone} />
          <HeadphoneImageDes>
            <NewProduct>new product</NewProduct>
            <HeadOne>XX99 MARK II</HeadOne>
            <HeadTwo>HEADPHONES</HeadTwo>
            <HeadDes>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redifines your premium headphone experienced by reproducing the
              balanced depth and precision of studio-quality sound
            </HeadDes>
           <PriceCart />
          </HeadphoneImageDes>
        </WrapperOne>
      </Wrapper>
    </HeadphoneWrapper>
  );
};

export default Headphones;
