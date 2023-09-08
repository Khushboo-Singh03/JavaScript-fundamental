const user = {
    userName :"Jiya",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to website`);
        console.log("inner",this);
    }
}
// user.welcomeMessage()
// user.userName = "Khushboo";
// user.welcomeMessage()

// console.log("outer",this);

// function chai() {
//     let userName = "Jiya"
//     console.log(this.userName)
// }
// chai()


// const chai = function(){
//     let userName = "Jiya"
//     console.log(this.userName)
// }

// chai()

// ===========      Arrow Function      ========== 

const chai2 = ()=>{
    let userName = "Jiya"
    console.log(this)
}

// chai2()

// Arrow function
const addTwo = (num1, num2) =>{
    return num1 + num2
}

// console.log(addTwo(3,4))

//  implicit  return (only use for single line code)
const addTwo2 = (num1, num2) =>  num1 + num2
// console.log(addTwo2(3,4))

const addTwo3 = (num1, num2) => ( num1 + num2)
// console.log(addTwo3(3,4))
const addTwo4 = (num1, num2) => ({userName:"Jiya"})
console.log(addTwo4(3,4))

// const myArray = [2,4,6,8,9,4]
// myArray.forEach(()=>{})
