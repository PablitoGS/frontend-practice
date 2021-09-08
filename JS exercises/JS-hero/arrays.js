// Write a function toArray that takes 2 values and returns these values in an array.

var toArray = (a, b) => {
	let myArray = [a,b];
  	return myArray;
}

console.log(toArray('a', 'b'))


var toArray = (...values) => {
  let myArray = [];
  myArray.push(...values);
  return myArray
}

console.log(toArray('a', 'b', 'c'))
