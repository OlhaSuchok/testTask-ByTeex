import styled from "@emotion/styled";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 36px;

  margin-left: auto;
  margin-right: auto;

  background-color: ${({ theme }) => theme.colors.ACCENT_COLOR};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme }) => theme.breakpoints.mobile};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: ${({ theme }) => theme.breakpoints.desktop};
  }
`;

export const Text = styled.p`
  margin-right: 8px;
  margin-left: 8px;

  font-size: 11px;
  font-family: ${({ theme }) => theme.fonts.suisseRegular};
  line-height: 35px;

  color: ${({ theme }) => theme.colors.HEADER_TEXT_COLOR};
`;

export const TextDesctop = styled.p`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
    margin: 0;

    font-size: 11px;
    font-family: ${({ theme }) => theme.fonts.suisseRegular};
    line-height: 35px;

    color: ${({ theme }) => theme.colors.HEADER_TEXT_COLOR};
    overflow: visible;
  }
`;
