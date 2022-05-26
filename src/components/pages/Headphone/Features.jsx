import React from "react";
import {
  Wrapper,
  FeaturesWrapper,
  MainFeatures,
  FeaturesHeading,
  Description,
  Box,
  BoxHeading,
  NameNumber,
  Number,
  Name,
  Paragraph,
} from "./Features.styled";

const Features = () => {
  return (
    <Wrapper>
      <FeaturesWrapper>
        <MainFeatures>
          <FeaturesHeading>FEATURES</FeaturesHeading>
          <Description>
            <Paragraph>
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you are taking a business call or just in your
              own personal space, the auto on/off or pause features ensure that
              you’ll never miss a beat.{" "}
            </Paragraph>
            <Paragraph>
              The advanced Active Noise Cancellation with built in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace, but quickly interact with your
              surroundings when you need to. Combined with Bluetooth 5.0
              compliant connectivity and 17 hour battery life, the XX99 MARK II
              headphones give you superior sound, cutting edge technology, and a
              modern design aesthetic.
            </Paragraph>
          </Description>
        </MainFeatures>
        <Box>
          <BoxHeading>IN THE BOX</BoxHeading>
          <NameNumber>
            <Number>
              <Paragraph>1x</Paragraph>
              <Paragraph>2x</Paragraph>
              <Paragraph>1x</Paragraph>
              <Paragraph>1x</Paragraph>
              <Paragraph>1x</Paragraph>
            </Number>
            <Name>
              <Paragraph>Headphone Unit</Paragraph>
              <Paragraph>Replacement Earcups</Paragraph>
              <Paragraph>User Manual</Paragraph>
              <Paragraph>3.5mm 5m Audio Cable</Paragraph>
              <Paragraph>Travel Bag</Paragraph>
            </Name>
          </NameNumber>
        </Box>
      </FeaturesWrapper>
    </Wrapper>
  );
};

export default Features;
