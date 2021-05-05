import React from "react";
import isEqual from "lodash.isequal";
import { IAvatarPresenterProps } from "./AvatarPresenter.type";
import { S } from "./AvatarPresenter.style";

const AvatarPresenterComponent: React.FC<IAvatarPresenterProps> = ({
  category,
  content,
}) => {
  return (
    <S.Avatar category={category}>
      <S.AvatarContent>{content ? content : ""}</S.AvatarContent>
    </S.Avatar>
  );
};

export const AvatarPresenter = React.memo(AvatarPresenterComponent, isEqual);
