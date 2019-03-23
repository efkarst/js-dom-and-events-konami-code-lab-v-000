const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// UUDDLRLRba
let index = 0

function init() {
  document.addEventListener('keydown', function(e) {return onKeyDownHandler(e)})
}

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;
    if (index === code.length) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0;
  }
}


// const main = document.getElementById('main');
 
// main.addEventListener('click', function(event) {
//   alert('I was clicked!');
// });


// const input = document.querySelector('input');
 
// input.addEventListener('keydown', function(e) {
//   console.log(e.which);
// });