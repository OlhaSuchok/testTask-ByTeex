import styled from "@emotion/styled";

export const Section = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;

  padding: 30px 46px 46px 54px;
  margin-left: auto;
  margin-right: auto;

  background-color: ${({ theme }) => theme.colors.ACCENT_BACKGROUND_COLOR};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme }) => theme.breakpoints.mobile};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: ${({ theme }) => theme.breakpoints.desktop};

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    padding: 100px 100px 95px 100px;
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
    margin-bottom: 30px;
    padding-right: 355px;

    font-size: 32px;
  }
`;

export const ImagesWrapper = styled.div`
  height: 362px;
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: absolute;
    left: 0;

    height: 664px;
  }
`;

export const FirstImageWrapper = styled.div`
  position: absolute;
  top: 80px;

  z-index: 1;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: 0;
    left: 90px;
  }
`;

export const CenterImageWrapper = styled.div`
  position: absolute;
  top: 110px;
  left: 90px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: 55px;
    left: 150px;
  }
`;

export const ThirdImageWrapper = styled.div`
  position: absolute;
  top: 340px;
  right: 60px;

  z-index: 1;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: 500px;
    left: 445px;
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
    width: 600px;
    margin-bottom: 30px;
  }
`;

export const RatingBlockWrapper = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
  }
`;

export const TextWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
