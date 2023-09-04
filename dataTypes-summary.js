// # Primitive Data Type (call by value )
// 7 types: String, Number, Boolean, Null, Undefined, Symbol 

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

// # Non-Primitive Data Type (call by reference)
// Array, Objects, Functions

const heros = ['V', 'JungKook', 'Suga', 'J-Hope', 'Jimin', 'Rm', 'Jin'];
const myObj = {
    name:"Jiya",
    age: 24,
}

const myFunction = function(){
    console.log("Hello Jiya");
}

// myFunction()
/*
1  Stack (Primitve) Whenever a variable is declared, it receives a copy
2  Heap (Non-Primitive) When a variable is allocated in the heap, it receives a reference to its original value
*/


let myName = "Jiya";
let anotherName = myName;
anotherName = "Khushboo";
// console.log(myName);
// console.log(anotherName);


let userOne = {
    email: "user@goggle.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "jiya@google.com"

console.log(userOne.email);
console.log(userTwo.email);
