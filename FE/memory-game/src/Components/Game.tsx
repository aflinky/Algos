import { useEffect, useState } from "react";
import Board from "./Board";
import Button from "./Button";

function Game() {
  const initialGameState: string[][] = new Array(3).fill(
    new Array(3).fill(undefined)
  );
  const initialGameStats: Record<string, any> = {
    count: 0,
  };
  const [gameState, setGameState] = useState(initialGameState);
  const [turnCounter, setTurnCounter] = useState(0);
  const [gameStats, setGameStats] = useState(initialGameStats);
  const [result, setResult] = useState("");
  const [player, setPlayer] = useState("X");
  console.log({ gameState });

  const play = (row: number, col: number) => {
    if (result) return;
    console.log(`${player} clicked tile ${row}, ${col}`);
    // Deep copy of nested array
    const copyOfGameState = JSON.parse(JSON.stringify(gameState));
    console.log({ copyOfGameState });
    console.log("seeting");
    copyOfGameState[row][col] = player;
    console.log({ copyOfGameState });
    setGameState(copyOfGameState);
    setTurnCounter(turnCounter + 1);
  };

  const startNewGame = () => {
    setGameState(initialGameState);
    setTurnCounter(0);
    // Switch who goes first each game
    setPlayer(gameStats.count % 2 ? "X" : "O");
    setResult("");
  };

  const checkWinner = (player: string): string | undefined => {
    // Winner requires at least 5 turns to have been taken
    if (turnCounter >= 5) {
      // Straight row
      console.log("checking winner", gameState);
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          console.log(row, col, gameState[row][col]);
          if (gameState[row][col] !== player) break;
          else if (col === 2) return player;
        }
      }

      // Straight column
      for (let col = 0; col < 3; col++) {
        for (let row = 0; row < 3; row++) {
          console.log(row, col, gameState[row][col]);
          if (gameState[row][col] !== player) break;
          else if (row === 2) return player;
        }
      }

      // Diagonal desc
      for (let i = 0; i < 3; i++) {
        if (gameState[i][i] !== player) break;
        else if (i === 2) return player;
      }

      // Diagonal asc
      for (let i = 0; i < 3; i++) {
        if (gameState[i][2 - i] !== player) break;
        else if (i === 2) return player;
      }

      // Tie
      if (turnCounter === 9) return "tie";
    }
  };

  useEffect(() => {
    if (turnCounter === 0) return;
    const checkWinnerResult = checkWinner(player);
    console.log("result of check winner: ", checkWinnerResult);
    if (checkWinnerResult) {
      // declare winner
      setResult(checkWinnerResult);
      setGameStats({
        ...gameStats,
        count: gameStats.count + 1,
        [checkWinnerResult === "tie" ? "tie" : player]:
          (gameStats[player] ?? 0) + 1,
      });
      return;
    }
    console.log("set player");
    setPlayer(player === "X" ? "O" : "X");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turnCounter]);

  return (
    <div id="game">
      <h1>Tic Tac Toe</h1>
      <p>{`${gameStats.count} Games Played`}</p>
      <p>{`Score: ${JSON.stringify(gameStats)}`}</p>
      <p>
        {result ? `Game Over: ${result} wins` : `${turnCounter} Turns taken`}
      </p>
      {!result && <p>{`${player}'s turn`}</p>}
      <Board gameState={gameState} play={play} />
      <Button
        text="New Game"
        ariaLabel="new game button"
        action={startNewGame}
      />
    </div>
  );
}

export default Game;
