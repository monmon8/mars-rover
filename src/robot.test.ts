import { startRobot } from "./robot";

describe(" robot", () => {
  it("robot moves up ", () => {
    const map = {
      x: 5,
      y: 5,
    };
    const initialPosition = {
      x: 1,
      y: 1,
      direction: "N",
    };

    const robot = startRobot(map, initialPosition);

    expect(robot.move("MM")).toEqual("1, 3, N");
  });

  it("robot moves down ", () => {
    const map = {
      x: 5,
      y: 5,
    };
    const initialPosition = {
      x: 2,
      y: 4,
      direction: "S",
    };

    const robot = startRobot(map, initialPosition);

    expect(robot.move("MM")).toEqual("2, 2, S");
  });
});
