// add prompt values to array
var heading = [];
for (var i = 1; i <= 6; i++) {
  heading.push(prompt('Enter heading' + i));
}
for (var i = 0; i < heading.length; i++) {
    var h = document.createElement('h' + (i + 1));
    h.innerHTML = heading[i];
    document.body.appendChild(h);
}
