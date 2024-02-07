import Row from "./Row";

type BoardProps = {
  gameInProgressVariables: Record<string, any>;
  gameState: string | undefined[][];
  guess: (r: number, c: number) => void;
};

function Board(props: BoardProps) {
  const { gameInProgressVariables, gameState, guess } = props;
  const rows = [];
  // can define manually
  // for (let i = 0; i < 3; i++) {
  //   rows.push(<Row key={`row-${i}`} row={i} guess={guess} gameState={gameState}/>);
  // }
  // alternatively can define by gameState (this is great if board size is variable)
  for (let i = 0; i < gameState.length; i++) {
    rows.push(
      <Row key={`row-${i}`} row={i} guess={guess} gameInProgressVariables={gameInProgressVariables} gameState={gameState} />
    );
  }
  return <div id="board">{rows}</div>;
}

export default Board;
