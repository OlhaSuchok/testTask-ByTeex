import styled from "@emotion/styled";

export const RatingBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const StarList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  padding-left: 0;

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

export const RatingText = styled.p`
  margin: 0;

  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.suisseRegular};
  line-height: 1.7;

  color: #828282;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;
