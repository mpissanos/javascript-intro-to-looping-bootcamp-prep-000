function forLoop(array) {
  var myArr = 0  
    for(let  i = 0; i < 25; i++ ) {
      if( i !== 1) {
       myArr.push(`I am ${i}}strange loops.`)
      } else {
       myArr.push(`I am ${i} strange loop.`)
      }
    } 
    return myArr;
  }

