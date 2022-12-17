var sum = 0;
var n;
while (n !== 0 && sum <= 100) {
  n = parseInt(prompt('Enter A number:'));
  sum += n;
  if(sum>=100)
  break;
}
alert(sum);
