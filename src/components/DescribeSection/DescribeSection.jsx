import { useState } from "react";

import RatingBlock from "components/common/RatingBlock/RatingBlock";

import Eco from "images/describeIcons/Eco/Eco";
import Sun from "images/heroIcons/Sun/Sun";
import Wave from "images/heroIcons/Wave/Wave";
import Cloud from "images/heroIcons/Cloud/Cloud";
import Leaf from "images/heroIcons/Leaf/Leaf";
import ArrowLeft from "images/contentIcons/ArrowLeft/ArrowLeft";
import ArrowRight from "images/contentIcons/ArrowRight/ArrowRight";

import imageMobile1 from "../../images/pictures/describeSection/image1x@-428.jpg";
import imageMobile2 from "../../images/pictures/describeSection/image2x@-428.jpg";
import imageDesctop1 from "../../images/pictures/describeSection/image1x@-1464.jpg";
import imageDesctop2 from "../../images/pictures/describeSection/image2x@-1464.jpg";
import firstImageDesctop1 from "../../images/pictures/heroSection/1image1x@-1464.jpg";
import firstImageDesctop2 from "../../images/pictures/heroSection/1image2x@-1464.jpg";
import firstImageMobile1 from "../../images/pictures/heroSection/1image1x@-428.jpg";
import firstImageMobile2 from "../../images/pictures/heroSection/1image2x@-428.jpg";
import thirdImageDesctop1 from "../../images/pictures/heroSection/3image1x@-1464.jpg";
import thirdImageDesctop2 from "../../images/pictures/heroSection/3image2x@-1464.jpg";
import thirdImageMobile1 from "../../images/pictures/heroSection/3image1x@-428.jpg";
import thirdImageMobile2 from "../../images/pictures/heroSection/3image2x@-428.jpg";

import {
  Section,
  DescribeText,
  ListNames,
  ListNamesItem,
  ListNamesMobile,
  ListNamesItemMobile,
  ListNamesItemMobileText,
  Title,
  Slider,
  SliderWrapper,
  SliderName,
  Image,
  ListBenefits,
  ListBenefitsItem,
  ListBenefitsIconWrapper,
  ListBenefitsMainText,
  ListBenefitsText,
  DescribeTextWrapper,
  DescribeNamesWrapper,
  ListBenefitsBlockWrapper,
  RatingBlockWrapper,
  SliderArrowWrapper,
  ArrowLeftButton,
  ArrowRightButton,
} from "./DescribeSection.styled";
import PaginationLogoButton from "components/common/PaginationLogoButton/PaginationLogoButton";

