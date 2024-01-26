import styled from "@emotion/styled";

export const Section = styled.section`
  position: relative;
  padding-top: 30px;
  padding-left: 46px;
  padding-right: 46px;
  padding-bottom: 54px;

  margin-left: auto;
  margin-right: auto;

  background-color: ${({ theme }) => theme.colors.ACCENT_BACKGROUND_COLOR};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme }) => theme.breakpoints.mobile};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: ${({ theme }) => theme.breakpoints.desktop};
  }
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

export const ImagesWrapper = styled.div`
  height: 362px;

  margin-bottom: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const FirstImageWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 80px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const CenterImageWrapper = styled.div`
  position: absolute;
  top: 110px;
  left: 90px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const ThirdImageWrapper = styled.div`
  position: absolute;
  top: 340px;
  right: 60px;
  z-index: 1;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const Text = styled.div`
  margin-top: 0;
  margin-bottom: 0;

  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.5;

  color: #6c6c6c;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;
