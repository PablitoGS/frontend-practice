//Write a function indexOfIgnoreCase taking two strings
//and determining the first occurrence of the second string in the first string.
//The function should be case insensitive.

function indexOfIgnoreCase(s1, s2) {
  let st1 = s1.toLowerCase();
  let st2 = s2.toLowerCase();
  return st1.indexOf(st2);
}

//Write a function secondIndexOf,
//taking two strings and determining the second occurrence of the second string in the first string.
//If the search string does not occur twice, -1 should be returned.

function secondIndexOf(st1, st2) {
  let init =  st1.indexOf(st2);
  let nextPos = st1.indexOf(st2, (init + 1))
  return nextPos
}
