import React from "react";
import isEqual from "lodash.isequal";
import { IAppPresenterProps } from "../../containers/App/AppContainer.type";
import { S } from "./AppPresenter.style";
import { AppHeaderPresenter } from "../AppHeader/AppHeaderPresenter";
import { Button } from "../Button/Button";
import { CardsListContainer } from "../../containers/CardsList/CardsListContainer";

const AppPresenterComponent: React.FC<IAppPresenterProps> = ({
  handleCreateAddElement,
}) => {
  return (
    <S.Container>
      <S.Content>
        <S.HeaderContainer>
          <AppHeaderPresenter label="Cells Playground" />
        </S.HeaderContainer>
        <S.CardsContainer>
          <CardsListContainer />
        </S.CardsContainer>
        <S.ButtonContainer>
          <Button label="Create" onClick={handleCreateAddElement} />
        </S.ButtonContainer>
      </S.Content>
    </S.Container>
  );
};

export const AppPresenter = React.memo(AppPresenterComponent, isEqual);
