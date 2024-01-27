import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 20px 30px 30px 30px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme }) => theme.breakpoints.mobile};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: ${({ theme }) => theme.breakpoints.desktop};

    padding: 75px 170px 40px 170px;
  }
`;

export const Title = styled.h2`
  text-align: center;

  margin-top: 0;
  margin-bottom: 50px;

  font-size: 26px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.5;

  color: #01005b;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 46px;
    font-size: 32px;
  }
`;

export const CardList = styled.ul`
  display: none;
  list-style: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-bottom: 56px;
    margin-top: 0;
    padding-left: 0;
  }
`;

export const CardListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 346px;
  height: 321px;

  padding: 30px;
  margin-right: 0;

  border-radius: 8px;
  background-color: #ededed;

  &:nth-of-type(2n) {
    background-color: #f9f0e6;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    &:not(:last-child) {
      margin-right: 40px;
    }

    margin-bottom: 0;
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const CardListItemIcon = styled.div`
  margin-bottom: 0;
`;

export const CardListItemMainText = styled.p`
  margin-top: 0;
  margin-bottom: 15px;

  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.9;

  color: #01005b;
`;

export const CardListItemText = styled.p`
  text-align: center;

  margin-top: 0;
  margin-bottom: 0;

  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.5;

  color: #676869;
`;

export const CardListMobile = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;

  list-style: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const CardListItemMobile = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 288px;
  height: 288px;

  padding: 30px;
  margin-right: 0;

  border-radius: 8px;
  background-color: #ededed;

  &:nth-of-type(2n) {
    background-color: #f9f0e6;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    &:not(:last-child) {
      margin-right: 40px;
    }

    margin-bottom: 0;
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const CardListItemIconMobile = styled.div`
  margin-bottom: 0;
`;

export const CardListItemMainTextMobile = styled.p`
  margin-top: 0;
  margin-bottom: 15px;

  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.9;

  color: #01005b;
`;

export const CardListItemTextMobile = styled.p`
  text-align: center;

  margin-top: 0;
  margin-bottom: 0;

  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.5;

  color: #676869;
`;

export const ArrowLeftButtonMobile = styled.button`
  margin-right: 20px;

  border: none;
  background-color: transparent;

  cursor: pointer;
`;

export const ArrowRightButtonMobile = styled.button`
  margin-left: 20px;
  border: none;
  background-color: transparent;

  cursor: pointer;
`;

export const SliderWrapperMobile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding-bottom: 0;
  margin-bottom: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;
