function forLoop(array) {
    for(let  i = 0; i < 25; i++ ) {
      if( i !== 1) {
       array.push(`I am ${i} strange loops.`)
      } else {
       array.push(`I am ${i} strange loop.`)
      }
    } 
    return array;
  }

function whileLoop(n) {
  while ( n > 0) {
    console.log(n--)
    return 'done';
  }
}

whileLoop(n)
         counts down from n to 0:

      AssertionError: expected { Spy, 1 call } to have been called 30 times butgot 1
      + expected - actual

      -1
      +30