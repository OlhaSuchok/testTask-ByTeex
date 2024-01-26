import MainButton from "../MainButton/MainButton";
import StarList from "../StarList/StarList";

import {
  RatingBlockWrapper,
  RatingWrapper,
  RatingText,
} from "./RatingBlock.styled";

export default function RatingBlock({ test }) {
  return (
    <RatingBlockWrapper>
      <MainButton />
      <RatingWrapper>
        <StarList />
        <RatingText>{test}</RatingText>
      </RatingWrapper>
    </RatingBlockWrapper>
  );
}
