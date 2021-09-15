const init = (size) => {
  let arr = new Array(size)
  
  for (let i= 0; i< arr.length; i++) {
    arr[i] = new Array(size);
  }
  return arr;
}

const multi = (size) => {
  let table = init(size);
  
  table[0][0] = 0;
  
  for(let i = 1; i< size; i++) {
    table[0][i] = i;  
    table[i][0] = i;      
  }
  
  for(let i = 1; i< size; i++) {
    for(let j = 1; j< size; j++) {
      table[i][j] = i*j;
    }
  }
  
  for(let numbers in table) {
    console.log(table[numbers])
  }
}

multi(10)