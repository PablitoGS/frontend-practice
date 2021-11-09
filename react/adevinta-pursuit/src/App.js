import "./App.css";
import getQuestion from "./getQuestion";
import Context from "./Context";
import { useEffect, useState, useContext } from "react";
import Question from "./components/Question";
import GameOver from "./components/GameOver";

export default function App() {
  const [score, setScore] = useState(0);
  const [questionDto, setQuestionDto] = useState({});
  const [isGameOver, setIsGameOver] = useState(false);
  const { highscore } = useContext(Context);
  const { checkScore } = useContext(Context);

  useEffect(() => {
    getQuestion().then((data) => {
      setQuestionDto(data);
    });
  }, [score]);

  function onCorrectAnswer() {
    setScore(score + 1);
  }

  function onIncorrectAnswer() {
    setIsGameOver(true);
  }

  function initGame() {
    setIsGameOver(false);
    checkScore(score);
    setScore(0);
  }

  return (
    <div className="App">
      <div className="highscore">Highscore: {highscore.score}</div>
      <div className="score">Your score: {score}</div>
      {!isGameOver ? (
        <Question
          questionDto={questionDto}
          onCorrectAnswer={onCorrectAnswer}
          onIncorrectAnswer={onIncorrectAnswer}
        />
      ) : (
        <GameOver initGame={initGame} />
      )}
    </div>
  );
}
