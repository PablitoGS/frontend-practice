import "./App.css";
import getQuestion from "./getQuestion";
import { useEffect, useState } from "react";
import Question from "./components/Question";
import GameOver from "./components/GameOver";

export default function App() {
  const [score, setScore] = useState(0);
  const [questionDto, setQuestionDto] = useState({});
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    getQuestion().then((data) => {
      setQuestionDto(data);
    });
  }, [score]);

  function onCorrectAnswer() {
    setScore(score + 1);
  }

  function onIncorrectAnswer() {
    setScore(0);
    setIsGameOver(true);
  }

  return (
    <div className="App">
      <div className="highscore">Highscore: {score}</div>
      {!isGameOver ? (
        <Question
          questionDto={questionDto}
          onCorrectAnswer={onCorrectAnswer}
          onIncorrectAnswer={onIncorrectAnswer}
        />
      ) : (
        <GameOver />
      )}
    </div>
  );
}
