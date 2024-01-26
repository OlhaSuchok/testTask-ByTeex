import Logo from "images/icons/Logo/Logo";
import GalleryList from "./GalleryList/GalleryList";
import Sun from "images/HeroIcons/Sun/Sun";
import Basket from "images/HeroIcons/Basket/Basket";
import Wave from "images/HeroIcons/Wave/Wave";
import MainButton from "components/common/MainButton/MainButton";

import {
  Section,
  MainText,
  DescriptionList,
  DescriptionItem,
  DescriptionIconWrapper,
  DescriptionText,
} from "./HeroSection.styled";

export default function HeroSection() {
  return (
    <Section>
      <Logo />
      <MainText>Don’t apologize for being comfortable.</MainText>
      <GalleryList />
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
