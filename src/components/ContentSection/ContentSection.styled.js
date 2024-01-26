import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 50px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme }) => theme.breakpoints.mobile};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: ${({ theme }) => theme.breakpoints.desktop};

    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 50px;
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
    margin-bottom: 40px;

    font-size: 32px;
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
  margin-bottom: 30px;
  padding: 0;

  width: 428px;

  list-style: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 76px;
  }
`;

export const ListPhotoItem = styled.li`
  width: 100px;
  margin: 2px;
`;

export const ListPhotoItemImage = styled.picture``;

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

    margin-bottom: 0;
  }
`;

export const CardListItem = styled.li`
  width: 346px;

  padding: 39px;
  margin-right: 0;

  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.3);

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    &:not(:last-child) {
      margin-right: 40px;
    }
    &:not(:last-child) {
      margin-bottom: 0;
    }
    margin-bottom: 0;
  }
`;

export const CardListItemIcon = styled.div`
  width: 39px;
  height: 39px;

  margin-bottom: 0;
  margin-right: 10px;

  background-color: #000000;
  border-radius: 50px;
`;

export const CardListItemMainText = styled.p`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.9;

  color: #676869;
  margin-top: 0;

  margin-bottom: 0;
`;

export const CardListItemText = styled.p`
  text-align: left;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.5;

  color: #676869;

  margin-top: 0;
  margin-bottom: 0;
`;

export const CardListAvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  margin-bottom: 10px;
`;

export const StarListNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ArrowLeftButton = styled.button`
  display: none;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
    border: none;
    margin-right: 20px;

    background-color: transparent;
  }
`;

export const ArrowRightButton = styled.button`
  display: none;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
    border: none;
    margin-left: 20px;

    background-color: transparent;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-bottom: 56px;
  }
`;

export const Image = styled.img`
  width: 100px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100px;
  }
`;
