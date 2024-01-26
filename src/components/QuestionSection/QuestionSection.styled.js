import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  padding-bottom: 40px;

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
    padding-bottom: 70px;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding-top: 22px;

  position: relative;
  overflow: hidden;

  border-bottom: 1px solid #c4c4c4;
`;

export const Button = styled.button`
  display: block;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: transparent;

  cursor: pointer;
`;

export const QuestionListItemText = styled.p`
  margin-top: 0;
  margin-bottom: 0;

  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.3;

  color: ${({ theme }) => theme.colors.MAIN_ACCENT_TEXT_COLOR};
`;

export const QuestionListItemPlusWrapper = styled.div``;

export const QuestionListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

export const ImagesGroup = styled.div``;

export const FirstImageWrapper = styled.div`
  position: absolute;
  right: 30px;
`;

export const SecondImageWrapper = styled.div`
  position: absolute;
  top: 130px;
  left: 90px;

  z-index: 1;
`;

export const ThirdImageWrapper = styled.div`
  position: absolute;
  top: 435px;
  left: 5px;
`;

export const FirstTransparentBlock = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;

  width: 134px;
  height: 189px;

  background: #f9f0e5;
  background: linear-gradient(to top, #f9f0e5 0%, #ffffff 90%);
`;

export const SecondTransparentBlock = styled.div`
  position: absolute;
  bottom: 115px;
  right: 55px;

  width: 134px;
  height: 189px;

  background: linear-gradient(to top, #f9f0e5 0%, #ffffff 90%);
`;

export const QuestionListItemResponse = styled.p`
  margin: 0;
  padding-bottom: 20px;

  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.5;

  color: #676869;
`;

export const QuestionListItemQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding-top: 22px;
  padding-bottom: 22px;
`;
