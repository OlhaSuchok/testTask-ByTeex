import Eco from "images/DescribeIcons/Eco/Eco";
import Canadian from "images/DescribeIcons/Canadian/Canadian";
import Jillians from "images/DescribeIcons/Jillians/Jillians";
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
  SliderWrapper,
  SliderName,
  ListBenefits,
  ListBenefitsItem,
  ListBenefitsIconWrapper,
  ListBenefitsMainText,
  ListBenefitsText,
} from "./DescribeSection.styled";

export default function DescribeSection() {
  return (
    <Section>
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

      <Pagination>pagination</Pagination>
      <Title>Loungewear you can be proud of.</Title>
      <SliderWrapper>
        <div>Slider</div>
        <SliderName>Slider name</SliderName>
      </SliderWrapper>
      <ListBenefits>
        <ListBenefitsItem>
          <ListBenefitsIconWrapper>
            <Cloud />
          </ListBenefitsIconWrapper>
          <ListBenefitsMainText>Ethically sourced.</ListBenefitsMainText>
          <ListBenefitsText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat.
          </ListBenefitsText>
        </ListBenefitsItem>

        <ListBenefitsItem>
          <ListBenefitsIconWrapper>
            <Sun />
          </ListBenefitsIconWrapper>
          <ListBenefitsMainText>Responsibly made.</ListBenefitsMainText>
          <ListBenefitsText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat.
          </ListBenefitsText>
        </ListBenefitsItem>

        <ListBenefitsItem>
          <ListBenefitsIconWrapper>
            <Leaf />
          </ListBenefitsIconWrapper>
          <ListBenefitsMainText>Made for living in.</ListBenefitsMainText>
          <ListBenefitsText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat.
          </ListBenefitsText>
        </ListBenefitsItem>

        <ListBenefitsItem>
          <ListBenefitsIconWrapper>
            <Wave />
          </ListBenefitsIconWrapper>
          <ListBenefitsMainText>Unimaginably comfortable.</ListBenefitsMainText>
          <ListBenefitsText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat.
          </ListBenefitsText>
        </ListBenefitsItem>
      </ListBenefits>
      <RatingBlock test={"Over 500+ 5 Star Reviews Online"} />
    </Section>
  );
}
