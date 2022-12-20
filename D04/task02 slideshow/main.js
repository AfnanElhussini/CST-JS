var imagesarray = [
  './Images/1.jpg',
  './Images/2.jpg',
  './Images/3.jpg',
  './Images/4.jpg',
];

var i = 0;
var changing_time = 1000;

function startFun() {
  t = setInterval(nextFun, changing_time);
  document.getElementById('startBtn').style.cursor = 'not-allowed';
}
// function startFun(){
//   if(t==undefined){
//     t=setInterval(nextFun(), changing_time);
//   }
// }
function nextFun() {
  i++;
  if (i >= imagesarray.length) {
    i = 0;
  }
  myimg.src = imagesarray[i];
}

function prevFun() {
  i--;
  if (i < 0) i = imagesarray.length - 1;
  myimg.src = imagesarray[i];
}

/*function stopFun() {
  clearInterval(t);
  document.getElementById('startBtn').style.cursor = 'pointer';
}*/
function stopFun(){
  if(t!= undefined){
    clearInterval(t)
    t=undefined;
    
  }
}
