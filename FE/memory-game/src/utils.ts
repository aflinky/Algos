export const makeNxNGrid = (n: number): undefined[][] => {
    // Fun fact... the following line does not work and produces => [[undefined]]
    // new Array(n).fill(new Array(n).fill(undefined));
    // This is because it is unable to read n as arrayLength and instead takes it as an element and then immediately overwrites it
  
    const grid = [];
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push(undefined);
      }
      grid.push(row);
    }
  
    return grid;
  };

export const convertTileIdToCoordinates = (id: number): [number, number] => {
  const row = Math.floor(Number(id) / 3);
  const col = Math.floor(Number(id) % 3);
  return [row, col];
};

export const converCoordinatesToTileId = (
  row: number,
  col: number,
  difficulty: number
): number => {
  return row * difficulty + col;
};
