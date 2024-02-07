import { useEffect, useState } from "react";
import Board from "./Board";
import Button from "./Button";
import Slider from "./Slider";

const makeNxNGrid = (n: number): string | undefined[][] => {
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

function Game() {
  const initialGameStats: Record<string, any> = {
    gamesWon: 0,
  };
  const initialGameInProgessVariables: Record<string, any> = {
    inProgress: false,
    randomTiles: [],
    guesses: [],
  };
  const [difficulty, setDifficulty] = useState(3);
  const initialGameState: string | undefined[][] = makeNxNGrid(difficulty);
  const [gameState, setGameState] = useState(initialGameState);
  const [gameInProgressVariables, setGameInProgressVariables] = useState(
    initialGameInProgessVariables
  );
  const [gameStats, setGameStats] = useState(initialGameStats);
  const [result, setResult] = useState("");
  // console.log({ gameState });

  useEffect(() => {
    setGameState(makeNxNGrid(difficulty));
  }, [difficulty]);

  const chooseRandomTiles = () => {
    // need difficulty number of tiles
    const tileIds = new Set();
    while (tileIds.size < difficulty) {
      tileIds.add(Math.floor(Math.random() * difficulty * difficulty));
    }
    console.log({ tileIds: tileIds });
    const tilePositions = [];
    tileIds.forEach((x) => {
      const row = Math.floor(Number(x) / 3);
      const col = Math.floor(Number(x) % 3);
      console.log(x, row, col);
      tilePositions.push([row, col]);
    });
    console.log(Array.from(tileIds));
    return Array.from(tileIds);
  };

  const startGame = () => {
    // chooseRandomTiles();
    setGameInProgressVariables({
      ...gameInProgressVariables,
      randomTiles: chooseRandomTiles(),
    });
    // Light up tiles
    // Unlight up tiles
    setGameInProgressVariables({
      ...gameInProgressVariables,
      inProgress: true,
    });
  };

  const guess = (row: number, col: number) => {
    const tileId = (row * difficulty) + col;
    console.log(`clicked tile ${tileId} (${row}, ${col})`);
    setGameInProgressVariables({
      ...gameInProgressVariables,
      guesses: [...gameInProgressVariables.guesses, tileId]
    })
  };

  return (
    <div id="game">
      <h1>Memory Game</h1>
      <p>{`RESULT: ${result}`}</p>
      <p>{`DIFFICULTY: ${difficulty}`}</p>
      <br />
      <Slider difficulty={difficulty} setDifficulty={setDifficulty} />
      <Board
        gameInProgressVariables={gameInProgressVariables}
        gameState={gameState}
        guess={guess}
      />
      <Button text="START GAME" ariaLabel="START" action={startGame} />
    </div>
  );
}

export default Game;
