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
