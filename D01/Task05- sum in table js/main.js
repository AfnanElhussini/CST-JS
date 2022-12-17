var arr = [1, 2, 3, 4, 5, 6];
var sum = 0;

var table = document.createElement("table");
var tableHeadTr = document.createElement("tr");
var tableHeadData = document.createElement("th");
tableHeadData.innerHTML = "VALUES";

tableHeadTr.appendChild(tableHeadData);
table.appendChild(tableHeadTr);

for (var i = 0; i < arr.length; i++) {
  var row = document.createElement("tr");
  var rowData = document.createElement("td");
  rowData.innerHTML = arr[i];
  row.appendChild(rowData);
  table.appendChild(row);
  sum += arr[i];
}

var tableFooter = document.createElement("tr");
var footerData = document.createElement("td");
footerData.innerHTML = "Summition=" + sum;

tableFooter.appendChild(footerData);
table.appendChild(tableFooter);

document.body.appendChild(table);
