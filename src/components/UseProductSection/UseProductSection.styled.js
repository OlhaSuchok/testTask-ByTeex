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
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30px;
  margin-top: 0;
  padding-left: 0;

  list-style: none;

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

  padding: 30px;
  margin-right: 0;

  border-radius: 8px;
  background-color: #ededed;

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
