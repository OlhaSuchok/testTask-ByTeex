import Drop from "images/Info/Drop/Drop";
import Cloud from "images/Info/Cloud/Cloud";

import {
  Section,
  Title,
  InfoList,
  InfoItem,
  InfoIconWrapper,
  InfoMainText,
  InfoText,
} from "./InfoSection.styled";

export default function InfoSection() {
  return (
    <Section>
      <Title>Our Total Green Impact</Title>
      <InfoList>
        <InfoItem>
          <InfoIconWrapper>
            <Cloud />
          </InfoIconWrapper>
          <InfoMainText>3,927 kg</InfoMainText>
          <InfoText>of CO2 saved</InfoText>
        </InfoItem>

        <InfoItem>
          <InfoIconWrapper>
            <Drop />
          </InfoIconWrapper>
          <InfoMainText>2,546,167 days</InfoMainText>
          <InfoText>of drinking water saved</InfoText>
        </InfoItem>
      </InfoList>
    </Section>
  );
}
