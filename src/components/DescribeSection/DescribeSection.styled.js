import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 40px;
  padding-top: 100px;

  margin-left: auto;
  margin-right: auto;

  background-image: linear-gradient(to bottom, #f6f9e5, #ffffff);
  background: linear-gradient(to bottom, #f6f9e5 0%, #ffffff 70%);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme }) => theme.breakpoints.mobile};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: relative;

    padding: 50px 100px 200px 100px;

    width: ${({ theme }) => theme.breakpoints.desktop};
  }
`;

export const DescribeNamesWrapper = styled.div`
  margin-bottom: 20px;
`;

export const DescribeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-items: flex-start;
    align-self: flex-start;
  }
`;

export const DescribeText = styled.p`
  text-align: center;
  margin-top: 0;
  margin-bottom: 16px;

  padding-top: 0;

  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.2;

  color: #676869;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 25px;
    padding-top: 0;

    font-size: 20px;
  }
`;

export const ListNames = styled.ul`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 0;
    margin-bottom: 12px;
    padding-left: 10px;
    padding-right: 10px;

    list-style: none;
  }
`;

export const ListNamesItem = styled.li`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    &:not(:last-child) {
      margin-right: 100px;
    }
  }
`;

export const ListNamesMobile = styled.ul`
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
    display: none;
  }
`;

export const ListNamesItemMobile = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const ListNamesItemMobileText = styled.div`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.9;

  color: #676869;
  opacity: 0.4;
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
    font-size: 32px;
    width: 530px;
    margin-bottom: 55px;
  }
`;

export const Pagination = styled.p`
  margin-bottom: 42px;
  display: block;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: absolute;
    top: 170px;
    right: 100px;

    margin-bottom: 0;
  }
`;

export const Slider = styled.picture`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 0;
  }
`;

export const SliderName = styled.p`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.suisseRegular};
  line-height: 1.7;

  margin-bottom: 0;
  margin-top: 20px;

  color: #676869;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const ListBenefits = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;

  list-style: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 0;
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

  &:not(:last-child) {
    border-bottom: 1px solid #c4c4c4;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 600px;
    padding-top: 0;

    &:not(:last-child) {
      border-bottom: 1px solid transparent;
    }

    align-items: flex-start;
    align-self: flex-start;
  }
`;

export const ListBenefitsBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

export const ListBenefitsIconWrapper = styled.div`
  margin-bottom: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 0;
    margin-right: 17px;
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
    margin-bottom: 15px;
    font-size: 22px;
  }
`;

export const ListBenefitsText = styled.p`
  text-align: center;
  margin-top: 0;

  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.sofiaProRegular};
  line-height: 1.3;

  color: ${({ theme }) => theme.colors.MAIN_ACCENT_TEXT_COLOR};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    text-align: left;
    padding-left: 60px;
    margin-bottom: 0;

    font-size: 15px;
  }
`;

export const RatingBlockWrapper = styled.div`
  display: block;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const ArrowLeftButton = styled.button`
  cursor: pointer;
  display: block;
  background-color: transparent;
  border: none;
  margin-right: 20px;
`;

export const ArrowRightButton = styled.button`
  cursor: pointer;
  display: block;
  background-color: transparent;
  border: none;
  margin-left: 20px;
`;

export const SliderArrowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 303px;
  height: 453px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 433px;
    height: 648px;
  }
`;

export const PaginationLogosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
