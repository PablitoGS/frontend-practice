function primeTester (n) {
  let number = n;

  if(n < 2 ) {
    return false;
  }

  while(n > 2) {
    n--;
    if(number % n == 0) {
      return false;
    }
	}
  return true
}


//// TODO: 
function primeList (start, end) {

}
