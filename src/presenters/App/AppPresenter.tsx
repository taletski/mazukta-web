import React from "react";
import isEqual from "lodash.isequal";
import { IAppPresenterProps } from "../../containers/App/AppContainer.type";

const AppPresenterComponent: React.FC<IAppPresenterProps> = () => {
  return null;
};

export const AppPresenter = React.memo(AppPresenterComponent, isEqual);
