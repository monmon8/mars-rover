import { Map } from "./createMap";
import { InitialPosition } from "./initialPosition";

type Robot = {
  move: Function;
};

export function startRobot(map: Map, initialPosition: InitialPosition) {
  return {
    move: (commands: string) => {
      let position = initialPosition;

      const directions = ["N", "E", "S", "W"];

      let currentIndex = directions.indexOf(position.direction);

      for (const command of commands) {
        // todo: refactor to seperate function
        if (command === "M") {
          if (position.direction === "N") {
            position.y += 1;
          }

          if (position.direction === "S") {
            position.y -= 1;
          }

          if (position.direction === "E") {
            position.x += 1;
          }

          if (position.direction === "W") {
            position.x -= 1;
          }
        }

        // todo: refactor to seperate function
        if (command === "R") {
          if (currentIndex === 3) {
            currentIndex = 0;
          } else {
            currentIndex += 1;
          }
        }

        if (command === "L") {
          if (currentIndex === 0) {
            currentIndex = 3;
          } else {
            currentIndex -= 1;
          }
        }

        position.direction = directions[currentIndex];
      }
      return Object.values(position).join(", ");
    },
  };
}
