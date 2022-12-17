var arr = [];
var sum = 0;
var product = 1;
var divide;

for (var i = 0; i < 3; i++) {
  arr[i] = parseInt(prompt("Enter Number"));
  sum += arr[i];
  product *= arr[i];

  if (i == 0) {
    divide = arr[i];
  } else {
    divide /= arr[i];
  }
}

document.write("ARRAY IS :", [arr], "<br>");
document.write("SUM IS :", sum, "<br>");
document.write("PRODUCT IS :", product, "<br>");
document.write("DIVIDE IS :", divide, "<br>");
