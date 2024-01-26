import RatingBlock from "components/common/RatingBlock/RatingBlock";

import Basket from "images/useProductIcons/Basket/Basket";
import Car from "images/useProductIcons/Car/Car";
import Sun from "images/useProductIcons/Sun/Sun";

import {
  Section,
  Title,
  CardList,
  CardListItem,
  CardListItemIcon,
  CardListItemMainText,
  CardListItemText,
} from "./UseProductSection.styled";

export default function UseProductSection() {
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
      <RatingBlock test={"Over 500+ 5 Star Reviews Online"} />
    </Section>
  );
}
