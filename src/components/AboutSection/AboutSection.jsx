import {
  Section,
  Title,
  ImagesWrapper,
  FirstImageWrapper,
  CenterImageWrapper,
  ThirdImageWrapper,
  Text,
  TextWrapper,
  RatingBlockWrapper,
} from "./AboutSection.styled";

import firstImageMobile1 from "../../images/pictures/aboutSection/about-a1x@-428.jpg";
import firstImageMobile2 from "../../images/pictures/aboutSection/about-a2x@-428.jpg";

import firstImageDesctop1 from "../../images/pictures/aboutSection/about-a1x@-1464.jpg";
import firstImageDesctop2 from "../../images/pictures/aboutSection/about-a2x@-1464.jpg";

import secondImageMobile1 from "../../images/pictures/aboutSection/about-b1x@-428.jpg";
import secondImageMobile2 from "../../images/pictures/aboutSection/about-b2x@-428.jpg";

import secondImageDesctop1 from "../../images/pictures/aboutSection/about-b1x@-1464.jpg";
import secondImageDesctop2 from "../../images/pictures/aboutSection/about-b2x@-1464.jpg";

import thirdImageMobile1 from "../../images/pictures/aboutSection/about-c1x@-428.jpg";
import thirdImageMobile2 from "../../images/pictures/aboutSection/about-c2x@-428.jpg";

import thirdImageDesctop1 from "../../images/pictures/aboutSection/about-c1x@-1464.jpg";
import thirdImageDesctop2 from "../../images/pictures/aboutSection/about-c2x@-1464.jpg";

import RatingBlock from "components/common/RatingBlock/RatingBlock";

export default function AboutSection() {
  return (
    <Section>
      <Title>Be your best self.</Title>
      <ImagesWrapper>
        <FirstImageWrapper>
          <picture>
            <source
              srcSet={`${firstImageDesctop1} 1x, ${firstImageDesctop2} 2x`}
              media="(min-width:1464px)"
            />
            <source
              srcSet={`${firstImageMobile1} 1x, ${firstImageMobile2} 2x`}
              media="(min-width:428px)"
            />
            <img src={firstImageMobile2} loading="lazy" alt="Girl"></img>
          </picture>
        </FirstImageWrapper>

        <CenterImageWrapper>
          <picture>
            <source
              srcSet={`${secondImageDesctop1} 1x, ${secondImageDesctop2} 2x`}
              media="(min-width:1464px)"
            />
            <source
              srcSet={`${secondImageMobile1} 1x, ${secondImageMobile2} 2x`}
              media="(min-width:428px)"
            />
            <img src={secondImageMobile2} loading="lazy" alt="Girl"></img>
          </picture>
        </CenterImageWrapper>

        <ThirdImageWrapper>
          <picture>
            <source
              srcSet={`${thirdImageDesctop1} 1x, ${thirdImageDesctop2} 2x`}
              media="(min-width:1464px)"
            />
            <source
              srcSet={`${thirdImageMobile1} 1x, ${thirdImageMobile2} 2x`}
              media="(min-width:428px)"
            />
            <img src={thirdImageMobile2} loading="lazy" alt="Girl"></img>
          </picture>
        </ThirdImageWrapper>
      </ImagesWrapper>

      <TextWrapper>
        <Text>
          Hi! My name’s [Insert Name], and I founded [Insert] in ____. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
          sapien facilisis tincidunt pellentesque.
          <pre />
          In eget ipsum et felis finibus consequat. Fusce non nibh luctus,
          dignissim risus quis, bibendum dolor.
          <pre />
          Donec placerat volutpat ligula, ac consectetur felis varius non.
          Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est.
          <pre />
          Vivamus id arcu congue, faucibus libero nec, placerat ligula. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Sed eu nisl a metus ultrices sodales. Fusce non ante
          velit.
          <pre />
          Sed auctor odio eu semper molestie. Nam mattis, sapien eget lobortis
          fringilla, eros ipsum tristique tellus, ac convallis urna massa at
          nibh.
          <pre />
          Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod
          leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in
          sapien. Cras mattis varius mollis.
        </Text>
        <RatingBlockWrapper>
          <RatingBlock test={"Over 500+ 5 Star Reviews Online"} />
        </RatingBlockWrapper>
      </TextWrapper>
    </Section>
  );
}
