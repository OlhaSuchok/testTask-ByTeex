import styled from "@emotion/styled";

export const Container = styled.div`
  width: ${({ theme }) => theme.breakpoints.mobile};
  margin: 0 auto;
  padding: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: ${({ theme }) => theme.breakpoints.desktop};
  }
`;
