import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme }) => theme.breakpoints.mobile};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: ${({ theme }) => theme.breakpoints.desktop};
    padding-left: 100px;
    padding-right: 100px;
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

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`;

export const Text = styled.p`
  text-align: center;
  margin-top: 0;
  margin-bottom: 40px;

  width: 330px;

  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.5;

  color: ${({ theme }) => theme.colors.MAIN_TEXT_COLOR};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 55px;
    width: 500px;
  }
`;

export const ListPhoto = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin-right: 0;
  margin-top: 0;

  list-style: none;

  width: 428px;

  margin-bottom: 30px;

  padding: 0;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 76px;
  }
`;

export const ListPhotoItem = styled.li`
  width: 100px;
  margin: 2px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const ListPhotoItemImage = styled.picture`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
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
  width: 346px;
  border-radius: 8px;
  background-color: #ffffff;

  padding: 39px;
  margin-right: 0;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.3);

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    &:not(:last-child) {
      margin-right: 40px;
    }

    margin-bottom: 0;
  }
`;

export const CardListItemIcon = styled.div`
  width: 39px;
  height: 39px;
  background-color: #000000;
  border-radius: 50px;
  margin-bottom: 0;
  margin-right: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const CardListItemMainText = styled.p`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.9;

  color: #676869;
  margin-top: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const CardListItemText = styled.p`
  text-align: left;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.5;

  color: #676869;

  margin-top: 0;
  margin-bottom: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const CardListAvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const StarListNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;
