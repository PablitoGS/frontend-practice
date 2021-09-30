function calculator(a, b) {
  return {
    a,
    b,
    sum() {
      return this.a + this.b;
    },
    multi() {
      return this.a * this.b;
    }
  };
}

console.log(calculator(3, 4).sum());
