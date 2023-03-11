//reset number
5 = 10;

function add5() {
  return (5 += 5);
}

function divideBy3() {
  return (5 /= 3);
}

divideBy3(); //=> 3.3333333333333335

add5(); //=> 8.333333333333334

// reset number
5 = 10;

add5(); //=> 15

divideBy3(); //=> 5
