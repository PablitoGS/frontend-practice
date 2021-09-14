//Crea una matriz con un tamaño indicado por parámetros,
//recorre la matriz e introduce número aleatorios.
//Por último, muéstralos por consola tal como quedarían en la matriz, es decir,
//si el array es de 3×3 tendremos que hace que cada 3 números baje una línea

const theMatrix = (width, height) => {
 	let numbers;
  let row = [];

	for(let i = 0; i< height; i++) {

      	for(let j = 0; j<width; j++) {
         numbers =  Math.round(Math.random()*10)
          row[j] = numbers
        }
         console.log(row)

    }
}

theMatrix(3,3)
