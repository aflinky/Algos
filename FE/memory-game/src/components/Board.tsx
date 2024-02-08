import { BoardState, GameState, GuessState } from "../types";
import Row from "./Row";

type BoardProps = {
  gameState: GameState;
  boardState: BoardState;
  guessState: GuessState;
  guess: (r: number, c: number) => void;
};

function Board(props: BoardProps) {
  const { gameState, boardState, guessState, guess } = props;
  const rows = [];
  // can define manually
  // for (let i = 0; i < 3; i++) {
  //   rows.push(<Row key={`row-${i}`} row={i} guess={guess} boardState={boardState}/>);
  // }
  // alternatively can define by boardState (this is great if board size is variable)
  for (let i = 0; i < boardState.length; i++) {
    rows.push(
      <Row
        key={`row-${i}`}
        row={i}
        guess={guess}
        gameState={gameState}
        boardState={boardState}
        guessState={guessState}
      />
    );
  }
  return <div id="board">{rows}</div>;
}

export default Board;
