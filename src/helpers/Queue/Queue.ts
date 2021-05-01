import { IQueue } from "./Queue.type";

export class Queue<T> implements IQueue<T> {
  private queue: Array<T> = [];
  private _capacity: number = 0;

  constructor(capacity: number) {
    this._capacity = capacity;
  }

  public get capacity() {
    return this._capacity;
  }

  public enqueue(element: T) {
    this.queue.unshift(element);
    if (this.queue.length > this.capacity) {
      this.queue.length = this.capacity;
    }
  }

  public getData() {
    return this.queue;
  }
}
