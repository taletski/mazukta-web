import React from "react";
import isEqual from "lodash.isequal";

const AvatarPresenterComponent: React.FC = () => {
  return null;
};

export const AvatarPresenter = React.memo(AvatarPresenterComponent, isEqual);
