import { createMap } from "./plateau";

describe("Plateau", () => {
  it("defines the size of the plateau", () => {
    expect(createMap(5, 5)).toEqual({
      x: 5,
      y: 5,
    });
  });
});
