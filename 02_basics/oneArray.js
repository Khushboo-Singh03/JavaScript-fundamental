const myArr = [0,2,1,3,5]
const myHeros = ['V', 'JungKook', 'Suga', 'J-Hope', 'Jimin', 'Rm', 'Jin'];

const myArr2 = new Array(1,22,3,4,5);

// console.log(myArr2[1]);

// Array methods

// myArr.push(6);
myArr.push(7);      //add the data in last
myArr.pop();        //remove the data from last
myArr.unshift(9);   //add the data at first index
myArr.shift();      //remove the data from first index
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(1));

const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

console.log("A  ", myArr);

const myn1 = myArr.slice(1,3);
// console.log(myn1);
// console.log("B", myn1);
console.log("B  ", myArr);


const myn2 = myArr.splice(1,3);   // reomve the data from starting to end which is given by user
// console.log(myn2);
// console.log("B", myn2);

console.log("C  ", myArr);
