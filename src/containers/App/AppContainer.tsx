import React from "react";
import { AppPresenter } from "../../presenters/App/AppPresenter";
import { useCreatorService } from "../../services/CreatorService/CreatorService.reactAPI";
import { CreatorState } from "../../services/CreatorService/CreatorService.type";

export const AppContainer: React.FC = () => {
  const { currentCreatorState, createAddRandomElement } = useCreatorService();

  return (
    <AppPresenter
      // have to specify types explicitly because Typescript doesn't handle React Context
      currentElements={currentCreatorState as CreatorState}
      handleCreateAddElement={createAddRandomElement as () => Promise<void>}
    />
  );
};
