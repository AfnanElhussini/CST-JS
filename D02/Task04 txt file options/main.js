var arraySize = parseInt(prompt('Enter array size'.trim()));

if (arraySize != '' && arraySize != null && !isNaN(arraySize)) {

  var arr = prompt('ENTER ARRAY').split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
  }
  
  if (arraySize == arr.length) {
    var option = prompt('ENTER OPTION');
  
    switch (option) {
      case 'a':
        alert(arr);
        break;
  
      case 'b':
        var ascendingArr = arr.sort(function (A, B) {
          return A - B;
        });
        alert(ascendingArr);
        break;
  
      case 'c':
        var descendingArr = arr.sort(function (A, B) {
          return B - A;
        });
        alert(descendingArr);
        break;
  
      case 'd':
        alert(arr.reverse());
        break;
  
      case 'e':
        var evenNumbers = [];
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
          }
        }
  
        if (evenNumbers.length === 0) {
          alert('No even numbers found');
        } else {
          alert(evenNumbers);
        }
        break;
  
      case 'f':
        var divisbleArray = [];
        var divisibleNumber = parseInt(prompt('Enter Divisible'));
  
        arr.map(function (number) {
          if (number % divisibleNumber == 0) {
            divisbleArray.push(number);
          }
        });
  
        if (divisbleArray.length != 0) {
          alert(divisbleArray);
        } else {
          alert('No numbers found');
        }
  
        break;
  
      case 'g':
        alert(
          arr.map(function (number) {
            return number - 0.3;
          })
        );
        break;
  
      case 'h':
        alert(arr.join('***'));
        break;
    }
  } else {
    alert('ENTER SAME SIZE');
  }
}else{
  alert('ENTER VALID NUMBER');
}
