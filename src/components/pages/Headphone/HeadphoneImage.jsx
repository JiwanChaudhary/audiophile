import React from "react";
import {
  Wrapper,
  ImageWrapper,
  ImageWrapperOne,
  ImageOne,
  ImageTwo,
  ImageThree,
} from "./HeadphoneImage.styled";

import BeatGear from "../../../images/xxbeatgear.jpg";
import Swag from "../../../images/xxswag.jpg";
import XHeadphone from "../../../images/xxheadphone.jpg";

const HeadphoneImage = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <ImageWrapperOne>
          <ImageOne src={BeatGear} />
          <ImageTwo src={Swag} />
        </ImageWrapperOne>
        <ImageThree src={XHeadphone} />
      </ImageWrapper>
    </Wrapper>
  );
};

export default HeadphoneImage;
