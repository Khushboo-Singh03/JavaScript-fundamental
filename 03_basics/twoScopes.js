let a = 300


if(true){
    let a =10;
    const c = 30;
    // console.log("Inner :", a);
}

// console.log(a);
// console.log(b);

function one(){
    const userName = "Jiya"

    function two(){
        const website = "Youtube"
        console.log(userName);
    }
    // console.log(website);

    // two()
}

// one()

if (true) {
    const userName = "Jiya"
    if (userName==="Jiya") {
        const website = " Youtube"
        // console.log(userName+website);
    }
    // console.log("Website", website)
}
// console.log(userName);


// ====================     Interesting     ===============

addOne(5)

function addOne(num){
    return num + 1
}
// console.log(addOne(5));

// addTwo(5)            // we can't use before initializations
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));
