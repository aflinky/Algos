type TileProps = {
  gameState: string[][];
  play: (r: number, c: number) => void;
  row: number;
  col: number;
};

function Tile(props: TileProps) {
  const { row, col, play, gameState } = props;
  const handleOnClick = () => {
    play(row, col);
  };
  return (
    <div className='tile' onClick={handleOnClick}>
      <p>{gameState[row][col]}</p>
    </div>
  );
}

export default Tile;
