import { Queue } from "../../helpers/Queue/Queue";
import { IQueue } from "../../helpers/Queue/Queue.type";
import {
  ICell,
  ICreatorService,
  IOccasion,
  TCell,
  TCellCategory,
  TOccasionCategory,
  UpdateStateCallback,
} from "./CreatorService.type";

export class CreatorService implements ICreatorService {
  private static instance: CreatorService | null = null;
  private NUM_OF_LAST_ELEMENTS_NEEDED_FOR_OCCASION: number = 3;
  private CELLS_QUEUE_CAPACITY: number =
    this.NUM_OF_LAST_ELEMENTS_NEEDED_FOR_OCCASION + 2; // for user to see the latest occasion, cards of the same type before the occasion and one card before them all
  private lastDateUsedToGenerateUniqueId: number | null = null;
  private lifeCount: number = 0;
  private subscribersOnQueueUpdate: Set<UpdateStateCallback> = new Set<UpdateStateCallback>();
  private queueOfLife: IQueue<ICell | IOccasion> = new Queue<ICell | IOccasion>(
    this.CELLS_QUEUE_CAPACITY
  );

  private constructor() {}

  private handleCreateAddRandomCell() {
    this.addToQueue(this.generateRandomCell());
    const occasionCategoryNeedToOccure = this.getCategoryOfOccasionIfItNeedToOccure();
    if (
      occasionCategoryNeedToOccure &&
      this.checkIfOccasionPossible(occasionCategoryNeedToOccure)
    ) {
      this.addToQueue(
        this.generateOccasionByCategory(occasionCategoryNeedToOccure)
      );
      this.handleLifeCount(occasionCategoryNeedToOccure);
    }
  }

  private addToQueue(element: ICell | IOccasion) {
    this.queueOfLife.enqueue(element);
  }

  private notifySubscribersOnQueueUpdate() {
    this.subscribersOnQueueUpdate.forEach((updateState) =>
      updateState(this.queueOfLife.getData())
    );
  }

  private generateRandomCell(): ICell {
    const cellCategory: TCellCategory =
      Math.random() < 0.5 ? "alive-cell" : "dead-cell";

    return this.generateCellByCategory(cellCategory);
  }

  private getCategoryOfOccasionIfItNeedToOccure():
    | TOccasionCategory
    | undefined {
    const queue = this.queueOfLife.getData();
    const queueLength = queue.length;
    if (
      queueLength < this.NUM_OF_LAST_ELEMENTS_NEEDED_FOR_OCCASION ||
      queue[0].type === "occasion"
    ) {
      return;
    }
    const lastElementsToCheck = this.queueOfLife
      .getData()
      .slice(0, this.NUM_OF_LAST_ELEMENTS_NEEDED_FOR_OCCASION);

    const categoryOfLastAddedElement = queue[0].category;
    const lastElementsAreOfTheSameCategory = lastElementsToCheck.every(
      (element) => element.category === categoryOfLastAddedElement
    );
    if (lastElementsAreOfTheSameCategory) {
      return this.getOccasionCategoryByCellCategory(categoryOfLastAddedElement);
    }
  }

  private generateUniqueId() {
    const time = Date.now();
    const last = this.lastDateUsedToGenerateUniqueId || time;
    this.lastDateUsedToGenerateUniqueId = time > last ? time : last + 1;
    return (this.lastDateUsedToGenerateUniqueId + Math.random()).toString(32);
  }

  private generateCellByCategory(category: TCellCategory): ICell {
    return {
      type: "cell",
      id: this.generateUniqueId(),
      category,
    };
  }

  private generateOccasionByCategory(category: TOccasionCategory): IOccasion {
    return {
      type: "occasion",
      id: this.generateUniqueId(),
      category,
    };
  }

  private getOccasionCategoryByCellCategory(
    cellCategory: TCellCategory
  ): TOccasionCategory {
    switch (cellCategory) {
      case "alive-cell":
        return "life-occured";
      case "dead-cell":
        return "death-occured";
    }
  }

  private checkIfOccasionPossible(
    occasionCategory: TOccasionCategory
  ): boolean {
    switch (occasionCategory) {
      case "life-occured":
        return true;
      case "death-occured":
        return this.lifeCount > 0;
    }
  }

  private handleLifeCount(occasionCategory: TOccasionCategory): void {
    switch (occasionCategory) {
      case "life-occured":
        this.lifeCount++;
        break;
      case "death-occured":
        this.lifeCount--;
        break;
    }
  }

  public static getInstance() {
    if (!CreatorService.instance) {
      CreatorService.instance = new CreatorService();
    }
    return CreatorService.instance;
  }

  public async createAddCell() {
    this.handleCreateAddRandomCell();
  }

  public subscribeOnUpdates(callback: UpdateStateCallback) {
    this.subscribersOnQueueUpdate.add(callback);
  }

  public unsubscribeFromUpdates(callback: UpdateStateCallback) {
    this.subscribersOnQueueUpdate.delete(callback);
  }
}
