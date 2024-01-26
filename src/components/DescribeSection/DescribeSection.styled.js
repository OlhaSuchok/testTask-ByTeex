import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 45px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme }) => theme.breakpoints.mobile};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: ${({ theme }) => theme.breakpoints.desktop};
  }
`;

export const DescribeText = styled.p`
  text-align: center;
  margin-top: 0;
  margin-bottom: 16px;

  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.2;

  color: #676869;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const ListNames = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 0;
  margin-bottom: 12px;
  padding-left: 10px;
  padding-right: 10px;

  list-style: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const ListNamesItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 0;
  margin-bottom: 25px;

  width: 330px;

  font-size: 26px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.3;

  color: ${({ theme }) => theme.colors.MAIN_ACCENT_TEXT_COLOR};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const Pagination = styled.p`
  margin-bottom: 42px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const SliderWrapper = styled.div`
  margin-bottom: 30px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const SliderName = styled.p`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.suisseRegular};
  line-height: 1.7;

  color: ${({ theme }) => theme.colors.MAIN_ACCENT_TEXT_COLOR};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const ListBenefits = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-left: 0;

  list-style: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const ListBenefitsItem = styled.li`
  width: 334px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 20px;
  padding-bottom: 30px;

  border-bottom: 1px solid #c4c4c4;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const ListBenefitsIconWrapper = styled.div`
  margin-bottom: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const ListBenefitsMainText = styled.p`
  margin-top: 0;
  margin-bottom: 20px;

  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.2;

  color: ${({ theme }) => theme.colors.MAIN_ACCENT_TEXT_COLOR};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const ListBenefitsText = styled.p`
  margin-top: 0;

  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.3;

  color: ${({ theme }) => theme.colors.MAIN_ACCENT_TEXT_COLOR};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;
