import { useState } from "react";

type TileProps = {
  gameState: string[][];
  play: (r: number, c: number) => void;
  row: number;
  col: number;
};

function Tile(props: TileProps) {
  const { row, col, play, gameState } = props;
  const [stylingClass, setStylingClass] = useState("");
  const handleOnClick = () => {
    // console.log("clicked ", row, col);
    // setStylingClass("green");
    play(row, col);
  };
  return (
    <div className={`tile ${stylingClass}`} onClick={handleOnClick}>
      {/* <p>{`Tile ${row}, ${col}`}</p> */}
      <p>{gameState[row][col]}</p>
    </div>
  );
}

export default Tile;
