import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 30px;
  padding-left: 46px;
  padding-right: 46px;
  padding-bottom: 54px;

  background-color: ${({ theme }) => theme.colors.ACCENT_BACKGROUND_COLOR};
`;

export const Title = styled.h2`
  text-align: center;

  margin-top: 0;
  margin-bottom: 20px;

  font-size: 26px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.5;

  color: #2a2996;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;

  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.5;

  color: #6c6c6c;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;
