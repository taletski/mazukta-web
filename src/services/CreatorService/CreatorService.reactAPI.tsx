import React, { useContext, useEffect, useState } from "react";
import { CreatorService } from "./CreatorService";
import { CreatorState } from "./CreatorService.type";

interface ICreatorServiceContext {
  currentCreatorState: CreatorState | null;
  createAddRandomElement: (() => Promise<void>) | null;
}

const defaultContext = {
  currentCreatorState: null,
  createAddRandomElement: null,
};

const CreatorServiceContext = React.createContext<ICreatorServiceContext>(
  defaultContext
);

const createAddRandomElement = CreatorService.getInstance()
  .createAddRandomElement;

export const CreatorServiceProvider: React.FC = ({ children }) => {
  const [currentCreatorState, setCurrentCreatorState] = useState<CreatorState>(
    []
  );

  useEffect(() => {
    const updateStateCallback = (newState: CreatorState) => {
      setCurrentCreatorState(newState);
    };

    CreatorService.getInstance().subscribeOnUpdates(updateStateCallback);

    return () => {
      CreatorService.getInstance().unsubscribeFromUpdates(updateStateCallback);
    };
  }, []);

  return (
    <CreatorServiceContext.Provider
      value={{ currentCreatorState, createAddRandomElement }}
    >
      {children}
    </CreatorServiceContext.Provider>
  );
};

export const useCreatorService = (): ICreatorServiceContext => {
  const contextFieldsAndMethods = useContext(CreatorServiceContext);
  return contextFieldsAndMethods;
};
