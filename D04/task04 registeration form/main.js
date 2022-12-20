//search prop
var userdata = location.search.split('&');
var gender = userdata[6].split('=')[1];
document.body.innerHTML = '<h1> WELCOME </h1>';
document.body.innerHTML += '<br>';
document.body.innerHTML += userdata[0].split('=')[1];

if (gender == 'female') {
  document.body.innerHTML += '<img src="girl.jpg" > ';
} else {
  document.body.innerHTML += '<img src="boy.png" > ';
}
