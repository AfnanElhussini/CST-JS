var myButton = document.createElement('button');
//var myImg = document.createElement('img');
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