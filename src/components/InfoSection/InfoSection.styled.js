import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 52px;
  padding-bottom: 56px;

  margin-left: auto;
  margin-right: auto;

  background-color: ${({ theme }) => theme.colors.ACCENT_BACKGROUND_COLOR};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme }) => theme.breakpoints.mobile};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: ${({ theme }) => theme.breakpoints.desktop};
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 0;
  margin-bottom: 15px;

  font-size: 26px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.6;

  color: #2a2996;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 30px;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }
`;

export const InfoItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 282px;

  padding-bottom: 16px;
  padding-top: 16px;

  border-bottom: 1px solid #c4c4c4;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    border-bottom: 1px solid transparent;

    &:not(:last-child) {
      border-right: 1px solid #c4c4c4;
    }
  }
`;

export const InfoIconWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const InfoMainText = styled.p`
  margin-bottom: 2px;
  margin-top: 0;

  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.sofiaProSemiBold};
  line-height: 1;

  color: #2a2996;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const InfoText = styled.p`
  margin-bottom: 0;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.4;

  color: #2a2996;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;
