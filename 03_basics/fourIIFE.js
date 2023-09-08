// Immediately Invoked Function Expression (IIFE)

(function chai() {      //named iife
    console.log(`Regular DB connected`);
})();

(()=> {         //unamed iife
    console.log(`Arrow DB connected`);
})();
((name)=> {     //parameter iife
    console.log(`Arrow DB connected${name}`);
})('jiya');


// () wrap the function and () is execution 

// IIFE - a function which is invoked immediately and prevent from global pollution 
  