//Write a function indexOfIgnoreCase taking two strings
//and determining the first occurrence of the second string in the first string.
//The function should be case insensitive.

function indexOfIgnoreCase(s1, s2) {
  let st1 = s1.toLowerCase();
  let st2 = s2.toLowerCase();
  return st1.indexOf(st2);
}
