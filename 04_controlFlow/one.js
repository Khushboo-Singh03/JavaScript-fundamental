//  if 

// const isUserLoggedIn = true
// const tempature = 42;

// if (tempature<50) {
//     console.log("less than 50")
// };


// if (tempature===40) {
//     console.log("less than 50")
// }else{
//     console.log("Temparature is greater than 50");
// }

// const score = 200;

// if (score>100) {
//     const power = "fly";
//     console.log(`User Power:${power}`);
// }
// console.log(`User Power:${power}`);

// const balance = 1000;

// if (balance >500) console.log("Test"), console.log("Test2");

// if (balance<500) {
//     console.log("Less than 500");
// }else if(balance< 750){
//     console.log("Less than 750");
// }else if(balance< 900){
//     console.log("Less than 900");
// }else{
//     console.log("Less than 1200");
// }

// ===============       &&        ===================

// && all the condition should be true 

const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
const guestUser = false

if(isUserLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}

// ===============       ||        ===================

// || any one condition should be true
if(loggedInFromGoogle || loggedInFromEmail || guestUser){
    console.log("User logged in");
}

// < (less than), >(greater than), <=(less than equal), == (equal), != (not equal=> 3!=2 ), === (check data type also)

// (if (false) {
    
// })           if condition is false then block not execute