import { CreatorState } from "../../services/CreatorService/CreatorService.type";

export interface IAppPresenterProps {
  handleCreateAddElement: () => Promise<void>;
}
