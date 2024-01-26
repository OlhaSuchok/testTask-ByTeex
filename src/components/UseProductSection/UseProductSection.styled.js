import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;

  margin-left: auto;
  margin-right: auto;

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

  font-size: 26px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.5;

  color: #676869;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const SlideWrapper = styled.div`
  margin-bottom: 50px;
`;
