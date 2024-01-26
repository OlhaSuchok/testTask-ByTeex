import RatingBlock from "components/common/RatingBlock/RatingBlock";

import Plus from "images/commonIcons/Plus/Plus";

import firstImageDesctop1 from "../../images/pictures/faqSection/1image1x@-1464.jpg";
import firstImageDesctop2 from "../../images/pictures/faqSection/1image2x@-1464.jpg";
import secondImageDesctop1 from "../../images/pictures/faqSection/2image1x@-1464.jpg";
import secondImageDesctop2 from "../../images/pictures/faqSection/2image2x@-1464.jpg";
import thirdImageDesctop1 from "../../images/pictures/faqSection/3image1x@-1464.jpg";
import thirdImageDesctop2 from "../../images/pictures/faqSection/3image2x@-1464.jpg";

import {
  Section,
  Title,
  QuestionList,
  QuestionListItem,
  QuestionListItemText,
  QuestionListItemPlusWrapper,
  QuestionListWrapper,
  RatingBlockWrapper,
  ImagesBlockWrapper,
  ImagesGroup,
  FirstImageWrapper,
  SecondImageWrapper,
  ThirdImageWrapper,
  FirstTransparentBlock,
  SecondTransparentBlock,
} from "./QuestionSection.styled";

export default function QuestionSection() {
  return (
    <Section>
      <QuestionListWrapper>
        <Title>Frequently asked questions.</Title>
        <QuestionList>
          <QuestionListItem>
            <QuestionListItemText>
              lorem ipsum dolor sit amet
            </QuestionListItemText>
            <QuestionListItemPlusWrapper>
              <Plus />
            </QuestionListItemPlusWrapper>
          </QuestionListItem>

          <QuestionListItem>
            <QuestionListItemText>
              lorem ipsum dolor sit amet
            </QuestionListItemText>
            <QuestionListItemPlusWrapper>
              <Plus />
            </QuestionListItemPlusWrapper>
          </QuestionListItem>

          <QuestionListItem>
            <QuestionListItemText>
              lorem ipsum dolor sit amet
            </QuestionListItemText>
            <QuestionListItemPlusWrapper>
              <Plus />
            </QuestionListItemPlusWrapper>
          </QuestionListItem>

          <QuestionListItem>
            <QuestionListItemText>
              lorem ipsum dolor sit amet
            </QuestionListItemText>
            <QuestionListItemPlusWrapper>
              <Plus />
            </QuestionListItemPlusWrapper>
          </QuestionListItem>

          <QuestionListItem>
            <QuestionListItemText>
              lorem ipsum dolor sit amet
            </QuestionListItemText>
            <QuestionListItemPlusWrapper>
              <Plus />
            </QuestionListItemPlusWrapper>
          </QuestionListItem>

          <QuestionListItem>
            <QuestionListItemText>
              lorem ipsum dolor sit amet
            </QuestionListItemText>
            <QuestionListItemPlusWrapper>
              <Plus />
            </QuestionListItemPlusWrapper>
          </QuestionListItem>
        </QuestionList>
      </QuestionListWrapper>
      <ImagesBlockWrapper>
        <ImagesGroup>
          <FirstImageWrapper>
            <source
              srcSet={`${firstImageDesctop1} 1x, ${firstImageDesctop2} 2x`}
              media="(min-width:1464px)"
            />
            <source
              srcSet={`${firstImageDesctop1} 1x, ${firstImageDesctop2} 2x`}
              media="(min-width:428px)"
            />
            <img
              src={firstImageDesctop2}
              loading="lazy"
              alt="Girl"
              width={"167px"}
              height={"253px"}
            ></img>
          </FirstImageWrapper>

          <SecondImageWrapper>
            <source
              srcSet={`${secondImageDesctop1} 1x, ${secondImageDesctop2} 2x`}
              media="(min-width:1464px)"
            />
            <source
              srcSet={`${secondImageDesctop1} 1x, ${secondImageDesctop2} 2x`}
              media="(min-width:428px)"
            />
            <img
              src={secondImageDesctop2}
              loading="lazy"
              alt="Girl"
              width={"227px"}
              height={"355px"}
            ></img>
          </SecondImageWrapper>

          <ThirdImageWrapper>
            <source
              srcSet={`${thirdImageDesctop1} 1x, ${thirdImageDesctop2} 2x`}
              media="(min-width:1464px)"
            />
            <source
              srcSet={`${thirdImageDesctop1} 1x, ${thirdImageDesctop2} 2x`}
              media="(min-width:428px)"
            />
            <img
              src={thirdImageDesctop2}
              loading="lazy"
              alt="Girl"
              width={"216px"}
              height={"159px"}
            ></img>
          </ThirdImageWrapper>

          <FirstTransparentBlock></FirstTransparentBlock>
          <SecondTransparentBlock></SecondTransparentBlock>
        </ImagesGroup>
      </ImagesBlockWrapper>
      <RatingBlockWrapper>
        <RatingBlock test={"Over 500+ 5 Star Reviews Online"} />
      </RatingBlockWrapper>
    </Section>
  );
}
