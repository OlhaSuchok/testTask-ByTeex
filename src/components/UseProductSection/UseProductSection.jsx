import RatingBlock from "components/common/RatingBlock/RatingBlock";
import { Section, Title, SlideWrapper } from "./UseProductSection.styled";

export default function UseProductSection() {
  return (
    <Section>
      <Title>Comfort made easy</Title>
      <SlideWrapper>SLIDE</SlideWrapper>
      <RatingBlock test={"Over 500+ 5 Star Reviews Online"} />
    </Section>
  );
}
