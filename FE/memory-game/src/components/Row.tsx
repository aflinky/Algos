import Tile from "./Tile";

type RowProps = {
  gameInProgressVariables: Record<string, any>;
  gameState: string | undefined[][];
  guess: (r: number, c: number) => void;
  row: number;
};

function Row(props: RowProps) {
  const { row, guess, gameInProgressVariables, gameState } = props;
  const tiles = [];
  // can define manually
  // for (let i = 0; i < 3; i++) {
  //   tiles.push(<Tile key={`tile-${row}-${i}`} row={row} col={i} guess={guess} gameState={gameState} />);
  // }
  // alternatively can define by gameState (this is great if board size is variable)
  for (let i = 0; i < gameState[row].length; i++) {
    tiles.push(
      <Tile
        key={`tile-${row}-${i}`}
        row={row}
        col={i}
        guess={guess}
        gameInProgressVariables={gameInProgressVariables}
        gameState={gameState}
      />
    );
  }
  return <div className="row">{tiles}</div>;
}

export default Row;
