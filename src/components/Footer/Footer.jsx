import RatingBlock from "components/common/RatingBlock/RatingBlock";

import Clock from "images/footer/Clock/Clock";
import Car from "images/footer/Car/Car";
import Basket from "images/footer/Basket/Basket";
import Safe from "images/footer/Safe/Safe";

import firstImageDesctop1 from "../../images/pictures/footerSection/1image1x@-1464.jpg";
import firstImageDesctop2 from "../../images/pictures/footerSection/1image2x@-1464.jpg";

import firstImageMobile1 from "../../images/pictures/footerSection/1image1x@-428.jpg";
import firstImageMobile2 from "../../images/pictures/footerSection/1image2x@-428.jpg";

import secondImageDesctop1 from "../../images/pictures/footerSection/2image1x@-1464.jpg";
import secondImageDesctop2 from "../../images/pictures/footerSection/2image2x@-1464.jpg";

import secondImageMobile1 from "../../images/pictures/footerSection/2image1x@-428.jpg";
import secondImageMobile2 from "../../images/pictures/footerSection/2image2x@-428.jpg";

import thirdImageDesctop1 from "../../images/pictures/footerSection/3image1x@-1464.jpg";
import thirdImageDesctop2 from "../../images/pictures/footerSection/3image2x@-1464.jpg";

import thirdImageMobile1 from "../../images/pictures/footerSection/3image1x@-428.jpg";
import thirdImageMobile2 from "../../images/pictures/footerSection/3image2x@-428.jpg";

import {
  Container,
  Title,
  Text,
  ImagesGroup,
  FirstImageWrapper,
  SecondImageWrapper,
  ThirdImageWrapper,
  FirstTransparentBlock,
  SecondTransparentBlock,
  SideImage,
  CenterImage,
  LinksTextWrapper,
  LinksText,
  InfoList,
  InfoItem,
  InfoIconWrapper,
  InfoMainText,
} from "./Footer.styled";

export default function Footer() {
  return (
    <Container>
      <Title>Find something you love.</Title>
      <Text>Click below to browse our collection!</Text>
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
      <RatingBlock test={"Over 500+ 5 Star Reviews Online"} />
      <LinksTextWrapper>
        <Clock />
        <LinksText>Ships in 1-2 Days</LinksText>
      </LinksTextWrapper>
      <InfoList>
        <InfoList>
          <InfoItem>
            <InfoIconWrapper>
              <Car />
            </InfoIconWrapper>
            <InfoMainText>FREE Shipping on Orders over $200</InfoMainText>
          </InfoItem>

          <InfoItem>
            <InfoIconWrapper>
              <Safe />
            </InfoIconWrapper>
            <InfoMainText>Over 500+ 5 Star Reviews Online</InfoMainText>
          </InfoItem>

          <InfoItem>
            <InfoIconWrapper>
              <Basket />
            </InfoIconWrapper>
            <InfoMainText>Made ethically and responsibly.</InfoMainText>
          </InfoItem>
        </InfoList>
      </InfoList>
    </Container>
  );
}
