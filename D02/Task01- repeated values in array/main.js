var arr = prompt('enter numbers').split(',');
console.log(arr);

var table = document.createElement('table');
var duplicateArray = [];
var tableHeadTr = document.createElement('tr');
var tableHeadData = document.createElement('th');

tableHeadData.innerHTML = 'VALUES';

tableHeadTr.appendChild(tableHeadData);
table.appendChild(tableHeadTr);

for (var i = 0; i < arr.length; i++) {
  if (arr[i].trim() == '') {
    alert('Please enter valid numbers');
    location.reload();
  } else {
    var row = document.createElement('tr');
    var rowData = document.createElement('td');

    rowData.innerHTML = arr[i];

    row.appendChild(rowData);
    table.appendChild(row);
  }
}

var duplicate = false;
var duplicateNumber = 0;
var duplicateRow = 0;

// 1 1 1 1 1
// [] --> [1] , [1]
for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      duplicate = true;
      duplicateNumber = arr[i];
      // check if duplicate number is already in duplicateArray
      if (duplicateArray.indexOf(arr[i]) == -1) {
        duplicateArray.push(arr[i]);
      }
      console.log(duplicateArray);
    }
  }
}

if (duplicate) {
  //   get all duplicate numbers from array and get its row number and display it
  for (var i = 0; i < duplicateArray.length; i++) {
    var duplicateRowTr = document.createElement('tr');
    var duplicateRowTd = document.createElement('td');
    duplicateRowTd.innerHTML =
      'Duplicate number is ' +
      duplicateArray[i] +
      ' and its row number is ' +
      (arr.indexOf(duplicateArray[i]) + 1);
    duplicateRowTr.appendChild(duplicateRowTd);
    table.appendChild(duplicateRowTr);
  }
} else {
  var duplicateRowTr = document.createElement('tr');
  var duplicateRowTd = document.createElement('td');
  duplicateRowTd.innerHTML = 'No duplicate number';
  duplicateRowTr.appendChild(duplicateRowTd);
  table.appendChild(duplicateRowTr);
}

document.body.appendChild(table);
