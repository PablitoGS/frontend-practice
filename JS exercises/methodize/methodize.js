const add= (a,b) => a + b

Number.prototype.add = methodize(add);

function methodize (func) {
    return function(b){
      return func(this, b);
    }
  }
  
  console.log((8).add(12) );