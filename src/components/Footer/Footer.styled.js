import styled from "@emotion/styled";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  padding-top: 52px;
  padding-bottom: 70px;

  margin-left: auto;
  margin-right: auto;

  background: linear-gradient(to top, #f9f0e5 0%, #ffffff 90%);

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
  margin-bottom: 15px;

  font-size: 26px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.6;

  color: ${({ theme }) => theme.colors.MAIN_ACCENT_TEXT_COLOR};
`;

export const Text = styled.p`
  text-align: center;
  margin-top: 0;
  margin-bottom: 15px;

  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.6;

  color: ${({ theme }) => theme.colors.MAIN_TEXT_COLOR};
`;

export const ImagesGroup = styled.div`
  position: relative;

  width: 400px;
  height: 270px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 815px;
    height: 460px;
  }
`;

export const FirstImageWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 41px;

  z-index: 2;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    right: 94px;
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
  left: 30px;

  z-index: 2;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    left: 67px;
  }
`;

export const FirstTransparentBlock = styled.div`
  position: absolute;
  bottom: 110px;
  left: 5px;

  width: 67px;
  height: 95px;

  background: #f9f0e5;
  background: linear-gradient(to top, #f9f0e5 0%, #ffffff 90%);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 139px;
    height: 196px;
    background: linear-gradient(to top, #f9f0e5 29%, #ffffff 100%);

    bottom: 140px;
    left: 10px;
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

export const LinksText = styled.p`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0;

    font-size: 10px;
    font-family: ${({ theme }) => theme.fonts.suisseRegular};
    line-height: 1.7;

    color: #1fad40;
  }
`;

export const LinksTextWrapper = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-bottom: 30px;
  }
`;

export const InfoList = styled.ul`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    justify-content: center;

    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;

    flex-direction: row;
    align-items: center;
  }
`;

export const InfoItem = styled.li`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;

    height: 50px;

    &:not(:first-child) {
      padding-left: 15px;
    }

    &:not(:last-child) {
      border-right: 1px solid #c4c4c4;
      padding-right: 15px;
    }
  }
`;

export const InfoIconWrapper = styled.div``;

export const InfoMainText = styled.p`
  margin: 0;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.4;

  width: 120px;
  margin-left: 10px;

  color: #676869;
`;
