import styled from "@emotion/styled";

export const RatingBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-top: 10px;
`;

export const RatingText = styled.p`
  margin: 0;

  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.suisseRegular};
  line-height: 1.7;

  color: #828282;
`;
