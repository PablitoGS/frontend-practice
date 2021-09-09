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

function OtherMaxSequence(arr) {
    let suma = 0;
    let number = 0;
  
    arr.forEach(function (i) {
      number = number + i; 
      suma = Math.max(suma, number);
      if (number < 0) {
        number= 0; 
      }
    });
  
    return suma;
  }
  
  
maxSequence(myArray);
OtherMaxSequence(myArray);