import React from "react";
import isEqual from "lodash.isequal";
import { useTransition, animated } from "react-spring";
import { ICardsListPresenterProps } from "../../containers/CardsList/CardsListContainer.type";
import { S } from "./CardsListPresenter.style";
import { CardPresenter } from "../Card/CardPresenter";
import { CardCategory } from "../../services/CreatorService/CreatorService.type";
import { ICardPresenterProps } from "../Card/CardPresenter.type";

const mapCardCategoryToProps = (
  category: CardCategory
): ICardPresenterProps => {
  switch (category) {
    case "alive-cell":
      return {
        cardCategory: category,
        avatarContent: "🐣",
        header: "Alive",
        message: "And it moves!",
      };
    case "dead-cell":
      return {
        cardCategory: category,
        avatarContent: "💀",
        header: "Dead",
        message: "Or pretends to be...",
      };
    case "life-occured":
      return {
        cardCategory: category,
        avatarContent: "💥",
        header: "Life",
        message: "Hey!",
      };
    case "death-occured":
      return {
        cardCategory: category,
        avatarContent: "🥀",
        header: "Death",
        message: "Rest in peace",
      };
  }
};

const CardsListPresenterComponent: React.FC<ICardsListPresenterProps> = ({
  currentElements,
}) => {
  const cards = Object.values(currentElements);
  const transitions = useTransition(cards, {
    keys: (card) => card.id,
    from: { opacity: 0.01, transform: "translate3d(200px,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
  });

  return (
    <S.Container>
      {transitions((styles, card) => (
        <animated.div style={styles}>
          <CardPresenter {...mapCardCategoryToProps(card.category)} />
        </animated.div>
      ))}
    </S.Container>
  );
};

export const CardsListPresenter = React.memo(
  CardsListPresenterComponent,
  isEqual
);
