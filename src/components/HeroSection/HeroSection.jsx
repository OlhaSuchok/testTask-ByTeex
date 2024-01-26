import MainButton from "components/common/MainButton/MainButton";

import Logo from "images/commonIcons/Logo/Logo";
import Sun from "images/heroIcons/Sun/Sun";
import Basket from "images/heroIcons/Basket/Basket";
import Wave from "images/heroIcons/Wave/Wave";

import {
  Section,
  MainText,
  DescriptionList,
  DescriptionItem,
  DescriptionIconWrapper,
  DescriptionText,
  LogoTitleWrapper,
  LogoWrapper,
  Gallery,
} from "./HeroSection.styled";

export default function HeroSection() {
  return (
    <Section>
      <LogoTitleWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <MainText>Don’t apologize for being comfortable.</MainText>
      </LogoTitleWrapper>
      <Gallery></Gallery>
      {/* <ImageSlider /> */}
      <DescriptionList>
        <DescriptionItem>
          <DescriptionIconWrapper>
            <Sun />
          </DescriptionIconWrapper>
          <DescriptionText>
            Beautiful, comfortable loungewear for day or night.
          </DescriptionText>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionIconWrapper>
            <Basket />
          </DescriptionIconWrapper>
          <DescriptionText>
            No wasteful extras, like tags or plastic packaging.
          </DescriptionText>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionIconWrapper>
            <Wave />
          </DescriptionIconWrapper>
          <DescriptionText>
            Our signature fabric is incredibly comfortable — unlike anything
            you’ve ever felt.
          </DescriptionText>
        </DescriptionItem>
      </DescriptionList>
      <MainButton />
    </Section>
  );
}
