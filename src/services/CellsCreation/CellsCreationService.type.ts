export type TDeadCell = "dead-cell";
export type TAliveCell = "alive-cell";
export type TCell = TDeadCell | TAliveCell;

export interface Cell {
  readonly id: string;
  readonly type: TCell;
}

export type TDeathOccured = "death-occured";
export type TLifeOccured = "life-occured";
export type TOccasion = TDeathOccured | TLifeOccured;

export interface Occasion {
  readonly id: string;
  readonly types: TOccasion;
}

export type UpdateStateCallback = (newState: null) => void;

export interface ICellsCreationService {
  createAddCell(): Promise<void>;
  subscribeOnUpdates(updateStateCallback: UpdateStateCallback): void;
  unsubscribeFromUpdates(updateStateCallback: UpdateStateCallback): void;
}
