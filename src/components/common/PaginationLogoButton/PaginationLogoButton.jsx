import {
  ButtonList,
  ButtonWrapper,
  Button,
} from "./PaginationLogoButton.styled";

export default function PaginationLogoButton({
  onPrevClick,
  onNextClick,
  prevClick,
  nextClick,
  mb,
}) {
  return (
    <ButtonList mb={mb}>
      <ButtonWrapper click={prevClick}>
        <Button type="button" onClick={onPrevClick}></Button>
      </ButtonWrapper>

      <ButtonWrapper>
        <Button type="button"></Button>
      </ButtonWrapper>

      <ButtonWrapper click={nextClick}>
        <Button type="button" onClick={onNextClick}></Button>
      </ButtonWrapper>
    </ButtonList>
  );
}
