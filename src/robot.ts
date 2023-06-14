import { Map } from "./plateau";
import { InitialPosition } from "./initialPosition";

type Robot = {
  move: Function;
};

export function startRobot(map: Map, initialPosition: InitialPosition) {
  return {
    move: (commands: string) => {
      let position = initialPosition;
      for (const command of commands) {
        if (command === "M") {
          if (position.direction === "N") {
            position.y += 1;
          }

          if (position.direction === "S") {
            position.y -= 1;
          }
        }
      }
      return Object.values(position).join(", ");
    },
  };
}
