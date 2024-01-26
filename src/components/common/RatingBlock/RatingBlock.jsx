import MainButton from "../MainButton/MainButton";
import Star from "images/DescribeIcons/Star/Star";

import {
  RatingBlockWrapper,
  RatingWrapper,
  StarList,
  StarWrapper,
  RatingText,
} from "./RatingBlock.styled";

export default function RatingBlock({ test }) {
  return (
    <RatingBlockWrapper>
      <MainButton />
      <RatingWrapper>
        <StarList>
          <StarWrapper>
            <Star />
          </StarWrapper>
          <StarWrapper>
            <Star />
          </StarWrapper>
          <StarWrapper>
            <Star />
          </StarWrapper>
          <StarWrapper>
            <Star />
          </StarWrapper>
          <StarWrapper>
            <Star />
          </StarWrapper>
        </StarList>
        <RatingText>{test}</RatingText>
      </RatingWrapper>
    </RatingBlockWrapper>
  );
}
