document.write('This is Your Image');
var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
var image = prompt('Enter image name from 1.jpg to 5.jpg');
var found = false;
for (var i = 0; i < images.length; i++) {
  if (images[i] === image) {
    var color = prompt('Enter border color');
    found = true;
    break;
  }
}

if (found) {
  
  document.write('<img src="'+ image + '" style="width:300px; height:300px; border: 2px solid ' + color + '">');
    } 
    else {
    document.write('sorry, Image not found');
}
