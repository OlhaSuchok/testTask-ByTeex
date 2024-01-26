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

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme }) => theme.breakpoints.mobile};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: relative;
    padding-top: 33px;
    padding-left: 100px;
    padding-right: 100px;
    width: ${({ theme }) => theme.breakpoints.desktop};

    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
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
    text-align: left;
    margin-bottom: 50px;
    font-size: 38px;

    width: 500px;
  }
`;

export const Gallery = styled.div`
  width: 400px;
  height: 200px;

  background-color: beige;
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: absolute;
    right: 100px;

    width: 600px;
    height: 300px;

    margin-bottom: 0;
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

export const LogoTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const LogoWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;
