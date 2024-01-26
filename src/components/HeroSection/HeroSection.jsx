import MainButton from "components/common/MainButton/MainButton";

import Logo from "images/commonIcons/Logo/Logo";
import Sun from "images/heroIcons/Sun/Sun";
import Basket from "images/heroIcons/Basket/Basket";
import Wave from "images/heroIcons/Wave/Wave";

import firstImageDesctop1 from "../../images/pictures/heroSection/1image1x@-1464.jpg";
import firstImageDesctop2 from "../../images/pictures/heroSection/1image2x@-1464.jpg";
import firstImageMobile1 from "../../images/pictures/heroSection/1image1x@-428.jpg";
import firstImageMobile2 from "../../images/pictures/heroSection/1image2x@-428.jpg";
import secondImageDesctop1 from "../../images/pictures/heroSection/2image1x@-1464.jpg";
import secondImageDesctop2 from "../../images/pictures/heroSection/2image2x@-1464.jpg";
import secondImageMobile1 from "../../images/pictures/heroSection/2image1x@-428.jpg";
import secondImageMobile2 from "../../images/pictures/heroSection/2image2x@-428.jpg";
import thirdImageDesctop1 from "../../images/pictures/heroSection/3image1x@-1464.jpg";
import thirdImageDesctop2 from "../../images/pictures/heroSection/3image2x@-1464.jpg";
import thirdImageMobile1 from "../../images/pictures/heroSection/3image1x@-428.jpg";
import thirdImageMobile2 from "../../images/pictures/heroSection/3image2x@-428.jpg";

import {
  Section,
  MainText,
  DescriptionList,
  DescriptionItem,
  DescriptionIconWrapper,
  DescriptionText,
  LogoTitleWrapper,
  LogoWrapper,
  ImagesGroup,
  FirstImageWrapper,
  SecondImageWrapper,
  ThirdImageWrapper,
  FirstTransparentBlock,
  SecondTransparentBlock,
  SideImage,
  CenterImage,
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
      <ImagesGroup>
        <FirstImageWrapper>
          <source
            srcSet={`${thirdImageDesctop1} 1x, ${thirdImageDesctop2} 2x`}
            media="(min-width:1464px)"
          />
          <source
            srcSet={`${thirdImageMobile1} 1x, ${thirdImageMobile2} 2x`}
            media="(min-width:428px)"
          />
          <SideImage
            src={thirdImageMobile2}
            loading="lazy"
            alt="Girl"
          ></SideImage>
        </FirstImageWrapper>

        <SecondImageWrapper>
          <source
            srcSet={`${secondImageDesctop1} 1x, ${secondImageDesctop2} 2x`}
            media="(min-width:1464px)"
          />
          <source
            srcSet={`${secondImageMobile1} 1x, ${secondImageMobile2} 2x`}
            media="(min-width:428px)"
          />
          <CenterImage
            src={secondImageMobile2}
            loading="lazy"
            alt="Girl"
          ></CenterImage>
        </SecondImageWrapper>

        <ThirdImageWrapper>
          <source
            srcSet={`${firstImageDesctop1} 1x, ${firstImageDesctop2} 2x`}
            media="(min-width:1464px)"
          />
          <source
            srcSet={`${firstImageMobile1} 1x, ${firstImageMobile2} 2x`}
            media="(min-width:428px)"
          />
          <SideImage
            src={firstImageMobile2}
            loading="lazy"
            alt="Girl"
          ></SideImage>
        </ThirdImageWrapper>

        <FirstTransparentBlock></FirstTransparentBlock>
        <SecondTransparentBlock></SecondTransparentBlock>
      </ImagesGroup>

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
