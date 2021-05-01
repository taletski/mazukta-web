export type TCell = "cell";
export type TDeadCell = "dead-cell";
export type TAliveCell = "alive-cell";
export type TCellCategory = TDeadCell | TAliveCell;

export interface ICell {
  readonly id: string;
  readonly type: TCell;
  readonly category: TCellCategory;
}

export type TOccasion = "occasion";
export type TDeathOccured = "death-occured";
export type TLifeOccured = "life-occured";
export type TOccasionCategory = TDeathOccured | TLifeOccured;

export interface IOccasion {
  readonly id: string;
  readonly type: TOccasion;
  readonly category: TOccasionCategory;
}

export type CreatorState = Array<ICell | IOccasion>;

export type UpdateStateCallback = (newState: CreatorState) => void;

export interface ICreatorService {
  creations: CreatorState;
  createAddRandomElement(): Promise<void>;
  subscribeOnUpdates(updateStateCallback: UpdateStateCallback): void;
  unsubscribeFromUpdates(updateStateCallback: UpdateStateCallback): void;
}
