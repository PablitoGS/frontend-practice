async function getQuestion(name) {
    const response = await fetch("https://opentdb.com/api.php?amount=1");
    const { results } = await response.json();
  
    return results[0];
  }
  
  export default getQuestion;
  