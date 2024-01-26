import RatingBlock from "components/common/RatingBlock/RatingBlock";

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
            // width={"100px"}
            // height={"150px"}
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
            // width={"140px"}
            // height={"211px"}
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
            // width={"100px"}
            // height={"150px"}
          ></SideImage>
        </ThirdImageWrapper>

        <FirstTransparentBlock></FirstTransparentBlock>
        <SecondTransparentBlock></SecondTransparentBlock>
      </ImagesGroup>
      <RatingBlock test={"Over 500+ 5 Star Reviews Online"} />
    </Container>
  );
}
