import { useState } from "react";

import RatingBlock from "components/common/RatingBlock/RatingBlock";

import Basket from "images/useProductIcons/Basket/Basket";
import Car from "images/useProductIcons/Car/Car";
import Sun from "images/useProductIcons/Sun/Sun";
import ArrowLeft from "images/contentIcons/ArrowLeft/ArrowLeft";
import ArrowRight from "images/contentIcons/ArrowRight/ArrowRight";

import {
  Section,
  Title,
  CardList,
  CardListItem,
  CardListItemIcon,
  CardListItemMainText,
  CardListItemText,
  CardListMobile,
  CardListItemMobile,
  CardListItemIconMobile,
  CardListItemMainTextMobile,
  CardListItemTextMobile,
  SliderWrapperMobile,
  ArrowLeftButtonMobile,
  ArrowRightButtonMobile,
} from "./UseProductSection.styled";

export default function UseProductSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      icon: <Basket />,
      title: "You save.",
      text: "Browse our comfort sets and save 15% when you bundle.",
    },
    {
      icon: <Car />,
      title: "We ship.",
      text: "We ship your items within 1-2 days of receiving your order.",
    },
    {
      icon: <Sun />,
      title: "You enjoy!",
      text: "Wear hernest around the house, out on the town, or in bed.",
    },
  ];

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <Section>
      <Title>Comfort made easy</Title>
      <CardList>
        <CardListItem>
          <CardListItemIcon>
            <Basket />
          </CardListItemIcon>
          <CardListItemMainText>You save.</CardListItemMainText>
          <CardListItemText>
            Browse our comfort sets and save 15% when you bundle.
          </CardListItemText>
        </CardListItem>

        <CardListItem>
          <CardListItemIcon>
            <Car />
          </CardListItemIcon>
          <CardListItemMainText>We ship.</CardListItemMainText>
          <CardListItemText>
            We ship your items within 1-2 days of receiving your order.
          </CardListItemText>
        </CardListItem>

        <CardListItem>
          <CardListItemIcon>
            <Sun />
          </CardListItemIcon>
          <CardListItemMainText>You enjoy!</CardListItemMainText>
          <CardListItemText>
            Wear hernest around the house, out on the town, or in bed.
          </CardListItemText>
        </CardListItem>
      </CardList>

      <SliderWrapperMobile>
        <ArrowLeftButtonMobile type="button" onClick={handlePrevClick}>
          <ArrowLeft />
        </ArrowLeftButtonMobile>

        <CardListMobile>
          <CardListItemMobile>
            <CardListItemIconMobile>
              {data[currentIndex].icon}
            </CardListItemIconMobile>
            <CardListItemMainTextMobile>
              {data[currentIndex].name}
            </CardListItemMainTextMobile>
            <CardListItemTextMobile>
              {data[currentIndex].text}
            </CardListItemTextMobile>
          </CardListItemMobile>
        </CardListMobile>

        <ArrowRightButtonMobile type="button" onClick={handleNextClick}>
          <ArrowRight />
        </ArrowRightButtonMobile>
      </SliderWrapperMobile>

      <RatingBlock test={"Over 500+ 5 Star Reviews Online"} />
    </Section>
  );
}
