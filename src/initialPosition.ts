export type InitialPosition = {
  x: number;
  y: number;
  direction: string;
};

export function createInitialPosition(
  x: number,
  y: number,
  direction: string
): InitialPosition {
  return {
    x,
    y,
    direction,
  };
}
