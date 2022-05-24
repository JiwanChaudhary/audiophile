import React from "react";
import {
  BeatGear,
  GearDes,
  GearDesHeading,
  GearDesHeadingSpan,
  GearDesHeadingSpanOne,
  GearDesText,
  GearDesImage,
} from "../styled/EarphoneDes.styled";
import BestGear from "../../images/beatgear.jpg";

const EarphoneDes = () => {
  return (
    <BeatGear>
      <GearDes>
        <GearDesHeading>BRINGING YOU THE</GearDesHeading>
        <GearDesHeadingSpan>
          <GearDesHeadingSpanOne>BEST</GearDesHeadingSpanOne>
          <GearDesHeadingSpanOne>AUDIO GEAR</GearDesHeadingSpanOne>
        </GearDesHeadingSpan>
        <GearDesText>
          Located at the heart of New York City. Audiophile is the premier store
          for high end headphones, earphones, speakers and audio accessories. We
          have a large showroom and luxury demonstration rooms available for you
          to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment
        </GearDesText>
      </GearDes>
      <GearDesImage src={BestGear} />
    </BeatGear>
  );
};

export default EarphoneDes;
