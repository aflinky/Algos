type TileProps = {
  gameInProgressVariables: Record<string, any>;
  gameState: string | undefined[][];
  guess: (r: number, c: number) => void;
  row: number;
  col: number;
};

function Tile(props: TileProps) {
  const { row, col, guess, gameInProgressVariables, gameState } = props;
  const difficulty = gameState.length;

  console.log('gameInProgressVariables?', gameInProgressVariables)
  let classnames = 'tile';
  // if (gameInProgressVariables.inProgress) classnames += ' unguessed';
  if (chosen) classnames += ' unguessed';
  
  const handleOnClick = () => {
    guess(row, col);
  };
  return (
    <div className={classnames} onClick={handleOnClick}>
      <p>{(row * difficulty) + col}</p>
      <p>{` (${row}, ${col})`}</p>
      <p>{gameState[row][col]}</p>
    </div>
  );
}

export default Tile;
