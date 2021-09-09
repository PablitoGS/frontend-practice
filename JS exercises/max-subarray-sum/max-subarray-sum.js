const myArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

function maxSequence(arr) {
    let sumado = 0;

    for (let i = 0; i < arr.length; i++) {
        let initSum= 0;
        for (let counter = i; counter < arr.length; counter++) {
            initSum+= arr[counter];
            sumado =  Math.max(sumado, initSum);
        }                     
    }
    return console.log(sumado)
}
  
maxSequence(myArray)