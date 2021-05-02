import React, { useContext, useEffect, useState } from "react";
import { CreatorService } from "./CreatorService";
import { CreatorState } from "./CreatorService.type";

interface ICreatorServiceContext {
  currentCreatorState: CreatorState | (() => never);
  createAddRandomElement: () => Promise<void> | (() => never);
}

const CONTEXT_ERROR_MESSAGE =
  "fatal: tried to access CreatorServiceContext fields or methods outside of the context provider";

const defaultContext = {
  currentCreatorState: () => {
    throw new Error(CONTEXT_ERROR_MESSAGE);
  },
  createAddRandomElement: () => {
    throw new Error(CONTEXT_ERROR_MESSAGE);
  },
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
