import { BoardState, GameState, GameStatus, GuessState } from "../types";
import { converCoordinatesToTileId } from "../utils";

type TileProps = {
  gameState: GameState;
  boardState: BoardState;
  guessState: GuessState;
  guess: (r: number, c: number) => void;
  row: number;
  col: number;
};

function Tile(props: TileProps) {
  const { row, col, guess, gameState, boardState, guessState } = props;
  const difficulty = boardState.length;

  const { gameStatus, randomTiles } = gameState;
  const { guesses } = guessState;

  const tileId = converCoordinatesToTileId(row, col, difficulty);
  const chosen = randomTiles.includes(tileId);
  const guessed = guesses.includes(tileId);

  // console.log('gameState?', gameState)
  let classnames = "tile";
  if (gameStatus === GameStatus.starting && chosen) classnames += "  lit";
  if (
    gameStatus === GameStatus["in-progress"] ||
    gameStatus === GameStatus.finished
  ) {
    if (!guessed) classnames += " unguessed";
    if (chosen && guessed) classnames += " correct";
    if (!chosen && guessed) classnames += " incorrect";
  }

  const handleOnClick = () => {
    guess(row, col);
  };
  return (
    <div id={`tile-${tileId}`} className={classnames} onClick={handleOnClick}>
      <p>{row * difficulty + col}</p>
      <p>{` (${row}, ${col})`}</p>
      <p>{boardState[row][col]}</p>
    </div>
  );
}

export default Tile;
