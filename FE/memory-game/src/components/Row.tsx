import { BoardState, GameState, GuessState } from "../types";
import Tile from "./Tile";

type RowProps = {
  gameState: GameState;
  boardState: BoardState;
  guessState: GuessState;
  guess: (r: number, c: number) => void;
  row: number;
};

function Row(props: RowProps) {
  const { row, guess, gameState, boardState, guessState } = props;
  const tiles = [];
  // can define manually
  // for (let i = 0; i < 3; i++) {
  //   tiles.push(<Tile key={`tile-${row}-${i}`} row={row} col={i} guess={guess} boardState={boardState} />);
  // }
  // alternatively can define by boardState (this is great if board size is variable)
  for (let i = 0; i < boardState[row].length; i++) {
    tiles.push(
      <Tile
        key={`tile-${row}-${i}`}
        row={row}
        col={i}
        guess={guess}
        gameState={gameState}
        boardState={boardState}
        guessState={guessState}
      />
    );
  }
  return <div className="row">{tiles}</div>;
}

export default Row;
