import { createInitialPosition } from "./initialPosition";

describe("initial position ", () => {
  it("defines the initial position", () => {
    expect(createInitialPosition(5, 5, "N")).toEqual({
      x: 5,
      y: 5,
      direction: "N",
    });
  });
});
