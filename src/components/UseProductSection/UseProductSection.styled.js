import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
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
