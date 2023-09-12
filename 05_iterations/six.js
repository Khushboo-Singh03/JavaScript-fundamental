// const coding = ['JavaScript', 'C++', 'Ruby', 'Java'];

// const values = coding.forEach( (item) =>{
//     // console.log(item);
//     return item
// })

// console.log(values);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArr = arr.filter((num) => num > 4);
// const newArr = arr.filter((num) => {
//     return num >4
// });
const newNums = [];
arr.forEach( (num)=>{
    if(num>4){
        newNums.push(num)
    }
})
// console.log(newNums);


const books = [
    {title:'Book One', genre:'Fiction', publish:1998, edition: 2004},
    {title:'Book Two', genre:'Non-Fiction', publish:1998, edition: 2006},
    {title:'Book Three', genre:'History', publish:1948, edition: 2007},
    {title:'Book Four', genre:'Fiction', publish:2000, edition: 2010},
    {title:'Book Five', genre:'History', publish:1978, edition: 2014},
    {title:'Book Six', genre:'Fiction', publish:1978, edition: 2014},
    {title:'Book Seven', genre:'Science', publish:1960, edition: 2010},
    {title:'Book Eight', genre:'Non-Fiction', publish:1988, edition: 2023},
];

let userBooks = books.filter( (book)=>(
    book.genre === 'History'
))

userBooks = books.filter( (book)=>(
    book.publish>=1955 && book.genre === 'History'
))
console.log(userBooks);

