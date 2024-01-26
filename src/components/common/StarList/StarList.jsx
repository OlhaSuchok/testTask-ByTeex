import Star from "images/describeIcons/Star/Star";

import { StarListWrapper, StarWrapper } from "./StarList.styled";

export default function StarList() {
  return (
    <StarListWrapper>
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
    </StarListWrapper>
  );
}
