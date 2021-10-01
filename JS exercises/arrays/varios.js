
// Crear un array styles con los items “Jazz” y “Blues”.
// Agregar “Rock-n-Roll” al final.
// Reemplazar el valor en el medio por “Classics”. Tu código para encontrar el valor medio debe funcionar con cualquier array de longitud impar.
// Quitar el primer valor del array y mostrarlo.
// Anteponer Rap y Reggae al array.


let styles = ['Jazz', 'Blues']
let nStyles = []

styles.push('RnR')

if (styles.length % 2 > 0) {
  let middleItem = (styles.length - 1) / 2;
  styles[middleItem] = 'classics'
}

for(let i of styles) {
 nStyles.push(i)
}

let removeFirstnStyles = nStyles.shift();

nStyles.unshift('rap', 'reggae')

console.log(styles)
console.log(removeFirstnStyles)
console.log(nStyles)


//suma numeros

function sumInput() {
  let arr = [];
  let sum = 0;

  while (true) {
    let number = prompt("Un número, por favor...");
    if (isNaN(number) || number === '' || number === null || !isFinite(number)) break;
    arr.push(+number)
  }

  for(let i of arr) {
  	sum += i
  }
  return sum;
}

alert(sumInput())
