export enum GameStatus {
  "not-started",
  "starting",
  "in-progress",
  "finished",
}

export type GameState = {
  gameStatus: GameStatus;
  randomTiles: number[];
};
export type GuessState = {
  guesses: number[];
  correct: number;
};
export type BoardState = string | undefined[][];
