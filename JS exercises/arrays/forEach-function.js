//Implementar la función forEach, que reciba un array y un callback, 
//de tal forma que para cada elemento del array ejecute el callback

function forEach(array, cb) {
    for(let i=0; i<array.length; i++) {
        cb(arr[i]);
    }
}

const arr = [1,2,3]

forEach(arr, item => console.log(item))