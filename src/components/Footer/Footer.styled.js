import styled from "@emotion/styled";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  padding-top: 52px;
  padding-bottom: 70px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 0;
  margin-bottom: 15px;

  font-size: 26px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.6;

  color: ${({ theme }) => theme.colors.MAIN_ACCENT_TEXT_COLOR};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const Text = styled.p`
  text-align: center;
  margin-top: 0;
  margin-bottom: 15px;

  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.6;

  color: ${({ theme }) => theme.colors.MAIN_TEXT_COLOR};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;
