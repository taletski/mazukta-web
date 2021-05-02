import { CreatorState } from "../../services/CreatorService/CreatorService.type";

export interface IAppPresenterProps {
  currentElements: CreatorState;
  handleCreateAddElement: () => Promise<void>;
}
