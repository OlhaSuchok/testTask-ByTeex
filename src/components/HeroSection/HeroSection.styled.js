import styled from "@emotion/styled";

export const Section = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 13px 20px 120px 20px;

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

    padding: 33px 70px 140px 100px;

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
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

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

export const LogoWrapper = styled.div`
  margin-bottom: 13px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 60px;
  }
`;

export const ImagesGroup = styled.div`
  position: relative;

  width: 400px;
  height: 270px;

  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: absolute;
    top: 150px;
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

export const Card = styled.div`
  position: absolute;
  bottom: -85px;

  width: 346px;

  padding: 16px 11px;
  margin-right: 0;

  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.3);

  z-index: 2;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 16px 19px;

    &:not(:last-child) {
      margin-right: 40px;
    }
    &:not(:last-child) {
      margin-bottom: 0;
    }
    margin-bottom: 0;
  }
`;

export const CardIcon = styled.div`
  width: 39px;
  height: 39px;

  margin-bottom: 0;
  margin-right: 12px;

  background-color: #000000;
  border-radius: 50px;
`;

export const CardMainText = styled.p`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.9;

  color: #676869;
  margin-top: 0;

  margin-bottom: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-right: 12px;
  }
`;

export const CardText = styled.p`
  text-align: left;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.5;

  color: #676869;

  margin-top: 0;
  margin-bottom: 0;
`;

export const CardAvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  margin-bottom: 10px;
`;

export const StarListNameWrapper = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: row;
  align-items: baseline;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
