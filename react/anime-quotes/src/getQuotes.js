async function getQuotes(name) {
  const response = await fetch(
    `https://animechan.vercel.app/api/quotes/character?name=${name}`
  );
  return await response.json();
}

export default getQuotes;
