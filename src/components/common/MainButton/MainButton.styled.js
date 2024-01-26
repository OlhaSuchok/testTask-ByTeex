import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 369px;
  height: 56px;

  background-color: ${({ theme }) => theme.colors.MAIN_BTN_COLOR};
  border: none;
  border-radius: 5px;

  color: #ffffff;

  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const MainButtonArrowWrapper = styled.div`
  margin-left: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;