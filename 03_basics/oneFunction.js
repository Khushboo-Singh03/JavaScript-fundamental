function sayMyName() {
    // console.log("J");
    // console.log("i");
    // console.log("y");
    // console.log("a");
}

// sayMyName()         // this is the reference of function :-sayMyName and () is known as executor 


// function addTwoNumber(number1,number2){       
//     console.log(number1+number2);
// }


function addTwoNumber(number1, number2) {
    return number1 + number2
    // const result = number1+ number2;
    // return result;
    // console.log("Jiya");   after return fuction not take any things
}
// addTwoNumber(3,6);              // when we call a function and put value this is called argument ex: 3,7 are arguments
// {addTwoNumber(3,"a");
// addTwoNumber(3,"4");
// addTwoNumber(3,null);}  here we have to check the datatype for proper output

const result = addTwoNumber(3, 5)
// console.log(result)

// function loginUserMessage(userName) {
//     if (userName === undefined) {
//         console.log("Please Enter a Username")
//         return
//     }
//     return `${userName} just logged In`
// }
// console.log(loginUserMessage("Jiya"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())


// function loginUserMessage(userName) {
//     if (!userName) {
//         console.log("Please Enter a Username")
//         return
//     }
//     return `${userName} just logged In`
// }
// console.log(loginUserMessage())


function loginUserMessage(userName = "Khushboo") {
    if (!userName) {
        console.log("Please Enter a Username")
        return
    }
    return `${userName} just logged In`
}
// console.log(loginUserMessage("Jiya"))


function calculateCartPrice (...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,600));   // [200,400,600]


function calculateCartPrice (val1, val2, ...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,600,2000));    // [600,2000]

const user = {
    userName : "jiya",
    price: 199,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    userName : "khushboo",
    price: 499,
})

const myArr = [200,400,600];

function secondValue(getArr){
    return  getArr[1];
}

// console.log("value", secondValue(myArr));

console.log(secondValue(
    [200,400,600]
));
