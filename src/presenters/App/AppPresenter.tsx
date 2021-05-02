import React from "react";
import isEqual from "lodash.isequal";
import { IAppPresenterProps } from "../../containers/App/AppContainer.type";
import { S } from "./AppPresenter.style";
import { AppHeaderPresenter } from "../AppHeader/AppHeaderPresenter";

const AppPresenterComponent: React.FC<IAppPresenterProps> = () => {
  return (
    <S.Container>
      <S.Content>
        <S.HeaderContainer>
          <AppHeaderPresenter label="Cells Playground" />
        </S.HeaderContainer>
        <S.CardsContainer></S.CardsContainer>
        <S.ButtonContainer></S.ButtonContainer>
      </S.Content>
    </S.Container>
  );
};

export const AppPresenter = React.memo(AppPresenterComponent, isEqual);
