const heros = ['V', 'JungKook', 'Suga', 'J-Hope', 'Jimin', 'Rm', 'Jin'];
const singers = ['Arijit', 'Doja', 'Selena', 'Zayn', 'V'];

// heros.push(singers);
// console.log(heros)

const allHeros = heros.concat(singers)
// console.log("------",allHeros);
 
const all_New_Heros = [...heros, ...singers]

// console.log("all heros",all_New_Heros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const anotherArr = anotherArray.flat(1);
// console.log(anotherArr);

console.log(Array.isArray("Jiya"));
console.log(Array.from("Jiya"));
console.log(Array.from({name:"Jiya"}));

let scoreArr1 = 100;
let scoreArr2 = 200;
let scoreArr3 = 300;

console.log(Array.of(scoreArr1,scoreArr2, scoreArr3));

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Merge the two arrays into a new array
const mergedArray = Object.assign([], array1, array2);

console.log(mergedArray); // Outputs: [1, 2, 3, 4, 5, 6]
