import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 13px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const MainText = styled.h2`
  text-align: center;
  margin-top: 16px;
  margin-bottom: 17px;

  font-size: 26px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.3;

  color: ${({ theme }) => theme.colors.MAIN_ACCENT_TEXT_COLOR};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const DescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 380px;

  padding: 0;
  margin-top: 0;
  margin-bottom: 30px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const DescriptionItem = styled.li`
  display: flex;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 26px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const DescriptionIconWrapper = styled.div`
  margin-right: 15px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-right: 10px;
  }
`;

export const DescriptionText = styled.p`
  margin: 0;

  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.4;

  color: ${({ theme }) => theme.colors.MAIN_TEXT_COLOR};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;
