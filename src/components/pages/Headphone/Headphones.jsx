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
  Price,
  AllButton,
  ButtonWrapper,
  SubButton,
  NumButton,
  AddButton,
  CartButton,
} from "./Headphones.styled";

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
            <Price>$ 2,999</Price>
            <AllButton>
              <ButtonWrapper>
                <SubButton>-</SubButton>
                <NumButton>1</NumButton>
                <AddButton>+</AddButton>
              </ButtonWrapper>
              <CartButton>Add to cart</CartButton>
            </AllButton>
          </HeadphoneImageDes>
        </WrapperOne>
      </Wrapper>
    </HeadphoneWrapper>
  );
};

export default Headphones;
