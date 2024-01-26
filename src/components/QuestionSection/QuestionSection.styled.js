import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 40px;
  align-items: center;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme }) => theme.breakpoints.mobile};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: ${({ theme }) => theme.breakpoints.desktop};
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    padding-left: 200px;
    padding-right: 70px;
    padding-bottom: 0;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 0;
  margin-bottom: 25px;

  font-size: 26px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.3;

  color: ${({ theme }) => theme.colors.MAIN_ACCENT_TEXT_COLOR};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const QuestionList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 349px;

  margin-bottom: 39px;
  margin-top: 0;

  padding-left: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 630px;
    margin-bottom: 0;
  }
`;

export const QuestionListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding-top: 22px;
  padding-bottom: 22px;

  border-bottom: 1px solid #c4c4c4;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const QuestionListItemText = styled.p`
  margin-top: 0;
  margin-bottom: 0;

  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.3;

  color: ${({ theme }) => theme.colors.MAIN_ACCENT_TEXT_COLOR};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const QuestionListItemPlusWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const QuestionListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const RatingBlockWrapper = styled.div`
  display: block;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const ImagesBlockWrapper = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
    position: relative;

    width: 430px;
    height: 645px;
  }
`;

export const ImagesGroup = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const FirstImageWrapper = styled.div`
  position: absolute;
  right: 30px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const SecondImageWrapper = styled.div`
  position: absolute;
  top: 130px;
  left: 90px;

  z-index: 1;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const ThirdImageWrapper = styled.div`
  position: absolute;
  top: 435px;
  left: 5px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const FirstTransparentBlock = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;

  width: 134px;
  height: 189px;

  background: #f9f0e5;
  background: linear-gradient(to top, #f9f0e5 0%, #ffffff 90%);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const SecondTransparentBlock = styled.div`
  position: absolute;
  bottom: 115px;
  right: 55px;

  width: 134px;
  height: 189px;

  background: #f9f0e5;
  background: linear-gradient(to top, #f9f0e5 0%, #ffffff 90%);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;
