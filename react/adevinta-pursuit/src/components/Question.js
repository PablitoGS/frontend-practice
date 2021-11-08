import List from "./List";

const Question = ({ onCorrectAnswer, onIncorrectAnswer, questionDto }) => {
  const { question, category, correct_answer, incorrect_answers } = questionDto;

  const answers =
    correct_answer && incorrect_answers
      ? [correct_answer, ...incorrect_answers]
      : [];

  console.log(correct_answer);

  return (
    <>
      <div>Category: {category}</div>
      <h2>{question}</h2>
      <List
        answers={answers.sort()}
        eventChange={(e) => {
          if (e.target.value === correct_answer) {
            onCorrectAnswer();
          } else {
            onIncorrectAnswer();
          }
        }}
      />
    </>
  );
};

export default Question;
