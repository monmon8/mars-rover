export type Map = {
  x: number;
  y: number;
};

export function createMap(x: number, y: number): Map {
  return {
    x,
    y,
  };
}
