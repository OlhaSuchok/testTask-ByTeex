import styled from "@emotion/styled";

export const StarListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  padding-left: 0;

  margin: 0;

  &:not(:last-child) {
    margin-right: 3px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const StarWrapper = styled.li`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;
