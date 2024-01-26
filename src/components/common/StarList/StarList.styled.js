import styled from "@emotion/styled";

export const StarListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding-left: 0;

  list-style: none;

  &:not(:last-child) {
    margin-right: 3px;
  }
`;

export const StarWrapper = styled.li``;
