import { decode } from "html-entities";

async function getQuestion(data = {}) {
  const response = await fetch("https://opentdb.com/api.php?amount=1");
  const { results } = await response.json();

  const [questionDto] = results;
  const { category, question, correct_answer, incorrect_answers } = questionDto;

  return {
    category: decode(category),
    question: decode(question),
    correct_answer: decode(correct_answer),
    incorrect_answers: incorrect_answers.map((val) => decode(val)),
  };
}

export default getQuestion;
