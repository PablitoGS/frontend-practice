const GameOver = ({ initGame }) => {
  return (
    <>
      <h2>GAME OVER</h2>
      <button onClick={initGame} className="button">
        Play again
      </button>
    </>
  );
};

export default GameOver;
