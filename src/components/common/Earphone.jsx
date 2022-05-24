import React from "react";
import {
  EarphoneDiv,
  EarphoneImage,
  EarphoneDes,
  EarphoneHeading,
  EarphoneButton,
} from "../styled/Earphone.styled";

import EarphoneX from "../../images/earphonex.jpg";

const Earphone = () => {
  return (
    <EarphoneDiv>
      <EarphoneImage src={EarphoneX} />
      <EarphoneDes>
        <EarphoneHeading>YX1 EARPHONES</EarphoneHeading>
        <EarphoneButton>see product</EarphoneButton>
      </EarphoneDes>
    </EarphoneDiv>
  );
};

export default Earphone;
