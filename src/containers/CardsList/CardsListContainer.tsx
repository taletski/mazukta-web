import React from "react";
import { CardsListPresenter } from "../../presenters/CardsList/CardsListPresenter";
import { useCreatorService } from "../../services/CreatorService/CreatorService.reactAPI";

export const CardsListContainer: React.FC = () => {
  const { currentCreatorState } = useCreatorService();

  return (
    currentCreatorState && (
      <CardsListPresenter currentElements={currentCreatorState} />
    )
  );
};
