let score = 33;
// console.log(typeof score)
// console.log(typeof(score));
// console.log(score);

let score2 = "33";
// console.log(typeof score2)
// console.log(typeof(score2));

let valueNumber = Number(score2)
// console.log(typeof valueNumber)
// console.log(valueNumber);

let score3 = "33adsf";
// console.log(typeof score2)
// console.log(typeof(score2));

let valueNumber2 = Number(score3)
// console.log(typeof valueNumber2)
// console.log(valueNumber2);

let dataNull = null;
// console.log(typeof dataNull);
// console.log(typeof(dataNull));

let valueNull = Number(dataNull);
// console.log(typeof valueNull);
// console.log(valueNull);


let dataUndefined = undefined;
// console.log(typeof dataUndefined);
// console.log(typeof(dataUndefined));

let valueUndefined = Number(dataUndefined);
// console.log(typeof valueUndefined);
// console.log(valueUndefined);

let databoolean = true;
// console.log(typeof databoolean);
// console.log(typeof(databoolean));

let valueboolean = Boolean(databoolean);
// console.log(typeof valueboolean);
// console.log("databoolean",valueboolean);

let isLoggedIn = 1;
// console.log(typeof isLoggedIn);
// console.log(typeof(isLoggedIn));

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);
// console.log("booleanIsLoggedIn",booleanIsLoggedIn);

let isEmpty = "hello";
// console.log(typeof isEmpty);
// console.log(typeof(isEmpty));

let booleanIsEmpty = Boolean(isEmpty);
// console.log(typeof booleanIsEmpty);
// console.log("booleanIsEmpty",booleanIsEmpty);


let isString = "";
// console.log(typeof isString);
// console.log(typeof(isString));

let booleanIsString = Boolean(isString);
// console.log(typeof booleanIsString);
// console.log("booleanIsString",booleanIsString);

let someNum = 33;
let stringNumber = String(someNum);
// console.log(typeof stringNumber);
// console.log(typeof(stringNumber));
// console.log(stringNumber);

/*  
"33"=> 33
"33abc => NaN"
true=> 1, false=>0
1 => true; 0 => false;
"hitesh" = true
"" => false
*/


//  **************   Operations *************

let value = 3;
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(5*2);    // 5*2
// console.log(5**2);   // 5*5
// console.log(5/2);
// console.log(5%2);

let str1 = "hello";
let str2 = " Jiya";
let str3 = str1 + str2;
// console.log(str3)

// console.log("1" +2);  // 12
// console.log(1 +"2");    //12
// console.log("1" +2 + 2);    //122
// console.log(2+ 1 +"2");     //32


// console.timeLog((3 + 4) * 5 % 3)    // standard type of code readability 

let gameCounter = 100;
// ++gameCounter;
gameCounter++
console.log(gameCounter);

// read mdn increment and decrement docs also study type-converison on t39 of official JavaScript docs
