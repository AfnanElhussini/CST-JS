//write js code to convert a string into Pascal Case :
//input: "ali mohamed"
//output: "Ali Mohamed"

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
//================================================================================

// function longestWord(str) {
//   var words = str.split(' ');
//   var longestWord = '';
//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }

// console.log(longestWord('HI IAM AFNAN'));
// ================================================================================

// function arrangeAlphabet(str){
//     console.log(str.split('').sort().join(''))
// }
// arrangeAlphabet('javascript')

// ================================================================================

// function getDesiredMonth(date){
//     var myDate = new Date(date)
//     var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
//     console.log ( months[myDate.getMonth()] )
// }
// getDesiredMonth('2000-12-3')

// ================================================================================
// function getAreaCircle (raduis){
//     console.log(Math.PI * Math.pow(raduis,2))
// }
// getAreaCircle(10)
// ================================================================================

// function getRandomNames(arr){
//     console.log(
//          arr[ Math.floor(Math.random() * arr.length )] ,
//          arr[ Math.floor(Math.random() * arr.length )])

         // may repeated !!!
// }
// getRandomNames(['mikasa','afnan','blabla'])