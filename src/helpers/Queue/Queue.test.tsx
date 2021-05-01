import React from "react";
import { Queue } from "./Queue";

test("Queue constructor creates an empty instance", () => {
  const TEST_QUEUE_CAPACITY = 10;

  const testQueue = new Queue(TEST_QUEUE_CAPACITY);
  expect(testQueue.getData().length).toBe(0);
});

test("Queue constructor creates an instance with a provided capacity", () => {
  const TEST_QUEUE_CAPACITY = 10;

  const testQueue = new Queue(TEST_QUEUE_CAPACITY);
  expect(testQueue.capacity).toBe(TEST_QUEUE_CAPACITY);
});

test("Enqueued elements are accessible with getData()", () => {
  const TEST_QUEUE_CAPACITY = 10;
  const FIRST_ELEMENT = "first-element";
  const SECOND_ELEMENT = 5;
  // type TEST_TYPE = string;
  const testQueue = new Queue(TEST_QUEUE_CAPACITY);

  testQueue.enqueue(FIRST_ELEMENT);
  expect(testQueue.getData().length).toBe(1);
  expect(testQueue.getData()[0]).toBe(FIRST_ELEMENT);

  testQueue.enqueue(SECOND_ELEMENT);
  expect(testQueue.getData().length).toBe(2);
  expect(testQueue.getData()[0]).toBe(SECOND_ELEMENT);
  expect(testQueue.getData()[1]).toBe(FIRST_ELEMENT);
});

test("Queue does not exceed its capacity", () => {
  const TEST_QUEUE_CAPACITY = 5;
  const elementsToEnqueue = [1, 2, 3, 4, 5, 6];

  const testQueue = new Queue(TEST_QUEUE_CAPACITY);
  elementsToEnqueue.forEach((element) => testQueue.enqueue(element));

  expect(testQueue.getData().length).toBe(TEST_QUEUE_CAPACITY);

  testQueue.enqueue("yet-another-element");

  expect(testQueue.getData().length).toBe(TEST_QUEUE_CAPACITY);
});
