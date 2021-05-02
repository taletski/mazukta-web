import React from "react";
import { useCreatorService } from "../../services/CreatorService/CreatorService.reactAPI";

export const AppContainer: React.FC = () => {
  const { currentCreatorState, createAddRandomElement } = useCreatorService();

  return null;
};
