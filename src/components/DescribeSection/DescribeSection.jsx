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

import {
  Section,
  DescribeText,
  ListNames,
  ListNamesItem,
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

export default function DescribeSection() {
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
        </ListNames>
      </DescribeNamesWrapper>

      <DescribeTextWrapper>
        <Title>Loungewear you can be proud of.</Title>
        <SliderWrapper>
          <SliderArrowWrapper>
            <ArrowLeftButton>
              <ArrowLeft />
            </ArrowLeftButton>
            <Slider>
              <source
                srcSet={`${imageDesctop1} 1x, ${imageDesctop2} 2x`}
                media="(min-width:1464px)"
              />
              <source
                srcSet={`${imageMobile1} 1x, ${imageMobile2} 2x`}
                media="(min-width:428px)"
              />
              <Image src={imageMobile2} loading="lazy" alt="Girl"></Image>
            </Slider>
            <ArrowRightButton>
              <ArrowRight />
            </ArrowRightButton>
          </SliderArrowWrapper>
          <SliderName>Slider name</SliderName>
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
