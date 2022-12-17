var myInput = document.createElement("input");
var myBtn = document.createElement("button");
myBtn.innerHTML = "CLICK ME";
var myResult = document.createElement("div");

document.body.appendChild(myInput);
document.body.appendChild(myBtn);
document.body.appendChild(myResult);

function fizzCheck(x) {
  if (x % 3 == 0 && x % 5 == 0) {
    // or number % 15 == 0
    // alert('FIZZ BUZZ');
    myResult.innerHTML = "FIZZ BUZZ";
  } else if (x % 3 == 0) {
    myResult.innerHTML = "FIZZ";
  } else if (x % 5 == 0) {
    myResult.innerHTML = "BUZZ";
  } else {
    myResult.innerHTML = "NOT DIVISIBLE BY 3 , 5 , (3 & 5)";
  }
}

myBtn.onclick = function () {
  fizzCheck(parseInt(myInput.value));
};
// var number = parseInt(prompt('ENTER NUMBER'));
// if (number % 3 == 0 && number % 5 == 0 ) {
//     // or number % 15 == 0
//     alert('FIZZ BUZZ');
// } else if (number % 3 == 0 ) {
//     alert('FIZZ');
// } else if (number % 5 == 0) {
//     alert('BUZZ');
// }
