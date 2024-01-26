import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 13px 20px 50px 20px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme }) => theme.breakpoints.mobile};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: relative;

    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding-top: 33px;
    padding-left: 100px;
    padding-right: 70px;

    width: ${({ theme }) => theme.breakpoints.desktop};
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
`;

export const DescriptionItem = styled.li`
  display: flex;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 26px;
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
`;

export const LogoTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-items: flex-start;
  }
`;

export const LogoWrapper = styled.div``;

export const ImagesGroup = styled.div`
  position: relative;

  width: 400px;
  height: 270px;

  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: absolute;
    right: 100px;

    width: 815px;
    height: 460px;

    margin-bottom: 0;
  }
`;

export const FirstImageWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 42px;

  z-index: 2;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    right: 100px;
  }
`;

export const SecondImageWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 129px;

  z-index: 3;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    left: 280px;
  }
`;

export const ThirdImageWrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 36px;

  z-index: 2;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    left: 84px;
  }
`;

export const FirstTransparentBlock = styled.div`
  position: absolute;
  bottom: 110px;
  left: 5px;

  width: 67px;
  height: 95px;

  background: linear-gradient(to top, #f9f0e5 0%, #ffffff 90%);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    bottom: 140px;
    left: 20px;

    width: 139px;
    height: 196px;

    background: linear-gradient(to top, #f9f0e5 29%, #ffffff 100%);
  }
`;

export const SecondTransparentBlock = styled.div`
  position: absolute;
  bottom: 110px;
  right: 5px;

  width: 67px;
  height: 95px;

  background: linear-gradient(to top, #f9f0e5 0%, #ffffff 90%);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 139px;
    height: 196px;

    bottom: 140px;
    right: 30px;
  }
`;

export const SideImage = styled.img`
  width: 97px;
  height: 145px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 210px;
    height: 316px;
  }
`;

export const CenterImage = styled.img`
  width: 140px;
  height: 210px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 246px;
    height: 373px;
  }
`;
