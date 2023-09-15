# Projects related to DOM

## project link
[click here] (https://stackblitz.com/edit/js-egocsm?file=index.html)

# Solution Code

## Project 1

``` javascript
console.log("Jiya")


const buttons = document.querySelectorAll('.button');
// console.log(buttons);

const body = document.querySelector('body');

buttons.forEach((button) => {
  // console.log(button)
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id == 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'purple') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'cyan') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```

# Solution Code
## Project 2

``` javascript

const form = document.querySelector('form');

// this usecase will give you empty
// const height =  parseInt(document.querySelector('#height').value);
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === ' ' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === ' ' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 1000)).toFixed(2);
    //  to show the result
    results.innerHTML = `<span>${BMI}</span>`;
  }
});

```

# Solution Code
## Project 3

``` javascript


// const clock = document.getElementById('#clock')
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```