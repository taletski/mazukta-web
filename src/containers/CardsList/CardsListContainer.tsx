import React from "react";
import { CardsListPresenter } from "../../presenters/CardsList/CardsListPresenter";
import { useCreatorService } from "../../services/CreatorService/CreatorService.reactAPI";
import { CreatorState } from "../../services/CreatorService/CreatorService.type";

export const CardsListContainer: React.FC = () => {
  const { currentCreatorState } = useCreatorService();
  return <CardsListPresenter currentElements={currentCreatorState} />;
};
