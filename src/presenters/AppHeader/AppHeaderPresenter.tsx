import React from "react";
import isEqual from "lodash.isequal";
import { IAppHeaderPresenterProps } from "./AppHeaderPresenter.type";
import { S } from "./AppHeaderPresenter.style";

const AppHeaderPresenterComponent: React.FC<IAppHeaderPresenterProps> = ({
  label,
}) => {
  return <S.MainHeader>{label}</S.MainHeader>;
};

export const AppHeaderPresenter = React.memo(
  AppHeaderPresenterComponent,
  isEqual
);
