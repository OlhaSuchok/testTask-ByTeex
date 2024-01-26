import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
    padding-left: 170px;
    padding-right: 170px;
    padding-top: 75px;
    padding-bottom: 40px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 0;

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
  padding-left: 0;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30px;

  list-style: none;
  margin-top: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 56px;
  }
`;

export const CardListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 346px;
  height: 321px;
  border-radius: 8px;
  background-color: #ededed;

  padding: 30px;
  margin-right: 0;

  &:nth-child(2n) {
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
  margin-bottom: 15px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const CardListItemMainText = styled.p`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.9;

  color: #01005b;
  margin-top: 0;
  margin-bottom: 15px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const CardListItemText = styled.p`
  text-align: center;
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.5;

  color: #676869;

  margin-top: 0;
  margin-bottom: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;
