import React from "react";
import { CreatorService } from "./CreatorService";
import { CreatorState } from "./CreatorService.type";

test("New instance should return empty list of creations", () => {
  const creator = CreatorService.getInstance();

  expect(creator.creations).toEqual([]);
});

test("After creation method called creations should not be empty", async () => {
  const creator = CreatorService.getInstance();
  await creator.createAddRandomElement();

  expect(creator.creations.length).not.toEqual(0);
});

test("Should update subscribers after creation method was called", async () => {
  let state: CreatorState = [];

  const setState = (newState: CreatorState) => {
    state = [...newState];
  };

  const creator = CreatorService.getInstance();
  creator.subscribeOnUpdates(setState);

  await creator.createAddRandomElement();
  await creator.createAddRandomElement();
  await creator.createAddRandomElement();

  expect(state).toEqual(creator.creations);
});

test("Should unsubscribe from updates correctly", async () => {
  let state: CreatorState = [];

  const setState = (newState: CreatorState) => {
    state = [...newState];
  };

  const creator = CreatorService.getInstance();
  creator.subscribeOnUpdates(setState);

  await creator.createAddRandomElement();
  await creator.createAddRandomElement();
  expect(state).toEqual(creator.creations);

  creator.unsubscribeFromUpdates(setState);

  await creator.createAddRandomElement();
  expect(state).not.toEqual(creator.creations);
});

test("Should create occasion only if three elements in a row are of the same type and category", async () => {
  let state: CreatorState = [];

  const setState = (newState: CreatorState) => {
    state = [...newState];
  };

  const creator = CreatorService.getInstance();
  creator.subscribeOnUpdates(setState);

  while (state[0]?.type !== "occasion") {
    await creator.createAddRandomElement();
  }

  const lastThreeElementsBeforeOccasion = state.slice(1, 3);
  const lastElementBeforeOccasion = lastThreeElementsBeforeOccasion[0];
  const elementsBeforeOccasionAreOfTheSameTypeAndCategory = lastThreeElementsBeforeOccasion.every(
    (element) =>
      element.type === lastElementBeforeOccasion.type &&
      element.category === lastElementBeforeOccasion.category
  );
  expect(elementsBeforeOccasionAreOfTheSameTypeAndCategory).toBe(true);
});
