type ResultsContainerProps = {
  gameStats: Record<string, any>;
};

function ResultsContainer(props: ResultsContainerProps) {
  const { gameStats } = props;

  return (
    <>
      {gameStats.count > 0 && (
        <div id="results-container">
          <h4>Games Played: {gameStats.count}</h4>
          <h4>X Won: {gameStats.X || 0}</h4>
          <h4>O Won: {gameStats.O || 0}</h4>
          {gameStats.tie !== undefined && <h4>Ties: {gameStats.O || 0}</h4>}
        </div>
      )}
    </>
  );
}

export default ResultsContainer;
