import React from "react";
import {
  Zspeaker,
  ZxspeakerImage,
  Zxtext,
  Zxheading,
  Span,
  Zxdescription,
  ZButton,
} from "../styled/SpeakerOne.styled";
import Speaker from "../../images/speaker.png";

const SpeakerOne = () => {
  return (
    <Zspeaker>
      <ZxspeakerImage src={Speaker}></ZxspeakerImage>
      <Zxtext>
        <Zxheading>
          <Span>ZX9</Span>
          <Span>SPEAKER</Span>
        </Zxheading>
        <Zxdescription>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound
        </Zxdescription>
        <ZButton>see product</ZButton>
      </Zxtext>
    </Zspeaker>
  );
};

export default SpeakerOne;
