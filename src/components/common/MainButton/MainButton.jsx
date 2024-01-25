import MainButtonArrow from "images/MainButtonArrow/MainButtonArrow";
import { Button, MainButtonArrowWrapper } from "./MainButton.styled";

export default function MainButton() {
  return (
    <Button type="button">
      Customize Your Outfit
      <MainButtonArrowWrapper>
        <MainButtonArrow />
      </MainButtonArrowWrapper>
    </Button>
  );
}
