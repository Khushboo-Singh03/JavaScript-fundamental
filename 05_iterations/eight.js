const num = [1, 2, 3];
const total = num.reduce(function (acc, currVal) {
    // console.log(`acc ${acc} and currVal ${currVal}`);
    return acc + currVal
}, 0);
// console.log(total);


const totals = num.reduce((acc, currVal) => (acc + currVal), 0)
console.log(totals);

const shoppingCart = [
    {
        itemName: "Js course",
        price: 3000,
    },
    {
        itemName: "mobile dev",
        price: 5900,
    },
    {
        itemName: "web dev",
        price: 3500,
    },
    {
        itemName: "Data analyst",
        price: 12000,
    },
    {
        itemName: "C#",
        price: 6000,
    },
]

const cart = shoppingCart.reduce((acc, item) => (
    acc + item.price
), 0)
console.log(cart);