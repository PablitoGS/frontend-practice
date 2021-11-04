async function getQuotes(name) {
  const response = await fetch(
    `https://animechan.vercel.app/api/quotes/character?name=${name}`
  );
  const res = await response.json();
  return Array.isArray(res) ? res : [];
}

export default getQuotes;
