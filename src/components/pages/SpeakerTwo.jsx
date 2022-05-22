import React from "react";
import {
  Speaker,
  SpeakerTwoText,
  SpeakerTwoHeading,
  SpeakerTwoButton,
  SpeakerTwoImage,
} from "./SpeakerTwo.styled";

import ZSpeakerTwo from "../../images/zx7speaker.png";

const SpeakerTwo = () => {
  return (
    <Speaker>
      <SpeakerTwoText>
        <SpeakerTwoHeading>ZX7 SPEAKER</SpeakerTwoHeading>
        <SpeakerTwoButton>see product</SpeakerTwoButton>
      </SpeakerTwoText>
      <SpeakerTwoImage src={ZSpeakerTwo} />
    </Speaker>
  );
};

export default SpeakerTwo;
