import React from "react";
import { AppPresenter } from "../../presenters/App/AppPresenter";
import { useCreatorService } from "../../services/CreatorService/CreatorService.reactAPI";

export const AppContainer: React.FC = () => {
  const { createAddRandomElement } = useCreatorService();

  return (
    <AppPresenter
      // have to specify types explicitly because Typescript doesn't handle React Context
      handleCreateAddElement={createAddRandomElement as () => Promise<void>}
    />
  );
};
