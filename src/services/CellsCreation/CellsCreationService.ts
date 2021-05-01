import {
  ICellsCreationService,
  UpdateStateCallback,
} from "./CellsCreationService.type";

export class CellsCreationService implements ICellsCreationService {
  private static instance: CellsCreationService | null = null;
  // private cellsQueue -- queue to store cells

  private constructor() {}

  private generateRandomCell() {}

  private addCell() {}

  public static getInstance() {
    if (!CellsCreationService.instance) {
      CellsCreationService.instance = new CellsCreationService();
    }
    return CellsCreationService.instance;
  }

  public async createAddCell() {}

  public subscribeOnUpdates(callback: UpdateStateCallback) {}

  public unsubscribeFromUpdates(callback: UpdateStateCallback) {}
}
