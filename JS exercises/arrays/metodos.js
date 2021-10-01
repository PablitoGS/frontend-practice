//
// Escribe la función camelize(str) que convierta palabras separadas por guión como “mi-cadena-corta”
// en palabras con mayúscula “miCadenaCorta”.
// Esto sería: remover todos los guiones y que cada palabra después de un guión comience con mayúscula.

function camelize(str) {
 	let strToArr = str.split('-');
  	let toUpper= strToArr.map(
      function(item, i)  {
       return i>0 ? item.charAt(0).toUpperCase() + item.slice(1): item
      })
  	return toUpper.join('')
}

// Escribe una función filterRange(arr, a, b) que obtenga un array arr,
// busque los elementos con valor mayor o igual a a y menor o igual a b y devuelva un array con los resultados.
//
// La función no debe modificar el array. Debe devolver un nuevo array.


let arr = [5,3,8,1]

function filterRange(arr, a, b) {
 	return arr.filter(item => (item >= a && item <= b));
}

console.log(filterRange(arr,1,3))
