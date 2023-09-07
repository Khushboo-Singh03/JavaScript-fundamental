// object can be defined as literal & constructor

// 1) Object Literals

const mySym = Symbol("bhanu")

const user_js = {
    name: "Jiya",
    "full Name":"Khushboo Singh",
    [mySym]: "myKey1",
    age:25,
    location: "Mumbai",
    "email":"google@gmail.com",
    isLoggedIn: false,
    lastLoginDay : ["Monday", "Saturday"]
}

// console.log("First way--",user_js.email)
// console.log("First way--",user_js.full Name)   // wrong way implemention
// console.log("Second way--",user_js["email"])
// console.log("Full Name--",user_js["full Name"])
// console.log("Full Name--",user_js[mySym])

user_js.email = "jiya@gmail.com";
user_js.email = "jiya@gmial.com";
// console.log(user_js);


user_js.greetingOne = function(){
    console.log("Hello Javascript");
}

user_js.greetingTwo = function(){
    console.log(`Hello Javascript,${this.email}`);
}

console.log("---------- ",user_js.greetingOne());
console.log("---------- ",user_js.greetingTwo());
// Object.freeze(user_js);