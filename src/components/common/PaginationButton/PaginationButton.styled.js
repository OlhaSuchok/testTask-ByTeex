import styled from "@emotion/styled";

export const ButtonList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-left: auto;
  margin-right: auto;
  padding-left: 0;

  list-style: none;

  margin-bottom: ${(prop) => prop.mb};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const ButtonWrapper = styled.li`
  width: 8px;
  height: 8px;

  border-radius: 50%;

  background-color: ${({ click }) => (click ? "black" : "#c4c4c4")};

  &:not(:last-child) {
    margin-right: 7px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;

  cursor: pointer;
`;
