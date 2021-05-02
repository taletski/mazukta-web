import React from "react";
import isEqual from "lodash.isequal";

const CardPresenterComponent: React.FC = () => {
  return null;
};

export const CardPresenter = React.memo(CardPresenterComponent, isEqual);
