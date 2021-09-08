// Write a function toArray that takes 2 values and returns these values in an array.

var toArray = (a, b) => {
	let myArray = [a,b];
  	return myArray;
}

console.log(toArray('a', 'b'))

//..//

var toArray = (...values) => {
  let myArray = [];
  myArray.push(...values);
  return myArray
}

console.log(toArray('a', 'b', 'c'))


//Write a function getFirstElement that takes an array and returns the first element of the array.

function getFirstElement(array) {
return array[0]
}

//..//

let getFirst = (array) => {
	return array[0]
}

const someArray = [24,10,9,2,3,5];

console.log(getFirst(someArray))
