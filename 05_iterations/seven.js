const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = myNums.map((item)=>(
//     item+10
// ));

const newNum = myNums
    .map((item) => (item * 10))
    .map((item) => (item + 1))
    .map((item) => (item - 2))
    .filter((num) => (num > 40))



console.log(newNum);
