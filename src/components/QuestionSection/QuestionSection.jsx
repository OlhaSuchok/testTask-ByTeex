import Plus from "images/Plus/Plus";
import RatingBlock from "components/common/RatingBlock/RatingBlock";
import {
  Section,
  Title,
  QuestionList,
  QuestionListItem,
  QuestionListItemText,
  QuestionListItemPlusWrapper,
} from "./QuestionSection.styled";

export default function QuestionSection() {
  return (
    <Section>
      <Title>frequently asked questions.</Title>
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
      <RatingBlock test={"Over 500+ 5 Star Reviews Online"} />
    </Section>
  );
}
