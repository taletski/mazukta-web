export interface IQueue<T> {
  capacity: number;
  enqueue(element: T): void;
  getData(): Array<T>;
}