export default function DescribeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIdx, setStartIdx] = useState(0);
  const [isPrevButtonLogoClicked, setIsPrevButtonClicked] = useState(false);
  const [isNextButtonLogoClicked, setIsNextButtonClicked] = useState(false);

  const data = [
    {
      title: "White robe",
      mobile: imageMobile1,
      retinaMobile: imageMobile2,
      desktop: imageDesctop1,
      retinaDesctop: imageDesctop2,
    },
    {
      title: "Olive robe",
      mobile: firstImageMobile1,
      retinaMobile: firstImageMobile2,
      desktop: firstImageDesctop1,
      retinaDesctop: firstImageDesctop2,
    },
    {
      title: "Whitesmoke robe",
      mobile: thirdImageMobile1,
      retinaMobile: thirdImageMobile2,
      desktop: thirdImageDesctop1,
      retinaDesctop: thirdImageDesctop2,
    },
  ];

  const logos = [
    "ECO-STYLIST",
    "THE ECO HUB",
    "CANADIAN",
    "JILLIAN HARRIS",
    "TREND HUNTER",
    "ECO-STYLIST",
    "THE ECO HUB",
    "CANADIAN",
    "JILLIAN HARRIS",
    "TREND HUNTER",
  ];

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const handleLogoNextClick = () => {
    setStartIdx((prevStartIdx) => (prevStartIdx + 1) % logos.length);
    setIsNextButtonClicked(true);
    setIsPrevButtonClicked(false);
  };

  const handleLogoPrevClick = () => {
    setStartIdx(
      (prevStartIdx) => (prevStartIdx - 1 + logos.length) % logos.length
    );

    setIsNextButtonClicked(false);
    setIsPrevButtonClicked(true);
  };

  return (
    <Section>
      <DescribeNamesWrapper>
        <DescribeText>as seen in</DescribeText>
        <ListNames>
          <ListNamesItem>
            <Eco />
          </ListNamesItem>
          <ListNamesItem>
            <Eco />
          </ListNamesItem>
          <ListNamesItem>
            <Eco />
          </ListNamesItem>
          <ListNamesItem>
            <Eco />
          </ListNamesItem>
          <ListNamesItem>
            <Eco />
          </ListNamesItem>
        </ListNames>

        <ListNamesMobile>
          {logos.slice(startIdx, startIdx + 1).map((svg, index) => (
            <ListNamesItemMobile key={index}>
              <ListNamesItemMobileText>{svg}</ListNamesItemMobileText>
            </ListNamesItemMobile>
          ))}
        </ListNamesMobile>

        <PaginationLogoButton
          mb={"20px"}
          onPrevClick={handleLogoPrevClick}
          onNextClick={handleLogoNextClick}
          nextClick={isNextButtonLogoClicked}
          prevClick={isPrevButtonLogoClicked}
        />
      </DescribeNamesWrapper>

      <DescribeTextWrapper>
        <Title>Loungewear you can be proud of.</Title>
        <SliderWrapper>
          <SliderArrowWrapper>
            <ArrowLeftButton type="button" onClick={handlePrevClick}>
              <ArrowLeft />
            </ArrowLeftButton>

            <Slider>
              <source
                srcSet={`${data[currentIndex].desktop} 1x, ${data[currentIndex].retinaDesctop} 2x`}
                media="(min-width:1464px)"
              />
              <source
                srcSet={`${data[currentIndex].mobile} 1x, ${data[currentIndex].retinaMobile} 2x`}
                media="(min-width:428px)"
              />
              <Image
                src={data[currentIndex].retinaMobile}
                loading="lazy"
                alt="Girl"
              ></Image>
            </Slider>

            <ArrowRightButton type="button" onClick={handleNextClick}>
              <ArrowRight />
            </ArrowRightButton>
          </SliderArrowWrapper>
          <SliderName>{data[currentIndex].title}</SliderName>
        </SliderWrapper>

        <ListBenefits>
          <ListBenefitsItem>
            <ListBenefitsBlockWrapper>
              <ListBenefitsIconWrapper>
                <Sun />
              </ListBenefitsIconWrapper>
              <ListBenefitsMainText>Ethically sourced.</ListBenefitsMainText>
            </ListBenefitsBlockWrapper>
            <ListBenefitsText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
              felis finibus consequat.
            </ListBenefitsText>
          </ListBenefitsItem>

          <ListBenefitsItem>
            <ListBenefitsBlockWrapper>
              <ListBenefitsIconWrapper>
                <Cloud />
              </ListBenefitsIconWrapper>
              <ListBenefitsMainText>Responsibly made.</ListBenefitsMainText>
            </ListBenefitsBlockWrapper>
            <ListBenefitsText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
              felis finibus consequat.
            </ListBenefitsText>
          </ListBenefitsItem>

          <ListBenefitsItem>
            <ListBenefitsBlockWrapper>
              <ListBenefitsIconWrapper>
                <Wave />
              </ListBenefitsIconWrapper>
              <ListBenefitsMainText>Made for living in.</ListBenefitsMainText>
            </ListBenefitsBlockWrapper>
            <ListBenefitsText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
              felis finibus consequat.
            </ListBenefitsText>
          </ListBenefitsItem>

          <ListBenefitsItem>
            <ListBenefitsBlockWrapper>
              <ListBenefitsIconWrapper>
                <Leaf />
              </ListBenefitsIconWrapper>
              <ListBenefitsMainText>
                Unimaginably comfortable.
              </ListBenefitsMainText>
            </ListBenefitsBlockWrapper>
            <ListBenefitsText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
              felis finibus consequat.
            </ListBenefitsText>
          </ListBenefitsItem>
        </ListBenefits>
      </DescribeTextWrapper>
      <RatingBlockWrapper>
        <RatingBlock test={"Over 500+ 5 Star Reviews Online"} />
      </RatingBlockWrapper>
    </Section>
  );
}
