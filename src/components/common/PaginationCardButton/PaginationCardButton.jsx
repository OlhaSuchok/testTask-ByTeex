import {
  ButtonList,
  ButtonWrapper,
  Button,
} from "./PaginationCardButton.styled";

export default function PaginationCardButton({
  onPrevClick,
  onNextClick,
  nextClick,
  prevClick,
  setNextClick,
  setPrevClick,
  mb,
}) {
  const handlePrevButtonClick = () => {
    setPrevClick(true);
    setNextClick(false);

    if (onPrevClick) {
      onPrevClick();
    }
  };

  const handleNextButtonClick = () => {
    setNextClick(true);
    setPrevClick(false);

    if (onNextClick) {
      onNextClick();
    }
  };

  return (
    <ButtonList mb={mb}>
      <ButtonWrapper click={prevClick}>
        <Button type="button" onClick={handlePrevButtonClick}></Button>
      </ButtonWrapper>

      <ButtonWrapper>
        <Button type="button"></Button>
      </ButtonWrapper>

      <ButtonWrapper click={nextClick}>
        <Button type="button" onClick={handleNextButtonClick}></Button>
      </ButtonWrapper>
    </ButtonList>
  );
}
