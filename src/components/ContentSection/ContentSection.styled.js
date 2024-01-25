import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 20px;
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
  }
`;

export const ListPhoto = styled.ul`
  /* display: flex;
  flex-wrap: wrap; */
  display: grid;

  grid-template-rows: repeat(2, [row-start] 3fr [row-end]);
  grid-template-columns: repeat(4, [col-start] 3fr [col-end]);

  margin-right: 0;
  margin-top: 0;

  list-style: none;

  padding: 0;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const ListPhotoItem = styled.li`
  /* width: calc((100% - 3px) / 3); */
  width: 100px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const ListPhotoItemImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;
