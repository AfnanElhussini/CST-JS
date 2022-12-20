//write js code to convert a string into Pascal Case :
input: "ali mohamed"
output: "Ali Mohamed"

function pascal(str) {
  var result = '';

  for (var i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ' || i === 0) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  console.log(result);
}
pascal('ali mohamed');