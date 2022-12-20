var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var table = document.createElement('table');
var sum1 = 0 ;
var sum2 = 0;

var row1 = document.createElement('tr');
for (var i = 0; i < arr1.length; i++) {
  var rowData = document.createElement('td');
  rowData.innerHTML = arr1[i];
  sum1+=arr1[i]
  row1.appendChild(rowData);
}

table.appendChild(row1);

var row2 = document.createElement('tr');
for (var i = 0; i < arr2.length; i++) {
  var rowData = document.createElement('td');
  rowData.innerHTML = arr2[i];
  sum2+=arr2[i]
  row2.appendChild(rowData);
  table.appendChild(row2);
}

console.log(sum1 , sum2);

document.body.appendChild(table);