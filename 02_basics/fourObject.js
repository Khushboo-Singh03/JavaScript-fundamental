// object can be defined as literal & constructor

// 2) singleton object   -- when create by constructor (matlab ye apne tarah ka ek hi object hai)
// Object.create        //this is called singleton

const tinderUser = {}   
// const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;


// console.log(tinderUser);

const regularUser = {
    email :"some@gmail.com",
    fullName:{
        userFullName :{
            firstName:"Jiya",
            lastName:"Amor"
        }
    }
}
// console.log(regularUser.fullName?.userFullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

// const obj4 = {obj1, obj2, obj3}
// const obj4 = {...obj1, ...obj2, ...obj3}
// const obj4 = {...obj1, ...obj2, ...obj3}
// const obj4 = Object.assign(obj1,obj2, obj3)
// const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4);

const users = [
    {
        id:1,
        email:"one@gmail.com"
    },
    {
        id:2,
        email:"two@gmail.com"
    },
    {
        id:3,
        email:"three@gmail.com"
    },
    {
        id:4,
        email:"four@gmail.com"
    },
    {
        id:5,
        email:"five@gmail.com"
    },
]

// console.log("tinder User",tinderUser)
// console.log(users[4].email)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))

const objectValue = Object.values(tinderUser);
// console.log(objectValue);

// console.log(Object.entries(tinderUser))


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName : "JS in hindi",
    price:999,
    courseInstructor: "Hitesh"
}

// console.log("general way",course.courseInstructor);
// console.log("secure way",course[courseInstructor]);

// const {courseInstructor} = course;
const {courseInstructor : instructor} = course;
console.log(instructor)

// object JSON

// {
//     "name" : "JS in hindi",
//     "amount":"free",
//     "courseInstructor": "Hitesh"
// }

// object Array

// [
//     {},
//     {},
//     {},
// ]