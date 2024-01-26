import Eco from "images/DescribeIcons/Eco/Eco";
// import Canadian from "images/DescribeIcons/Canadian/Canadian";
// import Jillians from "images/DescribeIcons/Jillians/Jillians";
import Sun from "images/HeroIcons/Sun/Sun";
import Wave from "images/HeroIcons/Wave/Wave";
import Cloud from "images/HeroIcons/Cloud/Cloud";
import Leaf from "images/HeroIcons/Leaf/Leaf";
import RatingBlock from "components/common/RatingBlock/RatingBlock";

import {
  Section,
  DescribeText,
  ListNames,
  ListNamesItem,
  Pagination,
  Title,
  Slider,
  SliderWrapper,
  SliderName,
  ListBenefits,
  ListBenefitsItem,
  ListBenefitsIconWrapper,
  ListBenefitsMainText,
  ListBenefitsText,
  DescribeTextWrapper,
  DescribeNamesWrapper,
  ListBenefitsBlockWrapper,
  RatingBlockWrapper,
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

      <Pagination>pagination</Pagination>

      <DescribeTextWrapper>
        <Title>Loungewear you can be proud of.</Title>
        <SliderWrapper>
          <Slider></Slider>
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
