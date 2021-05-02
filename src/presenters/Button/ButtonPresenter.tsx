import React from "react";
import isEqual from "lodash.isequal";

const ButtonPresenterComponent: React.FC = () => {
  return null;
};

export const ButtonPresenter = React.memo(ButtonPresenterComponent, isEqual);
