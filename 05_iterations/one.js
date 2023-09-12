for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (i==5) {
        // console.log("5 is number");
    }
    // console.log(element);
}

for (let i = 1; i <= 3; i++) {
    // console.log(`outer loop value :${i}`);
    for (let j = 1; j <= 5; j++) {
        // console.log(`inner loop value :${j} and outer loop ${i}`);

        // console.log(i + '*'+j+' = '+ i*j);
    }
}

let myArr = ["flash", "batman", "Superman"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}


// Break and Continue 

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        // console.log(`Detected 5`);
        break
    }
    // console.log(`value of i is ${i}`);
}
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        // console.log(`Detected 5`);
        continue
    }
    // console.log(`value of i is ${i}`);
}


// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum += i;
//   console.log( sum);
// }

let factorial = 1;
for (let i = 1; i <= 5; i++) {
  factorial *= i;
//   console.log( factorial)
}
// console.log("Factorial of 5 is: " + factorial);



for (let i = 0; i < 3; i++) {
    let row = '';

    // Add spaces before the stars
    for (let j = 0; j < 3 - i - 1; j++) {
      row += ' ';
    }

    // Add stars for this row
    for (let k = 0; k < 2 * i + 1; k++) {
      row += '*';
    }

    console.log(row);
  }
