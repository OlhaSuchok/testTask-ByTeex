import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 52px;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 0;
  margin-bottom: 25px;

  font-size: 26px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.3;

  color: ${({ theme }) => theme.colors.MAIN_ACCENT_TEXT_COLOR};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const QuestionList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 349px;

  margin-bottom: 39px;
  margin-top: 0;

  padding-left: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const QuestionListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding-top: 22px;
  padding-bottom: 22px;

  border-bottom: 1px solid #c4c4c4;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const QuestionListItemText = styled.p`
  margin-top: 0;
  margin-bottom: 0;

  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.3;

  color: ${({ theme }) => theme.colors.MAIN_ACCENT_TEXT_COLOR};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const QuestionListItemPlusWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;
