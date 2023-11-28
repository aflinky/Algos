import Row from "./Row";

type BoardProps = {
  gameState: string[][];
  play: (r: number, c: number) => void;
}

function Board(props: BoardProps) {
  const { gameState, play } = props;
  const rows = [];
  // can define manually
  // for (let i = 0; i < 3; i++) {
  //   rows.push(<Row key={`row-${i}`} row={i} play={play} gameState={gameState}/>);
  // }
  // alternatively can define by gameState (this is great if board size is variable)
  for (let i = 0; i < gameState.length; i++) {
    rows.push(<Row key={`row-${i}`} row={i} play={play} gameState={gameState}/>);
  }
  return <div id="board">{rows}</div>;
}

export default Board;
