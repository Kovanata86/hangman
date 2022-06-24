
function makeCounter() {
    let counter = 0;
   
    return function() {
        if (counter < 3) {
            return ++counter;
        } else {
            return counter;
        }
    };
  }
  
  
  

  
 