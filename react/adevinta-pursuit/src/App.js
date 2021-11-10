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
  const [isLoading, setIsLoading] = useState(false);
  const { highscore } = useContext(Context);
  const { checkScore } = useContext(Context);

  useEffect(() => {
    getQuestion().then((data) => {
      setQuestionDto(data);
      setIsLoading(false);
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
    setIsLoading(true);
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
          isLoading={isLoading}
        />
      ) : (
        <GameOver initGame={initGame} />
      )}
    </div>
  );
}
