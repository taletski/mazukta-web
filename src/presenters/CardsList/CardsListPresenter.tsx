import React from "react";
import isEqual from "lodash.isequal";
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
  return (
    <S.Container>
      {currentElements &&
        Object.values(currentElements).map((card) => (
          <CardPresenter
            key={card.id}
            {...mapCardCategoryToProps(card.category)}
          />
        ))}
    </S.Container>
  );
};

export const CardsListPresenter = React.memo(
  CardsListPresenterComponent,
  isEqual
);
