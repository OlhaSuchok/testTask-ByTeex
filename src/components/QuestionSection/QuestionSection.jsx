import { useState } from "react";

import RatingBlock from "components/common/RatingBlock/RatingBlock";
import Plus from "images/commonIcons/Plus/Plus";
import Minus from "images/commonIcons/Minus/Minus";

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
  QuestionListItemQuestion,
  QuestionListItemResponse,
  Button,
} from "./QuestionSection.styled";

export default function QuestionSection() {
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (questionIndex) => {
    if (openQuestions.includes(questionIndex)) {
      setOpenQuestions(
        openQuestions.filter((index) => index !== questionIndex)
      );
    } else {
      setOpenQuestions([...openQuestions, questionIndex]);
    }
  };

  return (
    <Section>
      <QuestionListWrapper>
        <Title>Frequently asked questions.</Title>
        <QuestionList>
          {[1, 2, 3, 4, 5, 6].map((questionIndex) => (
            <QuestionListItem key={questionIndex}>
              <QuestionListItemQuestion>
                <QuestionListItemText>
                  lorem ipsum dolor sit amet
                </QuestionListItemText>
                <QuestionListItemPlusWrapper>
                  <Button
                    type="button"
                    onClick={() => toggleQuestion(questionIndex)}
                  >
                    {openQuestions.includes(questionIndex) ? (
                      <Minus />
                    ) : (
                      <Plus />
                    )}
                  </Button>
                </QuestionListItemPlusWrapper>
              </QuestionListItemQuestion>
              {openQuestions.includes(questionIndex) && (
                <QuestionListItemResponse>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </QuestionListItemResponse>
              )}
            </QuestionListItem>
          ))}
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
