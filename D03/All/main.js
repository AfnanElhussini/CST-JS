// // take an array using prompt + split
// var arr = prompt('ENTER YOUR ARRAY AND SPLIT WITH , ').split(',')
// // '1' , '2' ,'3'
// // var numArr =[]
// for(var i=0;i<arr.length;i++ ){
//      arr[i] = parseInt(arr[i])
//     // numArr.push(parseInt(arr[i]))
// }
// console.log(arr)

// =========================================================================================

// var arr = prompt('enter numbers').split(' ');

// var table = document.createElement('table');
// var duplicateArray = [];
// var tableHeadTr = document.createElement('tr');
// var tableHeadData = document.createElement('th');

// tableHeadData.innerHTML = 'VALUES';

// tableHeadTr.appendChild(tableHeadData);
// table.appendChild(tableHeadTr);

// for (var i = 0; i < arr.length; i++) {
//   var row = document.createElement('tr');
//   var rowData = document.createElement('td');

//   rowData.innerHTML = arr[i];

//   row.appendChild(rowData);
//   table.appendChild(row);
// }

// var duplicate = false;
// var duplicateNumber = 0;
// var duplicateRow = 0;

// // 1 1 1 1 1
// // [] --> [1] , [1]
// for (var i = 0; i < arr.length; i++) {
//   for (var j = i + 1; j < arr.length; j++) {
//     if (arr[i] == arr[j]) {
//       duplicate = true;
//       duplicateNumber = arr[i];
//       // check if duplicate number is already in duplicateArray
//       if (duplicateArray.indexOf(arr[i]) == -1) {
//           duplicateArray.push(arr[i]);
//       }
//       console.log(duplicateArray);
//     }
//   }
// }

// if (duplicate) {
//   //   get all duplicate numbers from array and get its row number and display it
//   for (var i = 0; i < duplicateArray.length; i++) {
//     var duplicateRowTr = document.createElement('tr');
//     var duplicateRowTd = document.createElement('td');
//     duplicateRowTd.innerHTML =
//       'Duplicate number is ' +
//       duplicateArray[i] +
//       ' and its row number is ' +
//       (arr.indexOf(duplicateArray[i]) + 1);
//     duplicateRowTr.appendChild(duplicateRowTd);
//     table.appendChild(duplicateRowTr);
//   }
// } else {
//   var duplicateRowTr = document.createElement('tr');
//   var duplicateRowTd = document.createElement('td');
//   duplicateRowTd.innerHTML = 'No duplicate number';
//   duplicateRowTr.appendChild(duplicateRowTd);
//   table.appendChild(duplicateRowTr);
// }

// document.body.appendChild(table);
// =========================================================================================
// var userName = prompt('Enter you name ...');
// var phoneNumber = prompt('Enter your phone number with format XXX-XXXXXXXX');

// if (
//   (userName != '' || userName.length >= 3) &&
//   phoneNumber.length == 12 &&
//   (phoneNumber.substring(0, 3) == '010' ||
//     phoneNumber.substring(0, 3) == '011' ||
//     phoneNumber.substring(0, 3) == '012' ||
//     phoneNumber.substring(0, 3) == '015') &&
//   phoneNumber[3] == '-'
// ) {
//   alert('HI ' + userName + ' YOUR PHONE IS ' + phoneNumber);
// } else {
//   alert('PLEASE ENTER VALID DATA');
// }
// =========================================================================================

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// var table = document.createElement('table');
// var sum1 = 0 ;
// var sum2 = 0;

// var row1 = document.createElement('tr');
// for (var i = 0; i < arr1.length; i++) {
//   var rowData = document.createElement('td');
//   rowData.innerHTML = arr1[i];
//   sum1+=arr1[i]
//   row1.appendChild(rowData);
// }

// table.appendChild(row1);

// var row2 = document.createElement('tr');
// for (var i = 0; i < arr2.length; i++) {
//   var rowData = document.createElement('td');
//   rowData.innerHTML = arr2[i];
//   sum2+=arr2[i]
//   row2.appendChild(rowData);
//   table.appendChild(row2);
// }

// console.log(sum1 , sum2);

// document.body.appendChild(table);

// ================================================================================

// write js code to convert a string into Pascal Case :
// input: "ali mohamed"
// output: "Ali Mohamed"

// function pascal(str) {
//   var result = '';

//   for (var i = 0; i < str.length; i++) {
//     if (str[i - 1] === ' ' || i === 0) {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i].toLowerCase();
//     }
//   }
//   console.log(result);
// }
// pascal('ali mohamed');
// // ================================================================================

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
// // ================================================================================

// function arrangeAlphabet(str){
//     console.log(str.split('').sort().join(''))
// }
// arrangeAlphabet('javascript')

// // ================================================================================

// function getDesiredMonth(date){
//     var myDate = new Date(date)
//     var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
//     console.log ( months[myDate.getMonth()] )
// }
// getDesiredMonth('2000-12-3')

// // ================================================================================
// function getAreaCircle (raduis){
//     console.log(Math.PI * Math.pow(raduis,2))
// }
// getAreaCircle(10)
// // ================================================================================

// function getRandomNames(arr){
//     console.log(
//          arr[ Math.floor(Math.random() * arr.length )] ,
//          arr[ Math.floor(Math.random() * arr.length )])

//          // may repeated !!!
// }
// getRandomNames(['mikasa','afnan','blabla'])

// =======================================================================================

// var arraySize = parseInt(prompt('Enter array size'));

// var arr = prompt('ENTER ARRAY').split(' ');
// for (var i = 0; i < arr.length; i++) {
//   arr[i] = parseInt(arr[i]);
// }

// if (arraySize == arr.length) {
//   var option = prompt('ENTER OPTION');

//   switch (option) {
//     case 'a':
//       alert(arr);
//       break;

//     case 'b':
//       var ascendingArr = arr.sort(function (A, B) {
//         return A - B;
//       });
//       alert(ascendingArr);
//       break;

//     case 'c':
//       var descendingArr = arr.sort(function (A, B) {
//         return B - A;
//       });
//       alert(descendingArr);
//       break;

//     case 'd':
//       alert(arr.reverse());
//       break;

//     case 'e':
//       var evenNumbers = [];
//       for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//           evenNumbers.push(arr[i]);
//         }
//       }

//       if (evenNumbers.length === 0) {
//         alert('No even numbers found');
//       } else {
//         alert(evenNumbers);
//       }
//       break;

//     case 'f':
//       var divisbleArray = [];
//       var divisibleNumber = parseInt(prompt('Enter Divisible'));

//       arr.map(function (number) {
//         if (number % divisibleNumber == 0) {
//           divisbleArray.push(number);
//         }
//       });

//       if (divisbleArray.length != 0) {
//         alert(divisbleArray);
//       } else {
//         alert('No numbers found');
//       }

//       break;

//     case 'g':
//       alert(
//         arr.map(function (number) {
//           return number - 0.3;
//         })
//       );
//       break;

//     case 'h':
//       alert(arr.join('***'));
//       break;
//   }
// } else {
//   alert('ENTER SAME SIZE');
// }

// =======================================================================================

var myButton = document.createElement('button');
var myImg = document.createElement('img');
myButton.innerHTML = 'DECREASE COUNTER';
var myImagesArr = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png',
  '9.png',
  '10.png',
];

var counter = 10;
myButton.onclick = function () {
    counter--;
  document.body.style.background = 'url(' + myImagesArr[counter] + ')';
  console.log(counter)
  if(counter == 0){
    window.close();
  }
};

document.body.appendChild(myButton);
