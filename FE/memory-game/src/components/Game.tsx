import { useEffect, useState } from "react";
import Board from "./Board";
import Button from "./Button";
import Slider from "./Slider";
import {
  converCoordinatesToTileId,
  convertTileIdToCoordinates,
  makeNxNGrid,
} from "../utils";
import { BoardState, GameState, GameStatus, GuessState } from "../types";

function Game() {
  // const initialGameStats: Record<string, any> = {
  //   gamesWon: 0,
  // };
  const initialDifficulty: number = 3;
  const initialGameState: GameState = {
    gameStatus: GameStatus["not-started"],
    randomTiles: [],
  };
  const initialBoardState: BoardState = makeNxNGrid(initialDifficulty);
  const initialGuessState: GuessState = { guesses: [], correct: 0 };

  const [difficulty, setDifficulty] = useState(initialDifficulty);
  const [gameState, setGameState] = useState(initialGameState);
  const [boardState, setBoardState] = useState(initialBoardState);
  const [guessState, setGuessState] = useState(initialGuessState);
  // const [gameStats, setGameStats] = useState(initialGameStats);
  // const [result, setResult] = useState("");
  // console.log({ boardState });

  // Adjust board state based on difficulty slider
  useEffect(() => {
    setBoardState(makeNxNGrid(difficulty));
  }, [difficulty]);

  const changeDifficulty = (diff: number) => {
    setDifficulty(diff);
    setGameState({
      ...gameState,
      randomTiles: [],
      gameStatus: GameStatus["not-started"],
    });
    setGuessState(initialGuessState);
  };

  const chooseRandomTiles = () => {
    // need difficulty number of tiles
    const tileIds = new Set<number>();
    while (tileIds.size < difficulty) {
      tileIds.add(Math.floor(Math.random() * difficulty * difficulty));
    }
    console.log({ tileIds: tileIds });
    const tilePositions = [];
    tileIds.forEach((x) => {
      const coordinates = convertTileIdToCoordinates(x);
      // console.log(x, coordinates);
      tilePositions.push(coordinates);
    });
    console.log(Array.from(tileIds));
    return Array.from(tileIds);
  };

  const startGame = () => {
    const randomTiles = chooseRandomTiles();
    setGameState({
      ...gameState,
      randomTiles,
      gameStatus: GameStatus["starting"],
    });
    setGuessState(initialGuessState);

    // Timer for random tile display
    // Must set random tiles again because of timing
    setTimeout(() => {
      setGameState({
        ...gameState,
        randomTiles,
        gameStatus: GameStatus["in-progress"],
      });
    }, 750);
  };

  const checkForWin = (): boolean => {
    console.log(
      "check for win",
      guessState.correct,
      difficulty,
      guessState.correct === difficulty - 1
    );
    // must check for difficult - 1 because timing
    return guessState.correct === difficulty - 1;
  };

  const endGame = () => {
    setGameState({
      ...gameState,
      gameStatus: GameStatus.finished,
    });
  };

  const guess = (row: number, col: number) => {
    // Don't do anything if game is not in progress
    if (gameState.gameStatus !== GameStatus["in-progress"]) return;
    const tileId = converCoordinatesToTileId(row, col, difficulty);
    const correctGuess = gameState.randomTiles.includes(tileId);
    console.log(`clicked tile ${tileId} (${row}, ${col})`);
    setGuessState({
      guesses: [...guessState.guesses, tileId],
      correct: correctGuess ? guessState.correct + 1 : guessState.correct,
    });
    // Only check for win on correct guess
    // could also throw in check for number of guesses versus difficult to save on calls
    if (correctGuess && checkForWin()) endGame();
  };

  useEffect(() => {
    console.log("gameState changed: ", gameState);
  }, [gameState]);

  return (
    <div id="game">
      <h1>Memory Game</h1>
      {/* unnecessary line below, but you get the gist */}
      {/* {gameState.gameStatus === GameStatus["not-started"] && null} */}
      {gameState.gameStatus === GameStatus["starting"] && (
        <p>Memorize the highlighted cells!</p>
      )}
      {gameState.gameStatus === GameStatus["in-progress"] && (
        <p>
          {`Click the cells that were highlighted! ${guessState.correct} right
          out of ${difficulty} total with 
          ${guessState.guesses.length - guessState.correct} mistakes.`}
        </p>
      )}
      {gameState.gameStatus === GameStatus["finished"] && (
        <p>
          {`You got all of the boxes with
          ${guessState.guesses.length - guessState.correct} mistakes!`}
        </p>
      )}
      <p>{`DIFFICULTY: ${difficulty}`}</p>
      <br />
      <Slider difficulty={difficulty} changeDifficulty={changeDifficulty} />
      <Board
        gameState={gameState}
        boardState={boardState}
        guessState={guessState}
        guess={guess}
      />
      <Button text="START GAME" ariaLabel="START" action={startGame} />
    </div>
  );
}

export default Game;
