import RatingBlock from "components/common/RatingBlock/RatingBlock";
import { Container, Title, Text } from "./Footer.styled";

export default function Footer() {
  return (
    <Container>
      <Title>Find something you love.</Title>
      <Text>Click below to browse our collection!</Text>
      <p>SLIDER</p>
      <RatingBlock test={"Over 500+ 5 Star Reviews Online"} />
    </Container>
  );
}
