const multi = (width, height) => {
  let table = [];

  for(let i = 0; i< height; i++) {
    table[i] = []

    for(let j = 0; j< height; j++) {
      table[i][j] = i

      if(i>0) {
        table[0][j] = j
      }
      if(j>0) {
        table[i][j] = i*j
      }
    }
  }

  for(let numbers in table) {
    console.log(table[numbers])
  }
}

multi(10,10)
