# Projects related to DOM

## project link
[click here] (https://stackblitz.com/edit/js-egocsm?file=index.html)

# Solution Code

## project 1

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