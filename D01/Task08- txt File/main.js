var arr = [10.2, 20, 34, 333.12345];
var toFixedParam = parseInt(prompt('HOW MANY DECIMAL PLACES DO YOU WANT TO DISPLAY NUMBERS'))
for(var i = 0 ; i<arr.length ; i++){
    
    document.write(arr[i].toFixed(toFixedParam))
    document.write('<br>')
}