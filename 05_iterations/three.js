// for of

const arr = [1,3,4,6,7]

for (const num of arr) {
    // console.log(`num ${num}`)
}

let greetings = "Hello World!";

for (const greet of greetings) {
    // console.log(`greetings ${greet}`);
}

// Maps

const map = new Map();
map.set('IN', 'India',)
map.set('USA', 'United State of America')
map.set('UK', 'United Kingdom')

// console.log(map);

for (const key of map) {
    // console.log(`key : ${key}`);
}

for (const [key,value] of map) {
    console.log(`key : ${value}`);
}


const myObject = {
    game1: 'NFS',
    game2: 'Pubj',
    game3: 'COD',
}

for (const [key, value] of myObject) {
    console.log(`value : ${key}`);
}
