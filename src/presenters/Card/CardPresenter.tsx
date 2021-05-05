import React from "react";
import isEqual from "lodash.isequal";
import { ICardPresenterProps } from "./CardPresenter.type";
import { S } from "./CardPresenter.style";
import { AvatarPresenter } from "../Avatar/AvatarPresenter";

const CardPresenterComponent: React.FC<ICardPresenterProps> = ({
  cardCategory,
  avatarContent,
  header,
  message,
}) => {
  return (
    <S.Card>
      <S.AvatarContainer>
        <AvatarPresenter category={cardCategory} content={avatarContent} />
      </S.AvatarContainer>
      <S.TextContainer>
        <S.TextHeader>{header}</S.TextHeader>
        <S.TextMessage>{message}</S.TextMessage>
      </S.TextContainer>
    </S.Card>
  );
};

export const CardPresenter = React.memo(CardPresenterComponent, isEqual);
